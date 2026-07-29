import { Room, MenuItem, GalleryItem, Review } from './types';
import rajputHeroDay from './assets/images/rajput_hero_day_1785345798852.jpg';
import rajputHeroNight from './assets/images/rajput_hero_night_1785345818047.jpg';
import rajputDhabaThali from './assets/images/rajput_dhaba_thali_1785345838144.jpg';
import rajputLodgeFacade from './assets/images/rajput_lodge_facade_1785345857070.jpg';

export const HOTEL_PHOTOS = {
  heroDay: rajputHeroDay,
  heroNight: rajputHeroNight,
  dhabaThali: rajputDhabaThali,
  lodgeFacade: rajputLodgeFacade,
};

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
    image: rajputLodgeFacade,
    gallery: [
      rajputLodgeFacade,
      rajputHeroDay,
      rajputHeroNight
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
    description: 'Designed for discerning travelers and long-haul journeyers seeking ultimate relaxation at Rajput Lodge Daspalla. Features premium memory foam mattress, soundproof windows, and luxury bath amenities.'
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
    image: rajputHeroDay,
    gallery: [
      rajputHeroDay,
      rajputLodgeFacade
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
    image: rajputHeroNight,
    gallery: [
      rajputHeroNight,
      rajputLodgeFacade
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
    image: rajputLodgeFacade,
    gallery: [
      rajputLodgeFacade
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
    name: 'Rajput Royal Special Dhaba Thali',
    category: 'odia',
    price: 280,
    description: 'Authentic Odia feast served on natural Sal leaf: Basmati Rice, Traditional Dalma, Crispy Bhaja, Special Mutton/Chicken Kasa, Papad & Salad.',
    image: rajputDhabaThali,
    tags: ['Bestseller', 'Signature', 'Chef Special'],
    isVeg: false,
    rating: 5.0,
    preparationTime: '15 mins',
    isSignature: true
  },
  {
    id: 'mutton-kasa-daspalla',
    name: 'Special Daspalla Mutton Kasa with Roti',
    category: 'odia',
    price: 360,
    description: 'Slow-cooked tender highway mutton in rich hand-ground spices, served hot with tandoori chapati rotis on a leaf plate.',
    image: rajputDhabaThali,
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
    description: 'Fresh cottage cheese cubes simmered in rich cashew tomato gravy with aromatic fenugreek and butter swirl.',
    image: rajputDhabaThali,
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
    image: rajputHeroNight,
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
    image: rajputDhabaThali,
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
    image: rajputDhabaThali,
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
    image: rajputDhabaThali,
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
    image: rajputHeroDay,
    tags: ['Veg', '24/7 Favorite', 'Hot Beverage'],
    isVeg: true,
    rating: 5.0,
    preparationTime: '5 mins'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ext-1',
    title: 'Hotel Rajput Daspalla Royal Entrance (Day View)',
    category: 'exterior',
    categoryLabel: 'Hotel Entrance',
    image: rajputHeroDay,
    description: 'Traditional wooden arch gateway, royal elephant statues, sword emblem logo, and broad paved parking on NH-224.'
  },
  {
    id: 'ext-night',
    title: 'Hotel Rajput Illumination at Night',
    category: 'exterior',
    categoryLabel: 'Night Ambiance',
    image: rajputHeroNight,
    description: 'Spectacular LED lights illuminating the entrance on NH-224 highway, open 24/7 for highway travelers.'
  },
  {
    id: 'lodge-facade',
    title: 'Rajput Lodge AC Rooms & Suite Building',
    category: 'exterior',
    categoryLabel: 'AC Lodge Building',
    image: rajputLodgeFacade,
    description: '3-story modern lodging facility with spacious AC rooms, glass windows, and secure parking.'
  },
  {
    id: 'food-thali',
    title: 'Authentic Odia Dhaba Thali on Sal Leaf',
    category: 'restaurant',
    categoryLabel: 'Authentic Dishes',
    image: rajputDhabaThali,
    description: 'Our signature Sal leaf thali with Basmati rice, traditional Dalma, crisp Bhaja, and spiced Mutton/Chicken Kasa.'
  },
  {
    id: 'room-1',
    title: 'Executive AC Suite at Rajput Lodge',
    category: 'rooms',
    categoryLabel: 'Luxury Rooms',
    image: rajputLodgeFacade,
    description: 'Plush bedding, acoustic soundproofing, and modern ambient lighting inside Rajput Lodge.'
  },
  {
    id: 'rest-1',
    title: 'Hotel Rajput Highway Restaurant Entrance',
    category: 'restaurant',
    categoryLabel: 'Dining Area',
    image: rajputHeroDay,
    description: 'Welcoming dining atmosphere with 120+ dishes served fresh 24 hours a day.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Rakesh Ranjan Sahoo',
    location: 'Bhubaneswar to Phulbani Traveler',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Best hotel on NH-224 Daspalla route! The Mutton Kasa and Sal Leaf Thali are legendary. Stopped here for dinner with family and stayed overnight in the Rajput Lodge AC suite. Extremely clean rooms and polite staff.',
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
    comment: 'We were driving from Cuttack to Kalahandi at midnight and found Hotel Rajput open. Safe parking with CCTV, 24/7 hot food, and super comfy bed! The elephant statues and traditional welcome feel awesome.',
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
    comment: 'Hosted our company regional team meeting in their AC Banquet hall at Rajput Lodge. Outstanding food quality, clean washrooms, ample parking, and very reasonable room tariffs.',
    verifiedGuest: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    source: 'TripAdvisor'
  }
];

