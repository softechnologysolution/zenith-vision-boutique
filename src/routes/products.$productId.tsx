import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { productById, PRODUCTS } from "@/data/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = productById(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — NEXUSAURA` },
          { name: "description", content: loaderData.product.description },
          {
            property: "og:title",
            content: `${loaderData.product.name} — NEXUSAURA`,
          },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:type", content: "product" },
          { property: "og:image", content: loaderData.product.image },
          {
            property: "og:url",
            content: `/products/${loaderData.product.id}`,
          },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/products/${loaderData.product.id}` }]
      : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.product.name,
              description: loaderData.product.description,
              image: loaderData.product.image,
              offers: {
                "@type": "Offer",
                price: loaderData.product.price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          },
        ]
      : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [color, setColor] = useState(product.colors[0].name);
  const [added, setAdded] = useState(false);

  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, 3);

  return (
    <div className="px-6 md:px-8 py-12 md:py-20 max-w-7xl mx-auto">
      <nav
        aria-label="Breadcrumb"
        className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/40 mb-8 flex gap-2"
      >
        <Link to="/" className="hover:text-accent">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-accent">
          Shop
        </Link>
        <span>/</span>
        <span className="text-foreground/70">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div className="glass-card aspect-[4/5] overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            width={1024}
            height={1280}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <div className="absolute top-6 right-6 bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 backdrop-blur-md border border-accent/30">
              {product.badge}
            </div>
          )}
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-3">
              {product.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {product.name}
            </h1>
            <p className="text-3xl font-medium mt-4 text-gradient-accent">
              ${product.price.toLocaleString()}
            </p>
          </div>

          <p className="text-foreground/60 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">
              Finish — {color}
            </p>
            <div className="flex gap-3">
              {product.colors.map((c: { name: string; hex: string }) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  className={`size-10 rounded-full border-2 transition-all ${
                    color === c.name
                      ? "border-accent scale-110"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => {
                add(product.id, color);
                setAdded(true);
                setTimeout(() => setAdded(false), 1800);
              }}
              className="bg-white text-black py-4 font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors inline-flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="size-4" /> Added to cart
                </>
              ) : (
                <>Add to Cart — ${product.price.toLocaleString()}</>
              )}
            </button>
            <Link
              to="/cart"
              className="border border-white/20 hover:border-accent hover:text-accent py-4 text-center font-bold uppercase text-xs tracking-widest transition-colors"
            >
              View Cart
            </Link>
          </div>

          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">
              Specification
            </p>
            <dl className="grid grid-cols-2 gap-y-4 gap-x-6">
              {product.specs.map((s: { label: string; value: string }) => (
                <div key={s.label}>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                    {s.label}
                  </dt>
                  <dd className="text-sm font-medium mt-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-32">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Related Components
            </h2>
            <Link
              to="/shop"
              className="text-xs font-bold uppercase tracking-widest text-accent inline-flex items-center gap-2"
            >
              View All <ArrowRight className="size-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}