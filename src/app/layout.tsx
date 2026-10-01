import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B192C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rupkothatravels.com"),
  title: {
    default: "Rupkotha Travels | Kolkata Tour Operator & Govt Authorized Agent (Odisha & CG)",
    template: "%s | Rupkotha Travels Kolkata",
  },
  description:
    "Official authorized agent for Eco Tour Odisha & Chhattisgarh Tourism. Curated escorted small group tours, Himalayan 4x4 road trips, and heritage holidays from Howrah & Sealdah (Kolkata). Confirmed berths & homely meals included.",
  keywords: [
    "Rupkotha Travels",
    "রূপকথা ট্রাভেলস",
    "Kolkata Tour Operator",
    "Best travel agency in Kolkata",
    "Eco Tour Odisha authorized agent Kolkata",
    "Chhattisgarh Tourism booking counter Kolkata",
    "Fixed Departure Tours 2026 2027 Kolkata",
    "Howrah Sealdah train tour packages",
    "Himalayan 4x4 tour package from Kolkata",
    "Ladakh Siachen Base Camp tour from Kolkata",
    "Spiti Valley road trip package",
    "Tadoba Tiger Safari package",
    "Sundarbans tour package from Kolkata",
    "Darjeeling North Bengal tour package",
    "Rajasthan royal haveli heritage tour",
    "Kerala backwater houseboat package",
    "Escorted Bengali tour director holiday",
    "All-inclusive family tour packages Kolkata",
  ],
  authors: [{ name: "Rupkotha Travels", url: "https://rupkothatravels.com" }],
  creator: "Rupkotha Travels",
  publisher: "Rupkotha Travels Kolkata",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rupkothatravels.com",
    types: {
      "text/plain": "https://rupkothatravels.com/llms.txt",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rupkothatravels.com",
    siteName: "Rupkotha Travels (রূপকথা ট্রাভেলস)",
    title: "Rupkotha Travels | Curated Escorted Holidays & Govt Tourism Agent",
    description:
      "Official authorized booking agent for Eco Tour Odisha & Chhattisgarh Tourism. Small group fixed departures from Howrah & Sealdah with 4-course homely meals and confirmed train berths.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Rupkotha Travels - Escorted Group Holidays from Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupkotha Travels | Premier Kolkata Tour Operator",
    description:
      "All-inclusive escorted small group holidays from Howrah & Sealdah. Official agent for Eco Tour Odisha & Chhattisgarh Tourism.",
    images: ["/images/og-cover.jpg"],
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.5726;88.3639",
    "ICBM": "22.5726, 88.3639",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "TouristInformationCenter", "LocalBusiness"],
      "@id": "https://rupkothatravels.com/#agency",
      "name": "Rupkotha Travels",
      "alternateName": "রূপকথা ট্রাভেলস",
      "url": "https://rupkothatravels.com",
      "logo": "https://rupkothatravels.com/favicon.ico",
      "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      "description":
        "Premier experiential tour operator based in Kolkata, West Bengal. Official authorized booking agent for Eco Tour Odisha and Chhattisgarh Tourism. Specializes in fixed departures, high-altitude Himalayan 4x4 expeditions, and coastal retreats.",
      "telephone": "+919830012345",
      "email": "booking@rupkothatravels.com",
      "priceRange": "₹₹ - ₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kolkata Hub, Near Howrah / Sealdah Rail Corridors",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700001",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.5726,
        "longitude": 88.3639,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "19:30",
        },
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "West Bengal" },
        { "@type": "AdministrativeArea", "name": "Odisha" },
        { "@type": "AdministrativeArea", "name": "Chhattisgarh" },
        { "@type": "AdministrativeArea", "name": "Ladakh" },
        { "@type": "AdministrativeArea", "name": "Himachal Pradesh" },
        { "@type": "AdministrativeArea", "name": "Sikkim" },
        { "@type": "AdministrativeArea", "name": "Rajasthan" },
        { "@type": "AdministrativeArea", "name": "Andaman and Nicobar Islands" },
        { "@type": "AdministrativeArea", "name": "Assam" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Rupkotha Travels Tour Packages",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Fixed Group Departures & Cultural Heritage",
            "description": "Escorted group departures with train travel from Howrah and Sealdah.",
          },
          {
            "@type": "OfferCatalog",
            "name": "High-Altitude Himalayan Expeditions",
            "description": "Mountain road trips and treks across Ladakh, Spiti, and Singalila ridge.",
          },
          {
            "@type": "OfferCatalog",
            "name": "Eco-Forest Safaris & Coastal Holidays",
            "description": "Certified eco-tours in Odisha, Chhattisgarh, Tadoba, and Andaman.",
          },
        ],
      },
      "sameAs": [
        "https://wa.me/919830012345",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rupkothatravels.com/#website",
      "url": "https://rupkothatravels.com",
      "name": "Rupkotha Travels",
      "publisher": { "@id": "https://rupkothatravels.com/#agency" },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://rupkothatravels.com/destinations?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://rupkothatravels.com/#webpage",
      "url": "https://rupkothatravels.com",
      "name": "Rupkotha Travels | Kolkata Tour Operator & Govt Authorized Agent",
      "isPartOf": { "@id": "https://rupkothatravels.com/#website" },
      "about": { "@id": "https://rupkothatravels.com/#agency" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".aeo-answer-block", "h1", ".voice-answer-summary"],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable} scroll-smooth`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Context" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#F8F9FA] text-[#0B192C] font-sans antialiased selection:bg-[#F59E0B] selection:text-[#0B192C]">
        {children}
      </body>
    </html>
  );
}
