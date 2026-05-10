export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer free quotes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free, no-obligation quotes for all roofing work. Contact us to schedule a site assessment.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We primarily serve Leeds and the surrounding West Yorkshire area, including Headingley, Chapel Allerton, Horsforth, Roundhay, Otley, Pudsey, and Guiseley. Contact us to confirm service in your specific location.",
        },
      },
      {
        "@type": "Question",
        name: "Are you available for emergency repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer 24/7 emergency roofing services. Call us immediately if you have urgent roofing issues.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a roof replacement take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most residential roof replacements are completed within 1-3 days, depending on the size and complexity of the project.",
        },
      },
      {
        "@type": "Question",
        name: "What types of roofs do you work on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work on all types of roofs including pitched roofs, flat roofs, slate, tiles, felt, rubber, and modern roofing systems. Our team is experienced with both traditional and contemporary roofing materials.",
        },
      },
      {
        "@type": "Question",
        name: "Are you fully insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we carry comprehensive insurance including public liability and employers' liability insurance. All our work is fully guaranteed.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
