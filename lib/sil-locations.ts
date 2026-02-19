export type SILLocation = {
  slug: string
  name: string
  region: string
  heroTitle: string
  heroDescription: string
  metaTitle: string
  metaDescription: string
  nearbySuburbs: string[]
  landmarks: string
  transportInfo: string
  localContent: string
  whyChoosePoints: string[]
  faqs: { question: string; answer: string }[]
}

export const silLocations: SILLocation[] = [
  {
    slug: "eastern-suburbs",
    name: "Eastern Suburbs",
    region: "Sydney",
    heroTitle: "SIL Provider Eastern Suburbs Sydney",
    heroDescription:
      "Summit delivers personalised Supported Independent Living (SIL) with 24/7 rostered care across Sydney's Eastern Suburbs — from Bondi and Coogee to Randwick and Maroubra.",
    metaTitle: "SIL Provider Eastern Suburbs Sydney | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Sydney's Eastern Suburbs including Bondi, Coogee, Randwick & Maroubra. NDIS registered. Specialising in ABI, spinal cord injury & high-intensity care.",
    nearbySuburbs: ["Bondi", "Coogee", "Randwick", "Maroubra", "Bronte", "Clovelly", "Kensington", "Kingsford"],
    landmarks:
      "Located near Bondi Beach, Coogee Beach, Randwick Racecourse, and the Prince of Wales Hospital — one of Sydney's leading rehabilitation centres.",
    transportInfo:
      "Well-connected via bus routes along Anzac Parade, the light rail to Randwick, and close proximity to Bondi Junction transport hub.",
    localContent:
      "The Eastern Suburbs offer a vibrant, coastal lifestyle with excellent healthcare facilities including the Prince of Wales Hospital and the Royal Hospital for Women. Our SIL participants benefit from easy access to community services, beautiful walking paths along the coastline, and a strong local community that embraces inclusivity.",
    whyChoosePoints: [
      "Proximity to Prince of Wales Hospital and specialist rehabilitation services",
      "Accessible coastal lifestyle with adapted beach access at Bondi and Coogee",
      "Well-serviced public transport including light rail and bus networks",
      "Strong local community with inclusive recreational programmes",
      "Experienced local support workers who understand the Eastern Suburbs community",
    ],
    faqs: [
      {
        question: "Does Summit have SIL vacancies in the Eastern Suburbs?",
        answer:
          "Summit regularly has SIL availability across Sydney's Eastern Suburbs including Bondi, Coogee, Randwick, and Maroubra. We take a participant-first approach — contact us and we will find the right home and support arrangement for your needs.",
      },
      {
        question: "What types of SIL support does Summit provide in the Eastern Suburbs?",
        answer:
          "We provide comprehensive 24/7 rostered SIL care tailored to each participant's Roster of Care (ROC). This includes personal care, household support, community access, skill development, and specialist support for acquired brain injury, spinal cord injury, physical disability, and psychosocial conditions.",
      },
      {
        question: "Is Summit an NDIS registered SIL provider in the Eastern Suburbs?",
        answer:
          "Yes, Summit is a fully registered NDIS provider delivering Supported Independent Living (SIL) services across the Eastern Suburbs and greater Sydney. Our registration covers all SIL support categories.",
      },
      {
        question: "Can Summit provide SIL in my current home in the Eastern Suburbs?",
        answer:
          "Absolutely. Summit provides SIL in any suitable property — whether it's your current home, a rental, or a property we help you find. We are not limited to specific buildings. Our participant-first approach means we adapt to your living situation.",
      },
    ],
  },
  {
    slug: "sydney-cbd",
    name: "Sydney CBD",
    region: "Sydney",
    heroTitle: "SIL Provider Sydney CBD",
    heroDescription:
      "Summit provides personalised Supported Independent Living (SIL) with 24/7 rostered care in Sydney's CBD and surrounding inner-city suburbs.",
    metaTitle: "SIL Provider Sydney CBD | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Sydney CBD and inner city. NDIS registered provider specialising in ABI, spinal cord injury & high-intensity care. Contact us for SIL vacancies.",
    nearbySuburbs: ["Surry Hills", "Darlinghurst", "Pyrmont", "Ultimo", "Haymarket", "Chippendale", "Redfern", "Potts Point"],
    landmarks:
      "Central to Sydney's healthcare and rehabilitation networks including Royal Prince Alfred Hospital, St Vincent's Hospital, and multiple specialist clinics.",
    transportInfo:
      "Unparalleled public transport access via Central, Town Hall, and Wynyard stations, multiple bus routes, light rail, and ferry services from Circular Quay.",
    localContent:
      "The Sydney CBD and inner city provide unmatched access to healthcare services, community facilities, and employment opportunities. Our SIL participants benefit from world-class hospitals, diverse cultural experiences, and a vibrant community. The CBD's extensive accessibility infrastructure ensures participants can engage fully with city life.",
    whyChoosePoints: [
      "Central access to Sydney's major hospitals and specialist medical services",
      "Excellent public transport connectivity — trains, buses, light rail, and ferries",
      "Diverse community activities, arts, and cultural experiences",
      "Close proximity to employment and education opportunities",
      "Well-developed accessibility infrastructure throughout the CBD",
    ],
    faqs: [
      {
        question: "Does Summit offer SIL services in Sydney CBD?",
        answer:
          "Yes, Summit provides 24/7 Supported Independent Living (SIL) in Sydney CBD and surrounding inner-city suburbs including Surry Hills, Darlinghurst, Pyrmont, and Redfern. Contact us to discuss your individual needs.",
      },
      {
        question: "What specialist SIL care does Summit provide in the CBD?",
        answer:
          "Summit specialises in SIL for participants with acquired brain injury (ABI), spinal cord injury, physical disabilities requiring high-intensity support, intellectual disability, and psychosocial conditions. All care is rostered 24/7 and tailored to your individual Roster of Care.",
      },
      {
        question: "How does Summit's participant-first SIL model work in the CBD?",
        answer:
          "Unlike providers who assign you to an existing vacancy, Summit works with you first to understand your goals, preferences, and support needs. We then find the right accommodation and build a support team that matches your requirements — whether that's a shared living arrangement or individual support in your own home.",
      },
    ],
  },
  {
    slug: "manly-northern-beaches",
    name: "Manly & Northern Beaches",
    region: "Sydney",
    heroTitle: "SIL Provider Manly & Northern Beaches",
    heroDescription:
      "Summit delivers personalised Supported Independent Living (SIL) with 24/7 rostered care across Manly and Sydney's Northern Beaches — from Dee Why to Palm Beach.",
    metaTitle: "SIL Provider Manly & Northern Beaches | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Manly & Northern Beaches Sydney. NDIS registered. Specialist ABI, spinal cord injury & high-intensity SIL care. Participant-first approach.",
    nearbySuburbs: ["Manly", "Dee Why", "Brookvale", "Freshwater", "Curl Curl", "Mona Vale", "Narrabeen", "Warriewood"],
    landmarks:
      "Situated along Sydney's stunning Northern Beaches coastline, near Northern Beaches Hospital and Manly community health services.",
    transportInfo:
      "Connected via the B-Line express bus to the CBD, local bus services, and the iconic Manly Ferry. Northern Beaches Hospital provides nearby specialist care.",
    localContent:
      "The Northern Beaches offer an exceptional quality of life with a relaxed coastal atmosphere, strong community spirit, and excellent local health services. Northern Beaches Hospital provides modern healthcare facilities close to home. Our SIL participants enjoy accessible beach environments, community sports programs, and a supportive neighbourhood culture.",
    whyChoosePoints: [
      "Relaxed coastal lifestyle with accessible beach paths and adapted swimming",
      "Northern Beaches Hospital nearby for specialist healthcare needs",
      "Strong community inclusion programs and local disability services",
      "B-Line express bus connection to Sydney CBD",
      "Quiet, safe residential areas ideal for supported living environments",
    ],
    faqs: [
      {
        question: "Does Summit provide SIL on the Northern Beaches?",
        answer:
          "Yes, Summit provides 24/7 Supported Independent Living across Manly and the Northern Beaches including Dee Why, Brookvale, Freshwater, Mona Vale, and surrounding suburbs. We find the right home in your preferred area.",
      },
      {
        question: "Can I access SIL near Northern Beaches Hospital?",
        answer:
          "Absolutely. We can arrange SIL accommodation close to Northern Beaches Hospital for participants who require regular medical or rehabilitation services. Our team coordinates with local healthcare providers to ensure seamless care.",
      },
      {
        question: "What does 24/7 rostered SIL care mean?",
        answer:
          "24/7 rostered care means you have dedicated support workers available around the clock, with your support schedule personalised to your individual Roster of Care (ROC). This includes assistance with daily living, personal care, community access, and emergency support — all tailored to your specific needs and goals.",
      },
    ],
  },
  {
    slug: "parramatta",
    name: "Parramatta & Western Sydney",
    region: "Sydney",
    heroTitle: "SIL Provider Parramatta & Western Sydney",
    heroDescription:
      "Summit provides personalised Supported Independent Living (SIL) with 24/7 rostered care across Parramatta and Greater Western Sydney.",
    metaTitle: "SIL Provider Parramatta & Western Sydney | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Parramatta & Western Sydney. NDIS registered provider. Specialist ABI, spinal cord injury & high-intensity care. SIL vacancies available.",
    nearbySuburbs: ["Parramatta", "Harris Park", "Granville", "Merrylands", "Westmead", "Toongabbie", "Blacktown", "Penrith"],
    landmarks:
      "Located near Westmead Hospital — one of Australia's largest hospital campuses — and Parramatta's growing healthcare precinct.",
    transportInfo:
      "Excellent transport links via Parramatta Station (T-Line), the new Parramatta Light Rail, M4 motorway, and extensive bus networks connecting to all of Western Sydney.",
    localContent:
      "Parramatta is Sydney's second CBD and a rapidly growing hub for healthcare, employment, and community services. Westmead Hospital and the Children's Hospital at Westmead provide world-class medical care. The area's multicultural community, affordable living options, and expanding infrastructure make it ideal for Supported Independent Living.",
    whyChoosePoints: [
      "Proximity to Westmead Hospital campus — one of Australia's largest healthcare precincts",
      "Affordable housing options compared to inner-city suburbs",
      "Multicultural community with culturally responsive support available",
      "Excellent public transport including new light rail and major train lines",
      "Growing employment and community participation opportunities",
    ],
    faqs: [
      {
        question: "Does Summit have SIL vacancies in Parramatta and Western Sydney?",
        answer:
          "Summit works with participants across Parramatta and Greater Western Sydney including Granville, Merrylands, Westmead, Blacktown, and Penrith. Rather than offering fixed vacancies, we take a participant-first approach — we find the right home based on your individual needs and preferences.",
      },
      {
        question: "Can Summit provide high-intensity SIL near Westmead Hospital?",
        answer:
          "Yes. Summit specialises in high-intensity SIL support for participants with complex care needs. We can arrange accommodation near Westmead Hospital for participants requiring regular specialist medical care or rehabilitation services.",
      },
      {
        question: "Does Summit offer culturally sensitive SIL in Western Sydney?",
        answer:
          "Absolutely. Western Sydney is one of Australia's most diverse communities, and Summit is committed to culturally responsive support. We match participants with support workers who understand their cultural background and language preferences wherever possible.",
      },
    ],
  },
  {
    slug: "mascot-inner-south",
    name: "Mascot & Inner South",
    region: "Sydney",
    heroTitle: "SIL Provider Mascot & Inner South Sydney",
    heroDescription:
      "Summit delivers personalised Supported Independent Living (SIL) with 24/7 rostered care across Mascot, Rosebery, Botany, and Sydney's Inner South.",
    metaTitle: "SIL Provider Mascot & Inner South Sydney | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Mascot, Rosebery & Inner South Sydney. NDIS registered provider specialising in ABI, physical disability & high-intensity care.",
    nearbySuburbs: ["Mascot", "Rosebery", "Botany", "Alexandria", "Zetland", "Waterloo", "Green Square", "Eastlakes"],
    landmarks:
      "Near Sydney Airport, Green Square town centre, and with easy access to Prince of Wales Hospital and St Vincent's Hospital.",
    transportInfo:
      "Excellent transport via Mascot and Green Square train stations (T8 Airport Line), multiple bus routes, and easy access to the Eastern Distributor and M5.",
    localContent:
      "Mascot and the Inner South offer modern, accessible living in one of Sydney's fastest-growing residential areas. The Green Square precinct features purpose-built accessible facilities, aquatic centres, and community spaces. Proximity to the airport makes it convenient for participants with interstate family or medical appointments.",
    whyChoosePoints: [
      "Modern, purpose-built accessible apartments in the Green Square precinct",
      "Excellent train connectivity to CBD and wider Sydney",
      "Growing healthcare and community facilities in the area",
      "Convenient airport access for interstate family visits",
      "Vibrant, diverse community with inclusive local programs",
    ],
    faqs: [
      {
        question: "Does Summit provide SIL in Mascot and the Inner South?",
        answer:
          "Yes, Summit provides 24/7 Supported Independent Living across Mascot, Rosebery, Botany, Alexandria, Zetland, and surrounding Inner South suburbs. We help participants find suitable accommodation in their preferred area.",
      },
      {
        question: "Are there accessible SIL properties near Green Square?",
        answer:
          "The Green Square and Zetland area features many modern, accessible apartments that are well-suited for SIL. Summit can help identify properties with the accessibility features you need and arrange your personalised 24/7 support.",
      },
    ],
  },
  {
    slug: "wollongong",
    name: "Wollongong & Illawarra",
    region: "Regional NSW",
    heroTitle: "SIL Provider Wollongong & Illawarra",
    heroDescription:
      "Summit provides personalised Supported Independent Living (SIL) with 24/7 rostered care across Wollongong and the Illawarra region.",
    metaTitle: "SIL Provider Wollongong & Illawarra | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Wollongong & Illawarra NSW. NDIS registered provider specialising in ABI, spinal cord injury & high-intensity SIL care. Contact us for availability.",
    nearbySuburbs: ["Wollongong", "Corrimal", "Figtree", "Dapto", "Shellharbour", "Thirroul", "Bulli", "Fairy Meadow"],
    landmarks:
      "Near Wollongong Hospital, the University of Wollongong, and the scenic Illawarra coastline.",
    transportInfo:
      "Connected via the South Coast Line train to Sydney, local bus services, and the Princes Highway.",
    localContent:
      "Wollongong and the Illawarra offer a relaxed coastal lifestyle with excellent local healthcare through Wollongong Hospital and community health services. The region's affordable housing, strong community networks, and beautiful natural environment make it an ideal location for Supported Independent Living.",
    whyChoosePoints: [
      "Affordable housing options compared to Sydney metro",
      "Wollongong Hospital provides comprehensive healthcare services",
      "Beautiful coastal environment supporting health and wellbeing",
      "Strong local disability support networks and community programs",
      "Direct train connection to Sydney for specialist appointments",
    ],
    faqs: [
      {
        question: "Does Summit offer SIL services in Wollongong?",
        answer:
          "Yes, Summit provides Supported Independent Living across Wollongong and the wider Illawarra region. We work with participants to find suitable accommodation and deliver 24/7 personalised support based on your individual Roster of Care.",
      },
      {
        question: "Can I access specialist SIL support in the Illawarra?",
        answer:
          "Summit provides specialist SIL support for acquired brain injury, spinal cord injury, physical disability, intellectual disability, and psychosocial conditions throughout the Illawarra. Our experienced team coordinates with local healthcare providers for seamless care.",
      },
    ],
  },
  {
    slug: "newcastle",
    name: "Newcastle & Hunter",
    region: "Regional NSW",
    heroTitle: "SIL Provider Newcastle & Hunter Region",
    heroDescription:
      "Summit delivers personalised Supported Independent Living (SIL) with 24/7 rostered care across Newcastle and the Hunter Valley.",
    metaTitle: "SIL Provider Newcastle & Hunter NSW | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) in Newcastle & Hunter NSW. NDIS registered provider. Specialist ABI, spinal cord injury & high-intensity care. Contact us for SIL availability.",
    nearbySuburbs: ["Newcastle", "Charlestown", "Lambton", "Maitland", "Lake Macquarie", "Hamilton", "Merewether", "Cessnock"],
    landmarks:
      "Near John Hunter Hospital — a major tertiary hospital — Newcastle Beach, and the University of Newcastle.",
    transportInfo:
      "Connected via the Hunter Line train to Sydney, Newcastle Light Rail, local buses, and the M1 Pacific Motorway.",
    localContent:
      "Newcastle is NSW's second-largest city, offering excellent healthcare through John Hunter Hospital, a thriving arts and culture scene, and affordable living. The Hunter region's strong community networks and growing disability services sector make it an ideal location for Supported Independent Living.",
    whyChoosePoints: [
      "John Hunter Hospital provides comprehensive tertiary healthcare",
      "Affordable housing with strong rental availability",
      "Growing disability services sector with strong community support",
      "Coastal lifestyle with accessible beach environments",
      "Newcastle Light Rail and train connections to Sydney",
    ],
    faqs: [
      {
        question: "Does Summit provide SIL in Newcastle?",
        answer:
          "Yes, Summit provides 24/7 Supported Independent Living across Newcastle, Lake Macquarie, Maitland, and the wider Hunter region. We take a participant-first approach to find the right home and support team for you.",
      },
      {
        question: "Can Summit arrange SIL near John Hunter Hospital?",
        answer:
          "Absolutely. For participants requiring regular specialist healthcare, we can arrange SIL accommodation near John Hunter Hospital and coordinate with your medical team for seamless care integration.",
      },
    ],
  },
  {
    slug: "central-coast",
    name: "Central Coast",
    region: "Regional NSW",
    heroTitle: "SIL Provider Central Coast NSW",
    heroDescription:
      "Summit provides personalised Supported Independent Living (SIL) with 24/7 rostered care across the Central Coast from Gosford to Wyong.",
    metaTitle: "SIL Provider Central Coast NSW | Supported Independent Living — Summit",
    metaDescription:
      "Summit provides 24/7 Supported Independent Living (SIL) on the Central Coast NSW including Gosford & Wyong. NDIS registered. Specialist ABI & high-intensity care. Participant-first approach.",
    nearbySuburbs: ["Gosford", "Wyong", "Terrigal", "Erina", "Woy Woy", "Tuggerah", "The Entrance", "Kariong"],
    landmarks:
      "Near Gosford Hospital, Central Coast Medical School, and the beautiful beaches and lakes of the region.",
    transportInfo:
      "Connected via the Central Coast & Newcastle Line train to Sydney, local bus services, and the M1 Pacific Motorway.",
    localContent:
      "The Central Coast offers an exceptional quality of life with a relaxed coastal and lakeside lifestyle, affordable living, and growing healthcare services. Gosford Hospital and local community health centres provide accessible medical care. The region's natural environment and strong community spirit support positive outcomes for SIL participants.",
    whyChoosePoints: [
      "Affordable housing in a relaxed coastal and lakeside setting",
      "Gosford Hospital and expanding local healthcare services",
      "Strong local community with inclusive disability programs",
      "Direct train connection to Sydney for specialist appointments",
      "Beautiful natural environment supporting health and wellbeing",
    ],
    faqs: [
      {
        question: "Does Summit offer SIL on the Central Coast?",
        answer:
          "Yes, Summit provides 24/7 Supported Independent Living across the Central Coast including Gosford, Wyong, Erina, Terrigal, and surrounding areas. Contact us to discuss your needs and preferences.",
      },
      {
        question: "How does Summit's participant-first SIL work on the Central Coast?",
        answer:
          "Summit doesn't limit you to pre-selected properties. We work with you first to understand your goals, support needs, and lifestyle preferences, then find the right accommodation on the Central Coast and build a personalised support team around you.",
      },
    ],
  },
]

export const getLocationBySlug = (slug: string): SILLocation | undefined => {
  return silLocations.find((location) => location.slug === slug)
}

export const getAllLocationSlugs = (): string[] => {
  return silLocations.map((location) => location.slug)
}
