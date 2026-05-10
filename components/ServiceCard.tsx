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
    <div className="bg-[#2a2a2a] rounded-2xl shadow-lg p-10 card-hover border border-[#333333] group">
      <div className="w-16 h-16 bg-[#1E97D4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E97D4]/20 transition-all duration-300 group-hover:scale-110">
        <div className="text-[#1E97D4]">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#1E97D4] transition-colors">{title}</h3>
      <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-[#1E97D4] font-semibold hover:text-white transition-colors group/link"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
      </Link>
    </div>
  );
}