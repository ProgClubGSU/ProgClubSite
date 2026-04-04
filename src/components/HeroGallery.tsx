import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const galleryImages = [
  { src: "/hero/1.png", alt: "progsu 1" },
  { src: "/hero/2.png", alt: "progsu 2" },
  { src: "/hero/3.png", alt: "progsu 3" },
  { src: "/hero/4.png", alt: "progsu 4" },
  { src: "/hero/5.png", alt: "progsu 5" },
  { src: "/hero/6.png", alt: "progsu 6" },
  { src: "/hero/7.png", alt: "progsu 7" },
  { src: "/hero/8.png", alt: "progsu 8" },
  { src: "/hero/9.png", alt: "progsu 9" },
  { src: "/hero/10.png", alt: "progsu 10" },
  { src: "/hero/11.png", alt: "progsu 11" },
  { src: "/hero/12.png", alt: "progsu 12" },
];

export default function HeroGallery() {
  return (
    <InfiniteGallery
      images={galleryImages}
      speed={1.2}
      visibleCount={10}
      className="h-screen w-full"
    />
  );
}
