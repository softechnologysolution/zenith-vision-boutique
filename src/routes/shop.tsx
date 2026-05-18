import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { PRODUCTS, CATEGORIES, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const searchSchema = z.object({
  category: z.enum(["audio", "wearables", "core", "vision"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop — NEXUSAURA" },
      {
        name: "description",
        content:
          "Browse the full NEXUSAURA catalog: audio, wearables, core systems, and vision interfaces.",
      },
      { property: "og:title", content: "Shop — NEXUSAURA" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  const { category } = Route.useSearch();
  const products = category
    ? PRODUCTS.filter((p) => p.category === category)
    : PRODUCTS;

  return (
    <div className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      <header className="mb-16 space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
          The Catalog / {products.length} pieces
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
          {category
            ? CATEGORIES.find((c) => c.id === category)?.label
            : "All Components"}
        </h1>
      </header>

      <div className="flex flex-wrap gap-2 mb-12">
        <FilterChip to={null} active={!category} label="All" />
        {CATEGORIES.map((c) => (
          <FilterChip
            key={c.id}
            to={c.id}
            active={category === c.id}
            label={c.label}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  to,
  active,
  label,
}: {
  to: Category | null;
  active: boolean;
  label: string;
}) {
  return (
    <Link
      to="/shop"
      search={to ? { category: to } : {}}
      className={`px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] border transition-colors ${
        active
          ? "bg-accent text-accent-foreground border-accent"
          : "border-white/10 text-foreground/60 hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </Link>
  );
}