import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Thompson",
      location: "Leeds",
      rating: 5,
      text: "Excellent work from T & L Roofing! They replaced our roof quickly and professionally. The team was polite and left everything tidy. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "James Wilson",
      location: "West Yorkshire",
      rating: 5,
      text: "Had an emergency roof leak and T & L Roofing came out the same day. Fixed the problem efficiently at a fair price. Very grateful for their quick response!",
      date: "1 month ago",
    },
    {
      name: "Emma Davis",
      location: "Leeds",
      rating: 5,
      text: "Professional service from start to finish. The team explained everything clearly and did a fantastic job on our new roof installation. Will definitely use again.",
      date: "3 weeks ago",
    },
  ];

  return (
    <section className="py-24 bg-[#333333]">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            What Our Customers Say
          </h2>
          <p className="section-subtitle">
            Trusted by homeowners in Leeds and West Yorkshire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#404040] rounded-2xl shadow-lg p-12 relative card-hover border border-[#4a4a4a]"
            >
              <Quote className="absolute top-10 right-10 w-14 h-14 text-[#1E97D4]/20" />
              <div className="flex items-center space-x-1 mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#1E97D4] text-[#1E97D4]" />
                ))}
              </div>
              <p className="text-gray-300 mb-10 italic leading-relaxed text-lg">"{review.text}"</p>
              <div className="flex items-center justify-between pt-8 border-t border-[#4a4a4a]">
                <div>
                  <p className="font-bold text-white text-lg">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-[#404040] rounded-2xl shadow-lg p-16 text-center card-hover border-2 border-[#1E97D4]">
            <div className="text-8xl mb-10">⭐</div>
            <h3 className="text-4xl font-bold text-white mb-6">5-Star Rated</h3>
            <p className="text-gray-400 mb-10 text-xl leading-relaxed">
              Highly rated roofing company in Leeds on Google Reviews
            </p>
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-9 h-9 fill-[#1E97D4] text-[#1E97D4]" />
              ))}
            </div>
            <p className="text-sm text-gray-500">Based on customer reviews</p>
          </div>

          <div className="bg-[#404040] rounded-2xl shadow-lg p-16 text-center card-hover border-2 border-[#1E97D4]">
            <div className="text-8xl mb-10">✓</div>
            <h3 className="text-4xl font-bold text-white mb-6">Excellent</h3>
            <p className="text-gray-400 mb-10 text-xl leading-relaxed">
              Top-rated on Trustpilot for roofing services in West Yorkshire
            </p>
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-9 h-9 fill-[#1E97D4] text-[#1E97D4]" />
              ))}
            </div>
            <p className="text-sm text-gray-500">Trustpilot Excellent Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}