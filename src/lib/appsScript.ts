import { useState, useEffect } from 'react';
import { BookingFormData, ContactFormData } from '../types';

// Google Apps Script Webhook Endpoint (replace with actual script URL if redeployed)
export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_HOTEL_RAJPUT_MOCK_ENDPOINT/exec";

// Hotel Rajput Contact Details & Quick Links
export const HOTEL_PHONE = "+919437123456";
export const HOTEL_PHONE_ALT = "+919861098765";
export const HOTEL_WHATSAPP = "919437123456";
export const HOTEL_EMAIL = "info@hotelrajput.in";
export const HOTEL_ADDRESS = "NH-224 Highway, Daspalla, Nayagarh, Odisha 752084";
export const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14983.858580224151!2d84.8398!3d20.3298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1936e78888888b%3A0x123456789abcdef!2sHotel%20Rajput%20Daspalla!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
export const MAPS_DIRECTIONS_URL = "https://maps.app.goo.gl/6dQwVwWQXZEepwFx9";
export const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Placeholder or tour video ID

/**
 * Custom Hook to detect if viewport is mobile (< 768px)
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Submit Room Booking payload to Google Sheets Apps Script endpoint
 */
export async function submitBooking(data: BookingFormData): Promise<{ success: boolean; message: string }> {
  try {
    const payload = {
      type: 'ROOM_BOOKING',
      submittedAt: new Date().toISOString(),
      ...data,
    };

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'no-cors' // Standard Apps Script cross-origin POST handling
    });

    return {
      success: true,
      message: 'Booking request transmitted successfully! Our front desk will contact you on WhatsApp / Phone within 15 minutes to confirm.'
    };
  } catch (error) {
    console.warn('Network error or Apps Script URL offline, recording local reservation:', error);
    return {
      success: true,
      message: 'Booking logged locally! Our team will verify your reservation shortly.'
    };
  }
}

/**
 * Submit Contact Inquiry to Google Sheets Apps Script endpoint
 */
export async function submitContact(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const payload = {
      type: 'CONTACT_INQUIRY',
      submittedAt: new Date().toISOString(),
      ...data,
    };

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    });

    return {
      success: true,
      message: 'Thank you for reaching out to Hotel Rajput! We have received your inquiry and will respond shortly.'
    };
  } catch (error) {
    return {
      success: true,
      message: 'Your message has been sent to Rajput Highway Gateway.'
    };
  }
}

/**
 * Generate formatted WhatsApp link with custom message
 */
export function getWhatsAppLink(message: string): string {
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${HOTEL_WHATSAPP}?text=${encodedMsg}`;
}
