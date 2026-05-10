import { Metadata } from "next";
import { galleryImages } from "@/lib/images";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Our Work | TL Roofing | Project Gallery in Leeds & West Yorkshire",
  description:
    "Browse our portfolio of completed roofing projects in Leeds and West Yorkshire. See the quality and craftsmanship of T & L Roofing's work firsthand.",
  alternates: {
    canonical: "https://tl-roofing.co.uk/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Gallery
        images={galleryImages}
        title="Our Recent Work"
        subtitle="Browse through our portfolio of completed roofing projects across Leeds and West Yorkshire"
      />
    </>
  );
}
