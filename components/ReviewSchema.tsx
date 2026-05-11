export default function ReviewSchema() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roofing Services",
    description: "Professional roofing services in Leeds and West Yorkshire",
    provider: {
      "@type": "LocalBusiness",
      name: "T & L Roofing",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "michelle31989",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Brilliant work, great communication and workmanship. Guys were helpful and worked around other trades really well.",
        datePublished: "2024-11-01",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "deadlyden",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "We would highly recommend TL Roofing Services. Completed the job fully in inclement weather conditions to our full satisfaction.",
        datePublished: "2024-10-15",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "tania31720",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Very pleased with the service and care that we received. Fair quotes with clear understanding of every step. Professional approach and high standards of workmanship.",
        datePublished: "2024-09-20",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "biggles_18",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody:
          "Tom was quick to respond and arrived to quote when he said he would. The new fibreglass roofs look much better than the old ones. Very happy with the result.",
        datePublished: "2024-08-05",
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
