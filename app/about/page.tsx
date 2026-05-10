import { Metadata } from "next";
import { Users, Target, Award, Shield, Clock, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About T & L Roofing | Professional Roofers in Leeds",
  description: "Learn about T & L Roofing, your trusted roofing experts in Leeds and West Yorkshire. Quality workmanship, reliable service, and customer satisfaction guaranteed.",
  keywords: "T & L Roofing, about us, roofing company Leeds, professional roofers",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality First",
      description:
        "We never compromise on quality. From materials to workmanship, excellence is our standard.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We listen, communicate, and deliver on our promises.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliability",
      description:
        "We show up on time and complete projects as scheduled. Dependable service you can trust.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Our skilled roofers have years of experience and continuous training in the latest techniques.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Emergency Support" },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About T & L Roofing</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-100">
            Your trusted roofing experts in Leeds and West Yorkshire
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                T & L Roofing has been serving the Leeds and West Yorkshire
                community for over 15 years. What started as a small family
                business has grown into one of the region's most trusted roofing
                companies, built on a foundation of quality workmanship and
                exceptional customer service.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                We understand that your roof is one of the most important
                investments in your home. That's why we approach every project
                with the same care and attention to detail that we would want
                for our own properties. From minor repairs to complete
                replacements, we treat each job with the utmost professionalism
                and dedication.
              </p>
              <p className="text-gray-600 text-lg">
                Our team of experienced roofers combines traditional
                craftsmanship with modern techniques and materials to deliver
                results that stand the test of time. We stay up-to-date with
                industry best practices and continuously invest in training to
                ensure we're always providing the best possible service to our
                customers.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fully Insured and Certified
                  </h3>
                  <p className="text-gray-600">
                    We carry comprehensive insurance and all necessary
                    certifications, giving you complete peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    No hidden costs or surprises. We provide detailed, written
                    quotes before any work begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Workmanship Guarantee
                  </h3>
                  <p className="text-gray-600">
                    We stand behind our work with comprehensive guarantees on
                    all projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Knowledge
                  </h3>
                  <p className="text-gray-600">
                    Deep understanding of local building regulations, weather
                    conditions, and architectural styles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Contact T & L Roofing today to discuss your project. We're here to
            help with all your roofing needs in Leeds and West Yorkshire.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}