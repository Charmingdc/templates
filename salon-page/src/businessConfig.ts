import { type BusinessConfig } from "./types";

export const salonConfig: BusinessConfig = {
  name: "Glow Salon",
  tagline: "Expert Styling. Vibrant Results.",
  whatsappNumber: "+2347079983007",
  whatsappMessage: "Hi there! I'd love to book a session at Glow Salon.",
  contactEmail: "hello@glowsalon.com",
  instagramUrl: "https://instagram.com/glowsalon",
  location: {
    address: "Luxury Row, Ede, Osun State",
    hours: "Tues - Sat: 9:00 AM – 7:00 PM",
    lat: 7.723209,
    lng: 4.418694
  },
  services: [
    {
      id: "1",
      title: "Master Braiding",
      description:
        "Precise, painless knotless braids that prioritize your hair health and look stunning for weeks.",
      icon: "braid"
    },
    {
      id: "2",
      title: "Seamless Wigs",
      description:
        "Natural-looking wig installations with expert lace blending and custom styling to match your face shape.",
      icon: "wig"
    },
    {
      id: "3",
      title: "Vibrant Color",
      description:
        "From subtle highlights to bold transformations. We use premium pigments that keep your hair shiny.",
      icon: "color"
    },
    {
      id: "4",
      title: "Deep Care",
      description:
        "Restorative treatments for the scalp and hair fiber. Perfect for maintaining moisture and growth.",
      icon: "care"
    }
  ],
  pricing: [
    { service: "Signature Knotless Braids", price: "₦35,000" },
    { service: "HD Lace Installation", price: "₦25,000" },
    { service: "Full Color Overhaul", price: "₦45,000" },
    { service: "Steam Therapy Treatment", price: "₦15,000" }
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1620331711600-af2af69a92c8?q=80&w=800&h=1200&auto=format&fit=crop",
      alt: "Knotless Braids"
    },
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&h=800&auto=format&fit=crop",
      alt: "Sleek Bob Cut"
    },
    {
      url: "https://images.unsplash.com/photo-1634449571010-0235959f8bad?q=80&w=800&h=1000&auto=format&fit=crop",
      alt: "Copper Balayage"
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&h=1200&auto=format&fit=crop",
      alt: "Bridal Styling"
    },
    {
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&h=900&auto=format&fit=crop",
      alt: "Lace Installation"
    },
    {
      url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&h=1100&auto=format&fit=crop",
      alt: "Hair Care Magic"
    }
  ]
};
