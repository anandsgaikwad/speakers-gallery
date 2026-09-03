import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Shield } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Speakers', href: '#speakers', id: 'speakers' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E5E1D8] py-3.5 shadow-[0_4px_20px_-4px_rgba(26,26,26,0.06)]'
            : 'bg-[#FDFBF7]/80 backdrop-blur-sm border-b border-[#E5E1D8]/50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Monogram */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleLinkClick('home', e)}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]"
            >
              <div className="w-9 h-9 rounded-sm bg-[#0A1128] border border-[#B8860B]/50 flex items-center justify-center text-[#B8860B] shadow-xs group-hover:border-[#B8860B] transition-colors">
                <Shield className="w-5 h-5 text-[#B8860B]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-[0.22em] text-base sm:text-lg font-bold text-[#1A1A1A] uppercase group-hover:text-[#0A1128] transition-colors">
                  Speaker’s Gallery
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#B8860B] font-semibold -mt-0.5">
                  Indian Army Veterans
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(link.id, e)}
                    className={`text-xs tracking-[0.16em] uppercase transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#0A1128] font-bold'
                        : 'text-[#555C68] hover:text-[#1A1A1A] font-medium'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B8860B] rounded-none" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div className="hidden md:flex items-center gap-3.5">
              <a
                id="header-whatsapp-btn"
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20speaker%20from%20Speaker%27s%20Gallery."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2D3139] hover:text-[#1A1A1A] bg-white hover:bg-[#F6F3EC] border border-[#E5E1D8] rounded-sm transition-colors shadow-2xs"
                title="WhatsApp Enquiries"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <button
                id="header-enquire-btn"
                onClick={(e) => handleLinkClick('contact', e)}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0A1128] hover:bg-[#1A1A1A] text-white border border-[#0A1128] rounded-sm shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2 text-[#2D3139] hover:text-[#1A1A1A] bg-white border border-[#E5E1D8] rounded-sm focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#B8860B]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-40 bg-[#FDFBF7]/98 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-8 md:hidden transition-all animate-in fade-in border-b border-[#E5E1D8]"
        >
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#E5E1D8]">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8860B] font-semibold">
                Navigation
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.id, e)}
                  className={`text-xl font-display tracking-wide py-2 ${
                    activeSection === link.id
                      ? 'text-[#0A1128] font-bold pl-3 border-l-2 border-[#B8860B]'
                      : 'text-[#555C68] hover:text-[#1A1A1A]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E5E1D8]">
            <div className="grid grid-cols-2 gap-3">
              <a
                id="mobile-wa-btn"
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20speaker%20from%20Speaker%27s%20Gallery."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-white border border-[#E5E1D8] text-xs font-semibold text-[#1A1A1A]"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp
              </a>
              <a
                id="mobile-call-btn"
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-white border border-[#E5E1D8] text-xs font-semibold text-[#1A1A1A]"
              >
                <Phone className="w-4 h-4 text-[#B8860B]" />
                Call Now
              </a>
            </div>
            <button
              id="mobile-drawer-enquire-btn"
              onClick={(e) => handleLinkClick('contact', e)}
              className="w-full py-3.5 bg-[#0A1128] hover:bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wider rounded-sm text-center shadow-md transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};
