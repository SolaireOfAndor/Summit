import type { MetadataRoute } from "next"

const manifest = (): MetadataRoute.Manifest => ({
  name: "Summit — Supported Independent Living",
  short_name: "Summit SIL",
  description:
    "Summit is a registered NDIS SIL provider delivering 24/7 Supported Independent Living across Sydney & NSW.",
  start_url: "/",
  display: "standalone",
  background_color: "#fffaf5",
  theme_color: "#ff7e32",
  orientation: "portrait-primary",
  categories: ["health", "lifestyle"],
  lang: "en-AU",
  icons: [
    {
      src: "/icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icon.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
})

export default manifest
