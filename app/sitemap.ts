import type { MetadataRoute } from "next"
import { properties } from "@/lib/properties"

const BASE_URL = "https://summitsda.com.au"

const createEntry = (
  path: string,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly",
  priority: number = 0.7
): MetadataRoute.Sitemap[number] => ({
  url: `${BASE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
})

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Property pages (dynamic)
  const propertyUrls: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `${BASE_URL}/properties/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Static pages
  const staticUrls: MetadataRoute.Sitemap = [
    createEntry("/", "weekly", 1),
    createEntry("/about", "monthly", 0.9),
    createEntry("/about/summit-vision", "monthly", 0.8),
    createEntry("/about/about-summit", "monthly", 0.8),
    createEntry("/about/feedback", "monthly", 0.8),
    createEntry("/contact", "monthly", 0.9),
    createEntry("/properties", "daily", 0.9),
    createEntry("/properties/sda-vacancies", "daily", 0.9),
    createEntry("/properties/sil-vacancies", "daily", 0.9),
    createEntry("/learn", "monthly", 0.9),
    createEntry("/learn/about-sda", "monthly", 0.8),
    createEntry("/learn/about-sda/application-process", "monthly", 0.7),
    createEntry("/learn/about-sda/design-categories-explained", "monthly", 0.7),
    createEntry("/learn/about-sda/eligibility-requirements", "monthly", 0.7),
    createEntry("/learn/about-sda/funding-and-costs", "monthly", 0.7),
    createEntry("/learn/about-sda/housing-selection-guide", "monthly", 0.7),
    createEntry("/learn/about-sda/rights-and-support", "monthly", 0.7),
    createEntry("/learn/about-sil", "monthly", 0.8),
    createEntry("/learn/about-sta", "monthly", 0.8),
    createEntry("/learn/about-sta/accommodation-options", "monthly", 0.7),
    createEntry("/learn/about-sta/booking-and-planning", "monthly", 0.7),
    createEntry("/learn/about-sta/emergency-accommodation", "monthly", 0.7),
    createEntry("/learn/about-sta/funding-and-costs", "monthly", 0.7),
    createEntry("/learn/about-sta/respite-care", "monthly", 0.7),
    createEntry("/learn/about-sta/rights-and-advocacy", "monthly", 0.7),
    createEntry("/learn/about-sta/types-and-when-to-use", "monthly", 0.7),
    createEntry("/learn/about-mta", "monthly", 0.8),
    createEntry("/learn/funding", "monthly", 0.8),
    createEntry("/learn/funding/budget-categories", "monthly", 0.7),
    createEntry("/learn/funding/budget-maximization", "monthly", 0.7),
    createEntry("/learn/funding/capacity-building", "monthly", 0.7),
    createEntry("/learn/funding/capital-support", "monthly", 0.7),
    createEntry("/learn/funding/core-support-guide", "monthly", 0.7),
    createEntry("/learn/funding/plan-management", "monthly", 0.7),
    createEntry("/supported-accommodations", "monthly", 0.9),
    createEntry("/supported-accommodations/sda", "monthly", 0.8),
    createEntry("/supported-accommodations/sil", "monthly", 0.8),
    createEntry("/supported-accommodations/sta", "monthly", 0.8),
    createEntry("/supported-accommodations/mta", "monthly", 0.8),
    createEntry("/drop-in-support", "monthly", 0.8),
    createEntry("/drop-in-support/assistant-with-daily-life", "monthly", 0.7),
    createEntry("/drop-in-support/assistant-with-self-care", "monthly", 0.7),
    createEntry("/community-participation", "monthly", 0.8),
  ]

  return [...staticUrls, ...propertyUrls]
}
