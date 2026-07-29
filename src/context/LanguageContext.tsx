import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'en' | 'or';

export interface Translations {
  // Navigation
  navHome: string;
  navAbout: string;
  navRooms: string;
  navMenu: string;
  navGallery: string;
  navReviews: string;
  navContact: string;
  bookNow: string;
  callUs: string;

  // Hero
  heroTag: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSub: string;
  exploreRooms: string;
  viewMenu: string;

  // Highlights
  h1Title: string;
  h1Desc: string;
  h2Title: string;
  h2Desc: string;
  h3Title: string;
  h3Desc: string;
  h4Title: string;
  h4Desc: string;

  // Section Titles
  aboutTitle: string;
  roomsTitle: string;
  restaurantTitle: string;
  galleryTitle: string;
  reviewsTitle: string;
  locationTitle: string;

  // Common Actions
  details: string;
  bookRoom: string;
  selectRoom: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  fullName: string;
  phone: string;
  submitRequest: string;
  close: string;
}

const englishTranslations: Translations = {
  navHome: 'Home',
  navAbout: 'About Us',
  navRooms: 'Rooms & Suites',
  navMenu: 'Dining Menu',
  navGallery: 'Gallery',
  navReviews: 'Reviews',
  navContact: 'Contact',
  bookNow: 'Book Room',
  callUs: 'Call 24/7',

  heroTag: 'NH-224 Highway Gateway Hotel & Restaurant • Daspalla',
  heroTitle1: 'Royal Comfort & Authentic Odia',
  heroTitle2: 'Hospitality on the Highway',
  heroSub: 'Experience luxury AC suites, 24/7 dining with 120+ authentic dishes, secure parking, and royal hospitality on NH-224.',
  exploreRooms: 'Explore AC Rooms',
  viewMenu: 'View Dining Menu',

  h1Title: '24/7 Highway Dining',
  h1Desc: 'Authentic Odia Thali, North Indian & Tandoor delicacies available round the clock.',
  h2Title: 'Luxury AC Rooms',
  h2Desc: 'Acoustic noise-insulated suites, high-speed Wi-Fi & 24/7 power backup.',
  h3Title: 'Spacious Secure Parking',
  h3Desc: 'CCTV monitored parking area for over 50+ cars and buses.',
  h4Title: 'Banquet & Celebrations',
  h4Desc: 'Air-conditioned hall for weddings, ring ceremonies & corporate meets.',

  aboutTitle: 'About Hotel Rajput Gateway',
  roomsTitle: 'Luxury Rooms & Suites',
  restaurantTitle: 'Rajput Restaurant Menu',
  galleryTitle: 'Photo & Tour Gallery',
  reviewsTitle: 'Guest Testimonials & Reviews',
  locationTitle: 'Location & Map Directions',

  details: 'View Details',
  bookRoom: 'Book Room',
  selectRoom: 'Select Accommodation',
  checkIn: 'Check-in Date',
  checkOut: 'Check-out Date',
  guests: 'Number of Guests',
  fullName: 'Full Name',
  phone: 'Phone Number',
  submitRequest: 'Confirm Room Reservation',
  close: 'Close',
};

