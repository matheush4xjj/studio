'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { ImagePlaceholder } from '@/lib/placeholder-images';

type ImageLightboxProps = {
  image: ImagePlaceholder;
  onClose: () => void;
};

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in-0"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-auto p-4"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={image.imageUrl}
          alt={image.description}
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
          data-ai-hint={image.imageHint}
        />
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
        aria-label="Close image viewer"
      >
        <X className="size-8" />
      </button>
    </div>
  );
}
