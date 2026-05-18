import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Zap, ShieldCheck, Cpu } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import storyImg from "@/assets/story.jpg";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEXUSAURA — Future Standard. Available Now." },
      {
        name: "description",
        content:
          "Premium audio, wearables, and vision systems. Engineered for the next generation of personal interface.",
      },
      { property: "og:title", content: "NEXUSAURA — Future Standard" },
      {
        property: "og:description",
        content:
          "Cinematic engineering. Subterranean craft. Shop the AURA CORE X collection.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/60 to-brand-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent,var(--color-brand-bg)_80%)]" />
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-5xl animate-fade-up">
          <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] block">
            Future Standard / Available Now
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-extrabold tracking-tighter leading-[0.9]">
            AURA{" "}
            <span className="text-gradient-accent text-glow">CORE X</span>
          </h1>
          <p className="text-foreground/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the intersection of high-fidelity engineering and
            transcendental design. The next evolution of personal interface
            starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/shop"
              className="px-10 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors inline-flex items-center justify-center gap-2"
            >
              Shop Collection <ArrowRight className="size-4" />
            </Link>
            <button className="px-10 py-4 border border-white/20 hover:border-accent hover:text-accent transition-colors uppercase text-xs tracking-widest inline-flex items-center justify-center gap-2">
              <Play className="size-4" /> Watch Film
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.4em] text-foreground/30 animate-pulse">
          Scroll
        </div>
      </section>

      {/* Marquee strip */}
      <section className="border-y border-white/5 overflow-hidden">
        <div className="flex gap-16 py-6 whitespace-nowrap animate-[shimmer_40s_linear_infinite] text-foreground/30 text-xs font-medium uppercase tracking-[0.4em]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              <span>Subterranean Engineering</span>
              <span className="text-accent">◆</span>
              <span>Grade 5 Titanium</span>
              <span className="text-accent">◆</span>
              <span>Zero-Latency Sync</span>
              <span className="text-accent">◆</span>
              <span>Lifetime Warranty</span>
              <span className="text-accent">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Featured Components
            </h2>
            <p className="text-foreground/40 uppercase tracking-[0.3em] text-[10px]">
              Selected Innovations / Edition 01
            </p>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold uppercase tracking-widest border-b border-accent pb-1 text-accent self-start md:self-end inline-flex items-center gap-2"
          >
            View All <ArrowRight className="size-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
        <div className="absolute -top-32 -left-32 size-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 size-96 bg-accent-glow/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="relative">
            <div className="w-full aspect-square rounded-full border border-white/5 p-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={storyImg}
                  alt="Liquid metal sculpture representing fluid engineering"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 glass-card p-6 md:p-8 max-w-xs">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 font-bold">
                Innovation Hub
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Built by the world's leading engineers in subterranean labs,
                designed for the surface.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Crafting the <span className="italic font-light">unseen</span>{" "}
              details.
            </h2>
            <p className="text-base md:text-lg text-foreground/50 leading-relaxed">
              Nexus Aura isn't just about utility. It's about how the object
              feels in your presence. We use materials that shouldn't exist to
              create experiences you'll never forget.
            </p>
            <ul className="space-y-4">
              {[
                { Icon: Zap, label: "Zero-latency sync" },
                { Icon: ShieldCheck, label: "Titanium-grade shells" },
                { Icon: Cpu, label: "Biometric security layer" },
              ].map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em]"
                >
                  <span className="size-9 rounded-full bg-accent/10 grid place-items-center text-accent">
                    <Icon className="size-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-block mt-4 border-b-2 border-accent text-accent font-bold uppercase text-xs tracking-[0.2em] pb-2"
            >
              Read The Manifest
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4">
            The Catalog
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Four Categories.<br />One Standard.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {(
            [
              { id: "audio", label: "Audio", img: PRODUCTS[0].image },
              { id: "wearables", label: "Wearables", img: PRODUCTS[1].image },
              { id: "core", label: "Core", img: PRODUCTS[2].image },
              { id: "vision", label: "Vision", img: PRODUCTS[3].image },
            ] as const
          ).map((c) => (
            <Link
              key={c.id}
              to="/shop"
              search={{ category: c.id }}
              className="group glass-card aspect-[3/4] overflow-hidden relative"
            >
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 flex justify-between items-end">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">
                  {c.label}
                </h3>
                <ArrowRight className="size-4 text-accent group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-brand-surface border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-12 text-center">
            Voices From The Field
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote:
                  "The Sonic-1 is the first piece of hardware that disappears into the music. I forget I'm wearing it.",
                name: "Lena Choi",
                title: "Composer, Berlin",
              },
              {
                quote:
                  "Vortex Wrist replaced three devices on my desk. The build quality is on another level.",
                name: "Marcus D.",
                title: "Industrial Designer, NYC",
              },
              {
                quote:
                  "It feels like a brand that respects the object. Nothing extra. Nothing missing.",
                name: "Aiko Tanaka",
                title: "Art Director, Tokyo",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="glass-card p-8 space-y-6 hover:border-accent/30 transition-colors"
              >
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  "{t.quote}"
                </p>
                <figcaption className="pt-6 border-t border-white/5">
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/40 mt-1">{t.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Step into the{" "}
            <span className="text-gradient-accent">Future Standard.</span>
          </h2>
          <p className="text-foreground/50 text-lg max-w-2xl mx-auto">
            Edition 01 is shipping now. Limited inventory, lifetime warranty,
            free worldwide delivery.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-accent transition-colors"
          >
            Enter The Catalog <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
