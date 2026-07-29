import { Room, MenuItem, GalleryItem, Review } from './types';
import { HIGH_RES_ASSETS } from './lib/images';
import rajputHeroDay from './assets/images/rajput_hero_day_1785345798852.jpg';
import rajputHeroNight from './assets/images/rajput_hero_night_1785345818047.jpg';
import rajputDhabaThali from './assets/images/rajput_dhaba_thali_1785345838144.jpg';
import rajputLodgeFacade from './assets/images/rajput_lodge_facade_1785345857070.jpg';

import familySuiteAngle1 from './assets/images/family_suite_angle1_1785346426480.jpg';
import familySuiteAngle2 from './assets/images/family_suite_angle2_1785346443641.jpg';
import familySuiteAngle3 from './assets/images/family_suite_angle3_1785346460961.jpg';
import familySuiteAngle4 from './assets/images/family_suite_angle4_1785346477807.jpg';

import execSuiteAngle1 from './assets/images/exec_suite_angle1_1785346494157.jpg';
import execSuiteAngle2 from './assets/images/exec_suite_angle2_1785346507253.jpg';

import deluxeDoubleAngle1 from './assets/images/deluxe_double_angle1_1785346526382.jpg';
import deluxeDoubleAngle2 from './assets/images/deluxe_double_angle2_1785346542078.jpg';

export const HOTEL_PHOTOS = {
  heroDay: rajputHeroDay,
  heroNight: rajputHeroNight,
  dhabaThali: rajputDhabaThali,
  lodgeFacade: rajputLodgeFacade,
  familySuite1: familySuiteAngle1,
  familySuite2: familySuiteAngle2,
  familySuite3: familySuiteAngle3,
  familySuite4: familySuiteAngle4,
  execSuite1: execSuiteAngle1,
  execSuite2: execSuiteAngle2,
  deluxeDouble1: deluxeDoubleAngle1,
  deluxeDouble2: deluxeDoubleAngle2,
};

export const ROOMS: Room[] = [
  {
    id: 'premium-family-suite',
    name: 'Family Suite',
    tagline: 'Spacious comfort for families & groups',
    pricePerNight: 1700,
    originalPrice: 2200,
    capacity: '2–5 Guests',
    bedType: 'Double + Extra Bed',
    sizeSqFt: 280,
    rating: 4.9,
    reviewsCount: 186,
    featured: true,
    image: HIGH_RES_ASSETS.rooms.familySuiteMain,
    gallery: [
      HIGH_RES_ASSETS.rooms.familySuiteMain,
      HIGH_RES_ASSETS.rooms.familySuiteAngle2,
      HIGH_RES_ASSETS.rooms.familySuiteAngle3,
      HIGH_RES_ASSETS.rooms.familySuiteAngle4
    ],
    amenities: [
      'Interconnected Rooms',
      'Spacious & Comfortable',
      'Ideal for Families & Groups',
      'Free WiFi',
      '24-hour Room Service',
      'Hot Water Bath',
      'Daily Housekeeping'
    ],
    description: 'Generous suite with interconnected rooms designed for Indian families and touring groups. Features two plush double beds, tea lounge seating, 24/7 hot water, and instant room dining service.'
  },
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
    image: HIGH_RES_ASSETS.rooms.execSuiteMain,
    gallery: [
      HIGH_RES_ASSETS.rooms.execSuiteMain,
      HIGH_RES_ASSETS.rooms.execSuiteAngle2,
      HIGH_RES_ASSETS.rooms.execSuiteAngle3,
      HIGH_RES_ASSETS.rooms.execSuiteAngle4
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
    image: HIGH_RES_ASSETS.rooms.deluxeDoubleMain,
    gallery: [
      HIGH_RES_ASSETS.rooms.deluxeDoubleMain,
      HIGH_RES_ASSETS.rooms.deluxeDoubleAngle2,
      HIGH_RES_ASSETS.rooms.deluxeDoubleAngle3,
      HIGH_RES_ASSETS.rooms.expressSingleMain
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
    image: HIGH_RES_ASSETS.rooms.expressSingleMain,
    gallery: [
      HIGH_RES_ASSETS.rooms.expressSingleMain,
      HIGH_RES_ASSETS.rooms.expressSingleAngle2,
      HIGH_RES_ASSETS.rooms.deluxeDoubleAngle2
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
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=1000',
    tags: ['Bestseller', 'Spicy', 'Highway Famous'],
    isVeg: false,
    isSpicy: true,
    rating: 5.0,
    preparationTime: '20 mins',
    isSignature: false
  },
  {
    id: 'paneer-butter-masala',
    name: 'Handi Paneer Butter Masala',
    category: 'north-indian',
    price: 240,
    description: 'Fresh cottage cheese cubes simmered in rich cashew tomato gravy with aromatic fenugreek and butter swirl.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1000',
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
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000',
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
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&q=80&w=1000',
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
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=1000',
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
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=1000',
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
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1000',
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

