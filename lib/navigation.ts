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

export interface ServiceCategory {
  description: string
  url: string
  image?: string
  items: ReadonlyArray<NavigationSubItem>
}

export const navigationData = {
  services: {
    "Eden Independence": {
      description: "Supported independent living services",
      url: "/services/eden-independence",
      image: "/9.webp",
      items: [
        {
          title: "SIL Vacancies",
          href: "/services/sil-vacancies",
          description: "Current Supported Independent Living openings",
          image: "/21.webp",
        },
        {
          title: "Eden SIL Models",
          href: "/services/sil-models",
          description: "Our approach to supported living",
          image: "/78.webp",
        },
        {
          title: "Shared Supported Accommodations",
          href: "/services/shared-accommodations",
          description: "Communal living solutions",
          image: "/7.webp",
        },
      ],
    },
    "Eden Housing": {
      description: "Specialist housing solutions for NDIS participants",
      url: "/services/eden-housing",
      image: "/house-image/9.webp",
      items: [
        {
          title: "SDA Vacancies",
          href: "/services/sda-vacancies",
          description: "Find available Specialist Disability Accommodation",
          image: "/house-image/2.webp",
        },
        {
          title: "Short Term Accommodation (STA)",
          href: "/services/sta",
          description: "Temporary accommodation solutions",
          image: "/56.webp",
        },
        {
          title: "Medium Term Accommodation (MTA)",
          href: "/services/mta",
          description: "Extended stay accommodation options",
          image: "/57.webp",
        },
      ],
    },
    "Eden Lifestyle": {
      description: "Community engagement and social connection programs",
      url: "/services/eden-lifestyle",
      image: "/24.webp",
      items: [
        {
          title: "Community Packs",
          href: "/services/community-packs",
          description: "Resources for community integration",
          image: "/1.webp",
        },

        /*
        these are not in use and might be implemented in the future
        {
          title: "Social Activities",
          href: "/services/social-activities",
          description: "Group events and community outings",
          image: "/10.webp",
        },
        {
          title: "Wellbeing Programs",
          href: "/services/wellbeing-programs",
          description: "Physical and mental health support",
          image: "/11.webp",
        },
        {
          title: "Skill Development",
          href: "/services/skill-development",
          description: "Workshops and training opportunities",
          image: "/12.webp",
        },*/
      ],
    },
  },
  resources: [
    {
      title: "About SIL",
      href: "/resources/about-sil",
      description: "Understanding Supported Independent Living services",
      image: "/5.webp",
    },
    {
      title: "About SDA",
      href: "/resources/about-sda",
      description: "Learn about Specialist Disability Accommodation",
      image: "/house-image/10.webp",
    },
    {
      title: "SDA Pathways",
      href: "/resources/sda-pathways",
      description: "Your journey to accessing SDA housing",
      image: "/3.webp",
    },
    {
      title: "SDA Ownership",
      href: "/resources/sda-ownership",
      description: "Information for property investors and owners",
      image: "/4.webp",
    },
    /*
    sda toolkit is not in use and will be implemented in the future
    {
      title: "SDA Toolkit",
      href: "/resources/sda-toolkit",
      description: "Essential resources for participants and providers",
      image: "/13.webp",
    },*/
    {
      title: "SDA Eligibility Test",
      href: "/resources/sda-eligibility",
      description: "Check if you qualify for SDA funding",
      image: "/6.webp",
    },
  ],
  about: [
    {
      title: "About Eden",
      href: "/about",
      description: "Learn about our mission and values",
      image: "/8.webp",
    },
    {
      title: "Eden Signature Housing",
      href: "/about/signature-housing",
      description: "Our premium housing solutions",
      image: "/png/3.jpg",
    },
    {
      title: "Feedback/Complaints",
      href: "/about/feedback",
      description: "Help us improve our services",
      image: "/png/4.jpg",
    },
  ],
} as const

