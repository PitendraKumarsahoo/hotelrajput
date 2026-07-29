export interface Room {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  originalPrice?: number;
  capacity: string;
  bedType: string;
  sizeSqFt: number;
  image: string;
  gallery: string[];
  amenities: string[];
  description: string;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'north-indian' | 'odia' | 'tandoori-chinese' | 'beverages-desserts';
  price: number;
  description: string;
  image: string;
  tags: string[]; // e.g. ["Bestseller", "Veg", "Chef Special", "Spicy"]
  isVeg: boolean;
  isSpicy?: boolean;
  rating: number;
  preparationTime: string;
  isSignature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'restaurant' | 'banquet';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verifiedGuest: boolean;
  avatar: string;
  source: 'Google Reviews' | 'TripAdvisor' | 'Direct Guest';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  roomId: string;
  specialRequests?: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface VerificationCheck {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'success' | 'warning' | 'error';
  details?: string;
  actionUrl?: string;
}
