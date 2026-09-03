/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { SpeakersSection } from './components/SpeakersSection';
import { SpeakerProfileModal } from './components/SpeakerProfileModal';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SPEAKERS_DATA } from './data/speakers';
import { GALLERY_ITEMS } from './data/gallery';
import { Speaker } from './types';

export default function App() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [preselectedSpeakerId, setPreselectedSpeakerId] = useState<string>('both');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track scrolling section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'speakers', 'gallery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSpeakerProfile = (speaker: Speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleCloseSpeakerProfile = () => {
    setSelectedSpeaker(null);
  };

  const handleSelectSpeakerForBooking = (speaker: Speaker) => {
    setSelectedSpeaker(null);
    setPreselectedSpeakerId(speaker.id);
    // Smooth scroll to contact section
    setTimeout(() => {
      handleNavigate('contact');
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col selection:bg-[#B8860B]/20 selection:text-[#1A1A1A]">
      {/* Sticky Navigation Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Cinematic Hero */}
        <Hero
          onExploreSpeakers={() => handleNavigate('speakers')}
          onEnquireNow={() => handleNavigate('contact')}
        />

        {/* 2. Introductory "Experience Worth Listening To" & 3 Value Blocks */}
        <IntroSection />

        {/* 3. Meet Our Speakers */}
        <SpeakersSection
          speakers={SPEAKERS_DATA}
          onSelectSpeaker={handleOpenSpeakerProfile}
          onEnquireSpeaker={(speaker) => handleSelectSpeakerForBooking(speaker)}
        />

        {/* 4. The Gallery with Masonry & Lightbox */}
        <GallerySection items={GALLERY_ITEMS} />

        {/* 5. Contact & Booking Secretariat */}
        <ContactSection
          speakers={SPEAKERS_DATA}
          preselectedSpeakerId={preselectedSpeakerId}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Detailed Speaker Profile Modal */}
      <SpeakerProfileModal
        speaker={selectedSpeaker}
        onClose={handleCloseSpeakerProfile}
        onSelectSpeakerForBooking={handleSelectSpeakerForBooking}
        allSpeakers={SPEAKERS_DATA}
        onSwitchSpeaker={setSelectedSpeaker}
      />
    </div>
  );
}
