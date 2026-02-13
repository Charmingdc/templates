import { useEffect } from "react";
import type { Business } from "../data/business";
import { config } from "../data/config";

const setOrCreateMeta = (
  nameOrProperty: string,
  value: string,
  isProperty = false
) => {
  const selector = isProperty
    ? `meta[property="${nameOrProperty}"]`
    : `meta[name="${nameOrProperty}"]`;
  const meta = document.querySelector(selector) as HTMLMetaElement | null;

  if (meta) meta.setAttribute("content", value);
  else {
    const newMeta = document.createElement("meta");
    if (isProperty) newMeta.setAttribute("property", nameOrProperty);
    else newMeta.name = nameOrProperty;
    newMeta.content = value;
    document.head.appendChild(newMeta);
  }
};

export const useBusinessHead = (business: Business) => {
  useEffect(() => {
    // Title
    document.title = `${business.name} | ${business.tagline}`;

    // Standard meta description
    if (business.metaDescription)
      setOrCreateMeta("description", business.metaDescription);

    // Favicon
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (favicon && business.favicon) favicon.href = business.favicon;

    // Accent & theme
    const root = document.documentElement;
    root.style.setProperty("--accent", config.accent);
    if (config.theme === "light") root.classList.add("light");
    else root.classList.remove("light");

    // Open Graph
    if (business.ogTitle) setOrCreateMeta("og:title", business.ogTitle, true);
    if (business.ogDescription)
      setOrCreateMeta("og:description", business.ogDescription, true);
    if (business.ogImage) setOrCreateMeta("og:image", business.ogImage, true);

    // Twitter
    if (business.twitterCard)
      setOrCreateMeta("twitter:card", business.twitterCard);
    if (business.twitterSite)
      setOrCreateMeta("twitter:site", business.twitterSite);
    if (business.twitterCreator)
      setOrCreateMeta("twitter:creator", business.twitterCreator);
    if (business.ogTitle) setOrCreateMeta("twitter:title", business.ogTitle);
    if (business.ogDescription)
      setOrCreateMeta("twitter:description", business.ogDescription);
    if (business.ogImage) setOrCreateMeta("twitter:image", business.ogImage);
  }, [business]);
};
