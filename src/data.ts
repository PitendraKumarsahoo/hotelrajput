import { Room, MenuItem, GalleryItem, Review } from './types';

export const ROOMS: Room[] = [
  {
    id: 'executive-ac-suite',
    name: 'Executive AC Suite',
    tagline: 'Highway VIP Comfort with Panoramas',
    pricePerNight: 2499,
    originalPrice: 3200,
    capacity: '2 Adults + 1 Child',
    bedType: 'King Size Deluxe Bed',
    sizeSqFt: 380,
    rating: 4.9,
    reviewsCount: 142,
    featured: true,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: [
      'Split Climate AC',
      '50" 4K Smart TV',
      'High-Speed Wi-Fi 6',
      'En-Suite Rain Shower',
      'Tea & Coffee Maker',
      'Work Desk & Chair',
      'Express Room Service',
      'Complimentary Highway Breakfast'
    ],
    description: 'Designed for discerning travelers and long-haul journeyers seeking ultimate relaxation. Features premium memory foam mattress, soundproof windows overlooking the scenic NH-224 highway landscape, and luxury bath amenities.'
  },
  {
    id: 'deluxe-double-ac',
    name: 'Deluxe Double AC Room',
    tagline: 'Spacious & Refreshing Highway Sanctuary',
    pricePerNight: 1799,
    originalPrice: 2200,
    capacity: '2 Guests',
    bedType: 'Queen Size Comfort Bed',
    sizeSqFt: 290,
    rating: 4.8,
    reviewsCount: 198,
    featured: true,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: [
      'Quiet Split AC',
      '43" Full HD Smart TV',
      'Free High-Speed Wi-Fi',
      'Modern Attached Bath',
      'Electric Kettle',
      '24/7 Room Service',
      'Highway Parking View'
    ],
 description: 'The ideal rest stop for couples and business visitors. Clean, crisp linen, acoustic insulation against highway noise, and fast check-in service 24/7.'
  },
  {
    id: 'premium-family-suite',
    name: 'Premium Family Suite',
    tagline: 'Generous Space for Family Road Trips',
    pricePerNight: 3299,
    originalPrice: 4000,
    capacity: '4 Guests',
    bedType: '2 Double Beds / King + Twin',
    sizeSqFt: 460,
    rating: 4.9,
    reviewsCount: 86,
    featured: false,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: [
      'Dual Split AC Units',
      '55" Smart TV with OTT',
      'Ultra Fast Wi-Fi',
      'Separate Seating Area',
      'Mini Refrigerator',
      'Luggage Storage Rack',
      'Complimentary Bottled Water',
      'Hot Water Bath 24/7'
    ],
    description: 'Perfect for families traveling across Odisha highways. Plenty of room for children, multiple bedding options, mini-fridge for snacks, and direct restaurant delivery.'
  },
  {
    id: 'express-single-ac',
    name: 'Highway Express Single AC',
    tagline: 'Quick Refresh & Rest for Solo Travelers',
    pricePerNight: 1299,
    originalPrice: 1600,
    capacity: '1 Guest',
    bedType: 'Single Orthopedic Bed',
    sizeSqFt: 200,
    rating: 4.7,
    reviewsCount: 112,
    featured: false,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: [
      'Instant Cooling AC',
      '32" Smart TV',
      'High-Speed Wi-Fi',
      'Hot & Cold Shower',
      'Daily Housekeeping',
      'Secure Parking Spot'
    ],
    description: 'Clean, compact, and budget-friendly room designed for driver breaks, solo business trips, and quick night stays on NH-224.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'rajput-special-thali',
    name: 'Rajput Royal Deluxe Thali',
    category: 'odia',
    price: 280,
    description: 'Authentic Odia & North Indian feast: Basmati Rice, Butter Roti, Dal Fry, Paneer Curry, Special Mutton/Chicken or Veg Dish, Papad, Salad & Gulab Jamun.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    tags: ['Bestseller', 'Signature', 'Chef Special'],
    isVeg: false,
    rating: 4.9,
    preparationTime: '15 mins',
    isSignature: true
  },
  {
    id: 'mutton-kasa-daspalla',
    name: 'Special Daspalla Mutton Kasa',
    category: 'odia',
    price: 360,
    description: 'Slow-cooked tender highway mutton in rich hand-ground spices, caramelized onions, and traditional mustard oil tempering.',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=800',
    tags: ['Bestseller', 'Spicy', 'Highway Famous'],
    isVeg: false,
    isSpicy: true,
    rating: 5.0,
    preparationTime: '20 mins',
    isSignature: true
  },
  {
    id: 'paneer-butter-masala',
    name: 'Handi Paneer Butter Masala',
    category: 'north-indian',
    price: 240,
    description: 'Fresh cottage cheese cubes simered in rich cashew tomato gravy with aromatic fenugreek and butter swirl.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800',
    tags: ['Veg', 'Bestseller', 'Creamy'],
    isVeg: true,
    rating: 4.8,
    preparationTime: '15 mins'
  },
  {
    id: 'chicken-tikka-tandoori',
    name: 'Clay Oven Tandoori Chicken',
    category: 'tandoori-chinese',
    price: 320,
    description: 'Charcoal roasted half chicken marinated overnight in spiced yogurt, mint chutney, and fresh lemon slices.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    tags: ['Non-Veg', 'Tandoori', 'Juicy'],
    isVeg: false,
    isSpicy: true,
    rating: 4.9,
    preparationTime: '20 mins'
  },
  {
    id: 'pakhala-platter',
    name: 'Traditional Odia Dahi Pakhala',
    category: 'odia',
    price: 180,
    description: 'Cooling fermented curd rice served with Badi Chura, Roasted Potato Fry, Fried Fish/Brinjal, saga bhaja, and raw onion mint salad.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    tags: ['Veg/NonVeg', 'Summer Favorite', 'Odia Heritage'],
    isVeg: true,
    rating: 4.9,
    preparationTime: '10 mins'
  },
  {
    id: 'butter-naan-basket',
    name: 'Garlic Butter Naan Basket (3 Pcs)',
    category: 'north-indian',
    price: 110,
    description: 'Soft tandoori breads baked in tandoor oven topped with fresh garlic, coriander leaves, and amul butter.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    tags: ['Veg', 'Hot & Fresh'],
    isVeg: true,
    rating: 4.7,
    preparationTime: '10 mins'
  },
  {
    id: 'chilli-chicken-fried-rice',
    name: 'Schezwan Chicken Fried Rice Combo',
    category: 'tandoori-chinese',
    price: 260,
    description: 'Wok-tossed aromatic rice with tender chicken, crisp spring onions, and spicy schezwan gravy combo.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    tags: ['Chinese', 'Spicy'],
    isVeg: false,
    isSpicy: true,
    rating: 4.7,
    preparationTime: '15 mins'
  },
  {
    id: 'masala-chai-kulhad',
    name: 'Highway Special Kulhad Masala Chai',
    category: 'beverages-desserts',
    price: 35,
    description: 'Clay cup tea infused with crushed cardamom, ginger, cloves, and thick cream milk. Essential highway energy booster.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
    tags: ['Veg', '24/7 Favorite', 'Hot Beverage'],
    isVeg: true,
    rating: 5.0,
    preparationTime: '5 mins'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ext-1',
    title: 'Rajput Gateway Highway Entrance at Twilight',
    category: 'exterior',
    categoryLabel: 'Hotel Exterior',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    description: 'Grand highway entrance on NH-224 Daspalla illuminated warmly with ambient LED lighting.'
  },
  {
    id: 'room-1',
    title: 'Executive AC Suite Master Bedroom',
    category: 'rooms',
    categoryLabel: 'Luxury Rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200',
    description: 'Plush bedding, acoustic soundproofing, and modern ambient lighting.'
  },
  {
    id: 'rest-1',
    title: 'Fine Dining Highway Restaurant Interior',
    category: 'restaurant',
    categoryLabel: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
    description: 'Air-conditioned dining space with comfortable seating for families and groups.'
  },
  {
    id: 'food-1',
    title: 'Royal Rajput Special Highway Thali',
    category: 'restaurant',
    categoryLabel: 'Authentic Dishes',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=1200',
    description: 'Our signature multi-course platter with authentic Odia & Indian recipes.'
  },
  {
    id: 'banquet-1',
    title: 'Grand AC Banquet Hall for Celebrations',
    category: 'banquet',
    categoryLabel: 'Banquet & Events',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    description: 'Accommodates up to 300 guests for weddings, birthday parties, and corporate meetings.'
  },
  {
    id: 'ext-2',
    title: 'Spacious Secure Highway Parking Yard',
    category: 'exterior',
    categoryLabel: 'Parking & Security',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200',
    description: 'Guarded 24/7 parking space for cars, SUVs, and long-distance travel buses.'
  },
  {
    id: 'room-2',
    title: 'Deluxe AC Bath & Amenities',
    category: 'rooms',
    categoryLabel: 'Luxury Rooms',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    description: 'Clean sanitised bath with rain shower and instant 24/7 hot water.'
  },
  {
    id: 'food-2',
    title: 'Special Daspalla Clay Tandoori Feast',
    category: 'restaurant',
    categoryLabel: 'Authentic Dishes',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1200',
    description: 'Fresh clay-oven chicken marinated in secret hand-ground spices.'
  },
  {
    id: 'ext-3',
    title: 'Night View & Highway Lighting',
    category: 'exterior',
    categoryLabel: 'Hotel Exterior',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
    description: 'Brightly lit landmark gateway easily visible from NH-224 at night.'
  },
  {
    id: 'banquet-2',
    title: 'Buffet Setup & Culinary Team',
    category: 'banquet',
    categoryLabel: 'Banquet & Events',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200',
    description: 'Professional catering staff and pristine hygienic food counters.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Rakesh Ranjan Sahoo',
    location: 'Bhubaneswar to Phulbani Traveler',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best hotel on NH-224 Daspalla route! The Mutton Kasa and Kulhad Tea are legendary. Stopped here for dinner with family and stayed overnight in the Executive AC suite. Extremely clean rooms and polite staff.',
    verifiedGuest: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    source: 'Google Reviews'
  },
  {
    id: 'rev-2',
    author: 'Priya & Alok Mishra',
    location: 'Road Trip Enthusiasts',
    rating: 5,
    date: '1 month ago',
    comment: 'We were driving from Cuttack to Kalahandi at midnight and found Hotel Rajput open. Safe parking, 24/7 hot food, and super comfy bed! The 3D ambiance and hospitality made us feel right at home.',
    verifiedGuest: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    source: 'Google Reviews'
  },
  {
    id: 'rev-3',
    author: 'Er. Debasis Nayak',
    location: 'Commercial Project Director',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Hosted our company regional team meeting in their AC Banquet hall. Outstanding food quality, clean washrooms, ample parking, and very reasonable room tariffs.',
    verifiedGuest: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    source: 'TripAdvisor'
  }
];
