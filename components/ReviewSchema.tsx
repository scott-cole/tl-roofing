export default function ReviewSchema() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Roofing Services",
    description: "Professional roofing services in Leeds and West Yorkshire",
    brand: {
      "@type": "Brand",
      name: "T & L Roofing",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah Thompson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: "Excellent work from T & L Roofing! They replaced our roof quickly and professionally. The team was polite and left everything tidy. Highly recommend!",
        datePublished: "2024-01-15",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "James Wilson",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: "Had an emergency roof leak and T & L Roofing came out the same day. Fixed the problem efficiently at a fair price. Very grateful for their quick response!",
        datePublished: "2023-12-20",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Emma Davis",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: "Professional service from start to finish. The team explained everything clearly and did a fantastic job on our new roof installation. Will definitely use again.",
        datePublished: "2024-01-05",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}
