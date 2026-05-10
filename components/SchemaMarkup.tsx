export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "T & L Roofing",
    description: "Professional roofing services in Leeds and West Yorkshire. Expert roof repairs, replacements, installations, and emergency services.",
    url: "https://tlroofing.co.uk",
    telephone: "0113 000 0000",
    email: "tl.roofing@outlook.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leeds",
      addressRegion: "West Yorkshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.8008",
      longitude: "-1.5491",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "53.8008",
        longitude: "-1.5491",
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "££",
    image: "https://tlroofing.co.uk/logo.svg",
    sameAs: [
      "https://www.facebook.com/tlroofing",
      "https://www.twitter.com/tlroofing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}