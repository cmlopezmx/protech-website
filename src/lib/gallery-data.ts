export type GalleryCategory =
  | "all"
  | "electrical"
  | "generators"
  | "painting"
  | "concrete"
  | "garage";

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
}

export const categories: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "electrical", label: "Electrical" },
  { value: "generators", label: "Generators" },
  { value: "painting", label: "Painting" },
  { value: "concrete", label: "Concrete" },
  { value: "garage", label: "Garage" },
];

export const photos: GalleryPhoto[] = [
  { src: "/images/gallery/electrical-1.jpg", alt: "Electrical work", category: "electrical" },
  { src: "/images/gallery/electrical-2.jpg", alt: "Electrical installation", category: "electrical" },
  { src: "/images/gallery/electrical-3.jpg", alt: "Electrical panel", category: "electrical" },
  { src: "/images/gallery/electrical-4.jpg", alt: "Electrical wiring", category: "electrical" },
  { src: "/images/gallery/generators-1.jpg", alt: "Generator installation", category: "generators" },
  { src: "/images/gallery/generators-2.jpg", alt: "Generator setup", category: "generators" },
  { src: "/images/gallery/generators-3.jpg", alt: "Generator unit", category: "generators" },
  { src: "/images/gallery/generators-4.jpg", alt: "Generator wiring", category: "generators" },
  { src: "/images/gallery/generators-5.jpg", alt: "Generator connection", category: "generators" },
  { src: "/images/gallery/generators-6.jpg", alt: "Generator complete", category: "generators" },
  { src: "/images/gallery/painting-1.jpg", alt: "Interior painting", category: "painting" },
  { src: "/images/gallery/painting-2.jpg", alt: "Wall painting", category: "painting" },
  { src: "/images/gallery/painting-3.jpg", alt: "Room painting", category: "painting" },
  { src: "/images/gallery/painting-4.jpg", alt: "Painting project", category: "painting" },
  { src: "/images/gallery/painting-5.jpg", alt: "Exterior painting", category: "painting" },
  { src: "/images/gallery/painting-6.jpg", alt: "Painting finish", category: "painting" },
  { src: "/images/gallery/concrete-1.jpg", alt: "Concrete work", category: "concrete" },
  { src: "/images/gallery/concrete-2.jpg", alt: "Concrete pour", category: "concrete" },
  { src: "/images/gallery/concrete-3.jpg", alt: "Concrete finishing", category: "concrete" },
  { src: "/images/gallery/concrete-4.jpg", alt: "Concrete project", category: "concrete" },
  { src: "/images/gallery/garage-1.jpg", alt: "Garage project", category: "garage" },
];
