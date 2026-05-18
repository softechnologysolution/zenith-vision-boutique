import { Link } from "@tanstack/react-router";
import { useCart } from "@/lib/cart";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-extrabold tracking-tighter"
        >
          NEXUS<span className="text-accent">AURA</span>
        </Link>

        <div className="hidden md:flex gap-10 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
          <Link
            to="/shop"
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            Shop
          </Link>
          <Link
            to="/shop"
            search={{ category: "audio" }}
            className="hover:text-accent transition-colors"
          >
            Audio
          </Link>
          <Link
            to="/shop"
            search={{ category: "wearables" }}
            className="hover:text-accent transition-colors"
          >
            Wearables
          </Link>
          <Link
            to="/about"
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-accent transition-colors"
            activeProps={{ className: "text-accent" }}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            aria-label="Search"
            className="hidden md:grid size-9 place-items-center rounded-full hover:bg-white/5 transition-colors"
          >
            <Search className="size-4" />
          </button>
          <Link
            to="/cart"
            aria-label={`Cart (${count} items)`}
            className="relative grid size-9 place-items-center rounded-full hover:bg-white/5 transition-colors"
          >
            <ShoppingBag className="size-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-accent text-[9px] text-accent-foreground rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid size-9 place-items-center rounded-full hover:bg-white/5 transition-colors"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 px-6 py-6 space-y-4 bg-brand-bg">
          {[
            { to: "/shop", label: "Shop All" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium uppercase tracking-[0.2em] text-foreground/70 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}