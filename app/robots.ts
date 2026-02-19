import type { MetadataRoute } from "next"

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
  ],
  sitemap: "https://summitsda.com.au/sitemap.xml",
})

export default robots
