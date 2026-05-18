import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, type Product } from "@/data/products";

export interface CartLine {
  productId: string;
  qty: number;
  color?: string;
}

interface CartCtx {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (productId: string, color?: string) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clear: () => void;
  detailed: { product: Product; line: CartLine }[];
}

const Ctx = createContext<CartCtx | null>(null);
const STORAGE_KEY = "nexusaura.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  const value = useMemo<CartCtx>(() => {
    const detailed = lines
      .map((line) => {
        const product = PRODUCTS.find((p) => p.id === line.productId);
        return product ? { product, line } : null;
      })
      .filter((x): x is { product: Product; line: CartLine } => !!x);

    const subtotal = detailed.reduce(
      (sum, { product, line }) => sum + product.price * line.qty,
      0,
    );
    const count = lines.reduce((n, l) => n + l.qty, 0);

    return {
      lines,
      count,
      subtotal,
      detailed,
      add: (productId, color) =>
        setLines((prev) => {
          const existing = prev.find((l) => l.productId === productId);
          if (existing) {
            return prev.map((l) =>
              l.productId === productId ? { ...l, qty: l.qty + 1 } : l,
            );
          }
          return [...prev, { productId, qty: 1, color }];
        }),
      remove: (productId) =>
        setLines((prev) => prev.filter((l) => l.productId !== productId)),
      setQty: (productId, qty) =>
        setLines((prev) =>
          qty <= 0
            ? prev.filter((l) => l.productId !== productId)
            : prev.map((l) => (l.productId === productId ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
    };
  }, [lines]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}