import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative border-t border-white/5 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 space-y-6">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter">
            NEXUS<span className="text-accent">AURA</span>
          </Link>
          <p className="text-foreground/40 text-sm leading-relaxed max-w-xs">
            Global leaders in premium interface technology. Redefining the human
            experience through elegant engineering.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            Discovery
          </h4>
          <nav className="flex flex-col gap-3 text-sm text-foreground/50">
            <Link to="/shop" className="hover:text-foreground transition-colors">
              New Arrivals
            </Link>
            <Link
              to="/shop"
              search={{ category: "audio" }}
              className="hover:text-foreground transition-colors"
            >
              Audio Series
            </Link>
            <Link
              to="/shop"
              search={{ category: "vision" }}
              className="hover:text-foreground transition-colors"
            >
              Visual Systems
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              The Lab
            </Link>
          </nav>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
            Company
          </h4>
          <nav className="flex flex-col gap-3 text-sm text-foreground/50">
            <Link to="/about" className="hover:text-foreground transition-colors">
              Sustainability
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors">
              Press
            </Link>
          </nav>
        </div>
        <div className="col-span-2 md:col-span-4 space-y-6 md:flex md:justify-between md:items-end md:space-y-0 pt-12 border-t border-white/5">
          <div className="space-y-4 max-w-md">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Protocol
            </h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
              className="flex items-center bg-white/5 border border-white/10 focus-within:border-accent transition-colors"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe for early access"
                className="bg-transparent flex-1 px-4 py-3 text-sm placeholder:text-foreground/30 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="px-4 text-accent hover:translate-x-1 transition-transform"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
            {done && (
              <p className="text-xs text-accent">
                You're on the list. Welcome to the protocol.
              </p>
            )}
          </div>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="size-10 rounded-full bg-white/5 grid place-items-center hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/30">
        <p>© {new Date().getFullYear()} Nexus Aura Systems. All rights reserved.</p>
        <p>System Status: Operational // v.4.0.2</p>
      </div>
    </footer>
  );
}