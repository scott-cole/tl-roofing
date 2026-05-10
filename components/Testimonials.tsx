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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners in Leeds and West Yorkshire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 text-center border-2 border-yellow-400 hover:shadow-lg transition-shadow">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">5-Star Rated</h3>
            <p className="text-gray-600 mb-4">
              Highly rated roofing company in Leeds on Google Reviews
            </p>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-500">Based on customer reviews</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center border-2 border-green-500 hover:shadow-lg transition-shadow">
            <div className="text-6xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellent</h3>
            <p className="text-gray-600 mb-4">
              Top-rated on Trustpilot for roofing services in West Yorkshire
            </p>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-green-500 text-green-500" />
              ))}
            </div>
            <p className="text-sm text-gray-500">Trustpilot Excellent Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}