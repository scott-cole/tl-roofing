import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100 group">
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
      </Link>
    </div>
  );
}