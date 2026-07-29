import React, { useState } from 'react';
import { handleImageError, HIGH_RES_ASSETS } from '../lib/images';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  key?: React.Key;
  src: string;
  alt: string;
  fallbackType?: 'room' | 'food' | 'architecture' | 'avatar';
  aspectRatio?: string; // e.g., "aspect-video", "aspect-square", "h-48"
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  fallbackType = 'room',
  className = '',
  width = 1200,
  height,
  quality = 80,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Optimize Unsplash image URLs to request WebP format and proper sizing
  const getOptimizedSrc = (originalUrl: string, fmt: 'webp' | 'avif' | 'auto' = 'webp'): string => {
    if (!originalUrl) return HIGH_RES_ASSETS.placeholders[fallbackType];
    if (originalUrl.includes('images.unsplash.com')) {
      try {
        const url = new URL(originalUrl);
        url.searchParams.set('auto', 'format');
        url.searchParams.set('fm', fmt);
        url.searchParams.set('fit', 'crop');
        url.searchParams.set('q', quality.toString());
        url.searchParams.set('w', width.toString());
        if (height) url.searchParams.set('h', height.toString());
        return url.toString();
      } catch {
        return originalUrl;
      }
    }
    return originalUrl;
  };

  const webpSrc = getOptimizedSrc(src, 'webp');
  const avifSrc = getOptimizedSrc(src, 'avif');
  const fallbackSrc = getOptimizedSrc(src, 'auto');

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Shimmer / Blur-up Placeholder Skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1C1418] via-[#2A1E24] to-[#1C1418] animate-pulse rounded-[inherit] z-10"
          aria-hidden="true"
        />
      )}

      {/* Picture Element for WebP/AVIF auto-selection */}
      <picture className="w-full h-full">
        {src.includes('images.unsplash.com') && (
          <>
            <source srcSet={avifSrc} type="image/avif" />
            <source srcSet={webpSrc} type="image/webp" />
          </>
        )}
        <img
          src={hasError ? HIGH_RES_ASSETS.placeholders[fallbackType] : fallbackSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            setHasError(true);
            setIsLoaded(true);
            handleImageError(e, fallbackType);
          }}
          className={`w-full h-full object-cover transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
          }`}
          {...props}
        />
      </picture>
    </div>
  );
}