const odiaTranslations: Translations = {
  navHome: 'ମୁଖ୍ୟ ପୃଷ୍ଠା',
  navAbout: 'ଆମ ବିଷୟରେ',
  navRooms: 'ରୁମ୍ ଏବଂ ସୁଇଟ୍',
  navMenu: 'ଖାଦ୍ୟ ମେନୁ',
  navGallery: 'ଫୋଟୋ ଗ୍ୟାଲେରୀ',
  navReviews: 'ମତାମତ',
  navContact: 'ଯୋଗାଯୋଗ',
  bookNow: 'ବୁକିଂ କରନ୍ତୁ',
  callUs: '୨୪/୭ କଲ୍ କରନ୍ତୁ',

  heroTag: 'NH-224 ହାଇୱେ ଗେଟୱେ ହୋଟେଲ ଏବଂ ରେଷ୍ଟୁରାଣ୍ଟ • ଦଶପଲ୍ଲା',
  heroTitle1: 'ରାଜପୁତ ରୋୟାଲ୍ ଆତିଥେୟତା',
  heroTitle2: 'ଏବଂ ସ୍ୱାଦିଷ୍ଟ ଓଡ଼ିଆ ଖାଦ୍ୟ',
  heroSub: 'ଏସି ସୁଇଟ୍ ରୁମ୍, ୧୨୦+ ସ୍ୱାଦିଷ୍ଟ ଓଡ଼ିଆ ଓ ଭାରତୀୟ ଖାଦ୍ୟ, ସୁରକ୍ଷିତ ପାର୍କିଂ ଏବଂ ୨୪/୭ ସେବାର ଆନନ୍ଦ ନିଅନ୍ତୁ।',
  exploreRooms: 'ଏସି ରୁମ୍ ଦେଖନ୍ତୁ',
  viewMenu: 'ଖାଦ୍ୟ ମେନୁ ଦେଖନ୍ତୁ',

  h1Title: '୨୪/୭ ହାଇୱେ ରେଷ୍ଟୁରାଣ୍ଟ',
  h1Desc: 'ପାରମ୍ପରିକ ଓଡ଼ିଆ ଥାଳି, ଉତ୍ତର ଭାରତୀୟ ଏବଂ ତନ୍ଦୁରୀ ଆଇଟମ୍।',
  h2Title: 'ଆରାମଦାୟକ ଏସି ରୁମ୍',
  h2Desc: 'ଶବ୍ଦମୁକ୍ତ ରୁମ୍, ହାଇ-ସ୍ପିଡ୍ ୱାଇ-ଫାଇ ଏବଂ ୨୪/୭ ପାୱାର ବ୍ୟାକଅପ୍।',
  h3Title: 'ସୁରକ୍ଷିତ ବିଶାଳ ପାର୍କିଂ',
  h3Desc: 'ସିସିଟିଭି ନଜରରେ ୫୦+ କାର୍ ଏବଂ ବସ୍ ପାର୍କିଂ ସୁବିଧା।',
  h4Title: 'ବ୍ୟାଙ୍କୁଏଟ୍ ଏବଂ ସଭାଗୃହ',
  h4Desc: 'ବିବାହ, ବ୍ରତଘର ଏବଂ ପାର୍ଟି ପାଇଁ ସୁସଜ୍ଜିତ ଏସି ହଲ୍।',

  aboutTitle: 'ହୋଟେଲ ରାଜପୁତ ବିଷୟରେ',
  roomsTitle: 'ଆମର ରୁମ୍ ଏବଂ ସୁଇଟ୍',
  restaurantTitle: 'ରାଜପୁତ ରେଷ୍ଟୁରାଣ୍ଟ ମେନୁ',
  galleryTitle: 'ଫୋଟୋ ଏବଂ ଭିଡିଓ ଗ୍ୟାଲେରୀ',
  reviewsTitle: 'ଅତିଥିଙ୍କ ସନ୍ତୋଷଜନକ ମତାମତ',
  locationTitle: 'ସ୍ଥାନ ଏବଂ ମାନଚିତ୍ର ରାସ୍ତା',

  details: 'ବିବରଣୀ ଦେଖନ୍ତୁ',
  bookRoom: 'ରୁମ୍ ବୁକ୍ କରନ୍ତୁ',
  selectRoom: 'ରୁମ୍ ଚୟନ କରନ୍ତୁ',
  checkIn: 'ଚେକ୍-ଇନ୍ ତାରିଖ',
  checkOut: 'ଚେକ୍-ଆଉଟ୍ ତାରିଖ',
  guests: 'ଅତିଥି ସଂଖ୍ୟା',
  fullName: 'ପୂରା ନାମ',
  phone: 'ଫୋନ୍ ନମ୍ବର',
  submitRequest: 'ବୁକିଂ ନିଶ୍ଚିତ କରନ୍ତୁ',
  close: 'ବନ୍ଦ କରନ୍ତୁ',
};

interface LanguageContextType {
  language: LanguageMode;
  t: Translations;
  setLanguage: (lang: LanguageMode) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rajput_language') as LanguageMode;
      if (saved === 'en' || saved === 'or') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('rajput_language', language);
  }, [language]);

  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'or' : 'en'));
  };

  const t = language === 'or' ? odiaTranslations : englishTranslations;

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
