"use client";

import { useState } from "react";
import Image from "next/image";
import { photos, categories, type GalleryCategory } from "@/lib/gallery-data";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <section id="our-work" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber">
            Real projects
          </p>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            See Our Work
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={
                activeCategory === cat.value
                  ? "rounded-full bg-navy px-4 py-2 text-sm font-medium text-white"
                  : "rounded-full bg-surface px-4 py-2 text-sm font-medium text-navy hover:bg-gray-200"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
