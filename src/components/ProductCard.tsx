import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$productId"
      params={{ productId: product.id }}
      className="group block space-y-5"
    >
      <div className="glass-card aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {product.badge && (
          <div
            className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 backdrop-blur-md border ${
              product.badge === "NEW"
                ? "bg-accent/10 text-accent border-accent/30"
                : product.badge === "LIMITED"
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-accent-glow/10 text-accent-glow border-accent-glow/30"
            }`}
          >
            {product.badge}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <div className="bg-white text-black text-center py-3 text-[11px] font-bold uppercase tracking-[0.2em]">
            View Product
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight">{product.name}</h3>
          <p className="text-foreground/40 text-xs mt-1">{product.tagline}</p>
        </div>
        <p className="text-accent font-medium whitespace-nowrap">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}