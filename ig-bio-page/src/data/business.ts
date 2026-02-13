export interface Service {
  name: string;
  amount: number;
}

export type LinkAction =
  | { type: "link"; label: string; url: string }
  | { type: "map"; label: string };

export interface Business {
  name: string;
  tagline: string;
  phone: string;
  homeLink: string;

  metaDescription?: string;
  favicon?: string;

  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;

  location: {
    address: string;
    mapSrc: string;
  };

  actions: LinkAction[];

  pricing?: Service[];
  gallery: string[];
}

const PHONE_NUMBER = "2347079983007";
const WHATSAPP_MESSAGE =
  "Hi, I'm interested in creating a Instagram link in bio page for my business.";

export const business: Business = {
  name: "Glow Nails",
  tagline: "Professional nail tech",
  phone: PHONE_NUMBER,
  homeLink: "https://instagram.com/glownails",

  metaDescription:
    "Glow Nails – Professional nail tech services in Ede, Osun State. Book appointments or check our pricing and gallery.",
  favicon: "/favicon.ico",

  ogTitle: "Glow Nails – Professional Nail Tech in Ede",
  ogDescription:
    "Book appointments or check our pricing and gallery. Glow Nails provides premium nail services in Osun State.",
  ogImage: "/images/nails-og.jpg",
  twitterCard: "summary_large_image",
  twitterSite: "@glownails",
  twitterCreator: "@glownails",

  location: {
    address: "Ede, Osun State.",
    mapSrc: "https://www.google.com/maps?q=7.723209,4.418694&z=15&output=embed"
  },

  actions: [
    {
      type: "link",
      label: "Book Appointment",
      url: `https://wa.me/${PHONE_NUMBER}/?text=${WHATSAPP_MESSAGE}`
    },
    {
      type: "link",
      label: "Instagram Page",
      url: "https://instagram.com/glownails"
    },
    {
      type: "link",
      label: "Gmail Address",
      url: "mailto:charmingdc002@gmail.com"
    },
    { type: "map", label: "Our Location" }
  ],

  pricing: [
    { name: "Basic Manicure", amount: 5000 },
    { name: "French Manicure", amount: 6000 },
    { name: "Gel Manicure", amount: 8000 },
    { name: "Spa Manicure", amount: 7000 },
    { name: "Basic Pedicure", amount: 6000 }
  ],

  gallery: ["/images/nails1.jpg", "/images/nails2.jpg", "/images/nails3.jpg"]
};
