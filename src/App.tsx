import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Differentials } from '@/components/Differentials';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { Gallery } from '@/components/Gallery';
import { BookingForm } from '@/components/BookingForm';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { ServiceModal } from '@/components/ServiceModal';
import { PrivacyModal } from '@/components/PrivacyModal';
import { ServiceItem, CLINIC_INFO } from '@/data/physioData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent('Olá, Nat! Gostaria de agendar uma avaliação.')}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1413] text-[#eefbf7] selection:bg-primary/20 selection:text-primary relative font-sans antialiased overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Impactful Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Professional Presentation (About Nat Fernandes) */}
        <About />

        {/* 3. Services & Treatments */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 4. Why choose individualized care (4 Differentials) */}
        <Differentials />

        {/* 5. 3-Step Process (How It Works) */}
        <HowItWorks />

        {/* 6. Professional Gallery (Clinic, equipment, sessions) */}
        <Gallery />

        {/* 7. Real Patient Testimonials (Ethically compliant carousel) */}
        <Testimonials />

        {/* 8. Interactive Booking & Contact Form */}
        <BookingForm />

        {/* 9. Final High-Conversion Deep Green CTA */}
        <FinalCta />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      {/* Privacy Policy & COFFITO Ethics Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}