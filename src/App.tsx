import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import TourVideoModal from './components/TourVideoModal';
import FloatingContactButtons from './components/FloatingContactButtons';

import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RestaurantPage from './pages/RestaurantPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import VerifyPage from './pages/VerifyPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [videoTourOpen, setVideoTourOpen] = useState(false);

  // Sync back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path.startsWith('/#')) {
      // Scroll to element on home page
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const id = path.replace('/#', '');
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = path.replace('/#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setBookingModalOpen(true);
  };

  const handleOpenBooking = () => {
    setSelectedRoomId(undefined);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0B0D] text-[#F3EFEA] flex flex-col font-sans selection:bg-[#D97706] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Route View */}
      <div className="flex-1">
        {currentPath === '/' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
            onOpenVideoTour={() => setVideoTourOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPath === '/rooms' && (
          <RoomsPage onOpenBookingWithRoom={handleOpenBookingWithRoom} />
        )}

        {currentPath === '/restaurant' && <RestaurantPage />}

        {currentPath === '/gallery' && <GalleryPage />}

        {currentPath === '/contact' && <ContactPage />}

        {currentPath === '/verify' && <VerifyPage />}
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />

      {/* Room Booking Drawer Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        selectedRoomId={selectedRoomId}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Tour Video Modal */}
      <TourVideoModal
        isOpen={videoTourOpen}
        onClose={() => setVideoTourOpen(false)}
      />

      {/* Persistent Floating Contact Buttons (Phone Call + WhatsApp) */}
      <FloatingContactButtons />
    </div>
  );
}

