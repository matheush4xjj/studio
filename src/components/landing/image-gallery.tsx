'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PlaceHolderImages, ImagePlaceholder } from '@/lib/placeholder-images';
import { AnimatedWrapper } from './animated-wrapper';
import { cn } from '@/lib/utils';

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(
    null
  );

  const images = [
    'debt-analysis',
    'public-presentation',
    'form-solution',
    'form-comparison',
    'form-investment',
    'hero-background',
  ].map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean) as ImagePlaceholder[];

  const openModal = (image: ImagePlaceholder) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background/50">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <AnimatedWrapper key={image.id} delay={index * 100}>
              <div
                className="relative aspect-video w-full rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center p-4">
                    {image.description}
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl h-auto p-4"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.description}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
              data-ai-hint={selectedImage.imageHint}
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
            aria-label="Close image viewer"
          >
            <X className="size-8" />
          </button>
        </div>
      )}
    </section>
  );
}
