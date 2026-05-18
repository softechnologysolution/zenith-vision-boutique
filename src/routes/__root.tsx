import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { CartProvider } from "@/lib/cart";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-bg px-4">
      <div className="max-w-md text-center space-y-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
          Signal Lost
        </p>
        <h1 className="text-8xl font-extrabold tracking-tighter text-gradient-accent">
          404
        </h1>
        <p className="text-foreground/50 text-sm">
          The page you're looking for has been moved, archived, or never existed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NEXUSAURA — Premium Interface Technology" },
      {
        name: "description",
        content:
          "NEXUSAURA designs and engineers premium audio, wearables, and vision systems. Crafted from rare materials. Tuned in subterranean labs.",
      },
      { name: "author", content: "Nexus Aura Systems" },
      { property: "og:site_name", content: "NEXUSAURA" },
      { property: "og:title", content: "NEXUSAURA — Premium Interface Technology" },
      {
        property: "og:description",
        content:
          "Premium audio, wearables, and vision systems. Engineered for the next generation of personal interface.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "theme-color", content: "#050505" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NEXUSAURA",
          url: "/",
          description:
            "Premium interface technology. Audio, wearables, vision and core systems.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-brand-bg text-foreground">
          <Nav />
          <main className="flex-1 pt-16 md:pt-20">
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
