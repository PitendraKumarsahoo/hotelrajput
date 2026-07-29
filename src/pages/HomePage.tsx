import React from 'react';
import Hero from '../components/Hero';
import SectionNavDots from '../components/SectionNavDots';
import HighlightsStrip from '../components/HighlightsStrip';
import AboutSection from '../components/AboutSection';
import RoomsSection from '../components/RoomsSection';
import RestaurantSection from '../components/RestaurantSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import LocationContactSection from '../components/LocationContactSection';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenBookingWithRoom: (roomId: string) => void;
  onOpenVideoTour: () => void;
  onNavigate: (path: string) => void;
}

export default function HomePage({
  onOpenBooking,
  onOpenBookingWithRoom,
  onOpenVideoTour,
  onNavigate,
}: HomePageProps) {
  return (
    <main className="relative">
      <SectionNavDots />
      <Hero onOpenBooking={onOpenBooking} onNavigate={onNavigate} />
      <HighlightsStrip />
      <AboutSection onOpenVideoTour={onOpenVideoTour} />
      <RoomsSection onOpenBookingWithRoom={onOpenBookingWithRoom} />
      <RestaurantSection />
      <GallerySection />
      <ReviewsSection />
      <LocationContactSection />
    </main>
  );
}
