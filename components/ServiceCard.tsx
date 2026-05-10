import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-[#333333] rounded-2xl shadow-lg p-8 card-hover border border-[#404040] group flex flex-col h-full">
      <div className="w-16 h-16 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E97D4]/20 transition-all duration-300 group-hover:scale-110">
        <div className="text-[#1E97D4] text-2xl">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#1E97D4] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center text-[#1E97D4] font-semibold hover:text-white transition-colors group/link"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-3 group-hover/link:translate-x-2 transition-transform" />
      </Link>
    </div>
  );
}
