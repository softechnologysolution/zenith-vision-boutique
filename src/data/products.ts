import sonic from "@/assets/product-sonic.jpg";
import vortex from "@/assets/product-vortex.jpg";
import monolith from "@/assets/product-monolith.jpg";
import lens from "@/assets/product-lens.jpg";
import pulse from "@/assets/product-pulse.jpg";
import orbit from "@/assets/product-orbit.jpg";

export type Category = "audio" | "wearables" | "core" | "vision";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  badge?: "NEW" | "LIMITED" | "BESTSELLER";
  colors: { name: string; hex: string }[];
  specs: { label: string; value: string }[];
}

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  { id: "audio", label: "Audio", blurb: "Neuro-adaptive sound" },
  { id: "wearables", label: "Wearables", blurb: "Worn intelligence" },
  { id: "core", label: "Core", blurb: "Encrypted systems" },
  { id: "vision", label: "Vision", blurb: "Augmented sight" },
];

export const PRODUCTS: Product[] = [
  {
    id: "aura-sonic-1",
    name: "Aura Sonic-1",
    tagline: "Neuro-Adaptive Audio Interface",
    description:
      "Lossless spatial audio that learns the contours of your hearing. Aluminum-magnesium drivers tuned in our subterranean acoustics lab.",
    price: 599,
    image: sonic,
    category: "audio",
    badge: "NEW",
    colors: [
      { name: "Obsidian", hex: "#0a0a0a" },
      { name: "Cyan Edge", hex: "#00f0ff" },
    ],
    specs: [
      { label: "Driver", value: "42mm Be-coated" },
      { label: "Battery", value: "60 hours" },
      { label: "Weight", value: "284g" },
      { label: "ANC", value: "Adaptive Mk.III" },
    ],
  },
  {
    id: "vortex-wrist",
    name: "Vortex Wrist",
    tagline: "Haptic Reality Controller",
    description:
      "A wrist-worn interface for the post-screen era. Sub-millisecond haptics, sapphire crystal, eight days of motion.",
    price: 850,
    image: vortex,
    category: "wearables",
    colors: [
      { name: "Graphite", hex: "#1a1a1a" },
      { name: "Silver Mist", hex: "#cfcfd4" },
    ],
    specs: [
      { label: "Display", value: "OLED retina-grade" },
      { label: "Battery", value: "8 days" },
      { label: "Sensors", value: "12 biometric" },
      { label: "Water", value: "10 ATM" },
    ],
  },
  {
    id: "nexus-monolith",
    name: "Nexus Monolith",
    tagline: "Encrypted Core System",
    description:
      "A single slab of CNC-milled titanium housing the entire Nexus operating layer. End-to-end on-device intelligence.",
    price: 1299,
    image: monolith,
    category: "core",
    badge: "LIMITED",
    colors: [
      { name: "Void", hex: "#050505" },
      { name: "Plasma", hex: "#bc00ff" },
    ],
    specs: [
      { label: "Chip", value: "Aura X3 / 3nm" },
      { label: "Display", value: "6.7\" XDR" },
      { label: "Storage", value: "1TB" },
      { label: "Build", value: "Grade 5 Titanium" },
    ],
  },
  {
    id: "halo-lens",
    name: "Halo Lens",
    tagline: "Spatial Vision Interface",
    description:
      "Lightweight AR glasses with waveguide optics and field-tracked rendering. The screen, dissolved.",
    price: 1499,
    image: lens,
    category: "vision",
    badge: "NEW",
    colors: [
      { name: "Polar", hex: "#e8e8e8" },
      { name: "Carbon", hex: "#1a1a1a" },
    ],
    specs: [
      { label: "FOV", value: "120°" },
      { label: "Weight", value: "78g" },
      { label: "Battery", value: "6 hours active" },
      { label: "Tracking", value: "6DoF inside-out" },
    ],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless Audio Capsule",
    description:
      "Eight microphones, zero-latency Bluetooth LE, and an aluminum case milled to a single tenth of a millimeter.",
    price: 299,
    image: pulse,
    category: "audio",
    badge: "BESTSELLER",
    colors: [
      { name: "Obsidian", hex: "#0a0a0a" },
      { name: "Quartz", hex: "#f2f2f2" },
    ],
    specs: [
      { label: "Driver", value: "11mm dynamic" },
      { label: "Battery", value: "32h (with case)" },
      { label: "Codec", value: "LC3, AptX Lossless" },
      { label: "Water", value: "IP57" },
    ],
  },
  {
    id: "orbit-speaker",
    name: "Orbit Speaker",
    tagline: "Ambient Field Speaker",
    description:
      "360° beam-formed sound from a single anodized aluminum cylinder. Reads the room, then disappears into it.",
    price: 449,
    image: orbit,
    category: "audio",
    colors: [
      { name: "Obsidian", hex: "#0a0a0a" },
      { name: "Ember", hex: "#ff8a3d" },
    ],
    specs: [
      { label: "Drivers", value: "5x beam-formed" },
      { label: "Battery", value: "24 hours" },
      { label: "Wireless", value: "Wi-Fi 7 / BT 5.4" },
      { label: "Weight", value: "1.2kg" },
    ],
  },
];

export const productById = (id: string) => PRODUCTS.find((p) => p.id === id);
export const productsByCategory = (c: Category) =>
  PRODUCTS.filter((p) => p.category === c);