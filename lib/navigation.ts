export interface NavigationItem {
  title: string
  href: string
  description?: string
  image?: string
  items?: NavigationSubItem[]
}

export interface NavigationSubItem {
  title: string
  href: string
  description?: string
  image?: string
}

export const navigationData = {
  about: [
    {
      title: "Summit Vision",
      href: "/about/summit-vision",
      description: "Our vision and commitment to participant-centered support.",
    },
    {
      title: "About SummitSDA",
      href: "/about/about-summit",
      description: "Learn about SummitSDA's mission, values, and team.",
    },
    {
      title: "Feedback/Complaints",
      href: "/about/feedback",
      description: "Help us improve our services.",
    },
  ],
  learn: [
    {
      title: "NDIS Funding",
      href: "/learn/funding",
      description: "Guidance on NDIS funding and planning.",
    },
    {
      title: "About SIL",
      href: "/learn/about-sil",
      description: "Understanding Supported Independent Living (SIL).",
    },
    {
      title: "About STA",
      href: "/learn/about-sta",
      description: "Short Term Accommodation (STA) explained.",
    },
    {
      title: "About MTA",
      href: "/learn/about-mta",
      description: "Medium Term Accommodation (MTA) explained.",
    },
    {
      title: "About SDA",
      href: "/learn/about-sda",
      description: "Specialist Disability Accommodation (SDA) explained.",
    },
  ],
  supportedAccommodations: [
    {
      title: "Supported Independent Living (SIL)",
      href: "/supported-accommodations/sil",
      description: "Participant-centered supported living options.",
    },
    {
      title: "Short Term Accommodation (STA)",
      href: "/supported-accommodations/sta",
      description: "Respite and short-term stays.",
    },
    {
      title: "Medium Term Accommodation (MTA)",
      href: "/supported-accommodations/mta",
      description: "Flexible medium-term housing solutions.",
    },
    {
      title: "Specialist Disability Accommodation (SDA)",
      href: "/supported-accommodations/sda",
      description: "High-quality, individualized SDA options.",
    },
  ],
  dropInSupport: [
    {
      title: "Assistance with Daily Life",
      href: "/drop-in-support/assistant-with-daily-life",
      description: "Support for daily living activities.",
    },
    {
      title: "Assistance with Self Care",
      href: "/drop-in-support/assistant-with-self-care",
      description: "Personal care and wellbeing support.",
    },
  ],
  communityParticipation: [
    {
      title: "Community Participation",
      href: "/community-participation",
      description: "Engage and connect with your community.",
    },
  ],
  contact: {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with SummitSDA.",
  },
} as const;

