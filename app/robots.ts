import type { MetadataRoute } from "next"

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/private/"],
    },
    {
      userAgent: "Googlebot",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    {
      userAgent: "Bingbot",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
  ],
  sitemap: "https://summitsda.com.au/sitemap.xml",
  host: "https://summitsda.com.au",
})

export default robots
