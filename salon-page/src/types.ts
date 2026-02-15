export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingItem {
  service: string;
  price: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  whatsappNumber: string;
  whatsappMessage: string;
  contactEmail: string;
  instagramUrl: string;
  location: {
    address: string;
    hours: string;
    lat: number;
    lng: number;
  };
  services: Service[];
  pricing: PricingItem[];
  gallery: GalleryImage[];
}
