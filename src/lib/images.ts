import React from 'react';

// High-resolution Asset & Placeholder Management System for Hotel Rajput Daspalla

export interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'crop' | 'contain' | 'max';
}

/**
 * Transforms an Unsplash image URL to request specific dimensions and 4K-quality rendering.
 */
export function get4kUrl(url: string, options: ImageOptions = {}): string {
  if (!url) return HIGH_RES_ASSETS.placeholders.room;

  // If it's an Unsplash URL, append or replace optimal resolution parameters
  if (url.includes('images.unsplash.com')) {
    const width = options.width || 2560;
    const height = options.height;
    const quality = options.quality || 85;
    const fit = options.fit || 'crop';

    try {
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set('auto', 'format');
      parsedUrl.searchParams.set('fit', fit);
      parsedUrl.searchParams.set('q', quality.toString());
      parsedUrl.searchParams.set('w', width.toString());
      if (height) {
        parsedUrl.searchParams.set('h', height.toString());
      }
      return parsedUrl.toString();
    } catch {
      return url;
    }
  }

  return url;
}

/**
 * Curated 4K Architectural & Culinary Image Library
 */
export const HIGH_RES_ASSETS = {
  rooms: {
    familySuiteMain: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=85&w=2560',
    familySuiteAngle2: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=85&w=2560',
    familySuiteAngle3: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=85&w=2560',
    familySuiteAngle4: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=85&w=2560',
    
    execSuiteMain: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=85&w=2560',
    execSuiteAngle2: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=85&w=2560',
    execSuiteAngle3: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=85&w=2560',
    execSuiteAngle4: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=85&w=2560',

    deluxeDoubleMain: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=85&w=2560',
    deluxeDoubleAngle2: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=85&w=2560',
    deluxeDoubleAngle3: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=85&w=2560',

    expressSingleMain: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?auto=format&fit=crop&q=85&w=2560',
    expressSingleAngle2: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=85&w=2560',
  },
  restaurant: {
    royalThali: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=85&w=2560',
    muttonKasa: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=85&w=2560',
    paneerButterMasala: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=85&w=2560',
    tandooriChicken: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=85&w=2560',
    pakhalaThali: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=85&w=2560',
    butterNaan: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=85&w=2560',
    chickenFriedRice: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=85&w=2560',
    masalaChai: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=85&w=2560',
    diningAmbiance: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=85&w=2560',
  },
  architecture: {
    exteriorNight: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=85&w=2560',
    exteriorDay: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=2560',
    lodgeBuilding: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=85&w=2560',
    reception: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=85&w=2560',
  },
  placeholders: {
    room: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=85&w=2560',
    food: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=85&w=2560',
    architecture: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=85&w=2560',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=200',
  }
};

/**
 * Helper to attach to img onError attributes for graceful high-res fallback
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType: 'room' | 'food' | 'architecture' | 'avatar' = 'room'
): void {
  const target = event.currentTarget;
  if (target.getAttribute('data-has-fallback') === 'true') return;
  
  target.setAttribute('data-has-fallback', 'true');
  target.src = HIGH_RES_ASSETS.placeholders[fallbackType];
}
