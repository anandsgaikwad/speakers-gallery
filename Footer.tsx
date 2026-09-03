import React from 'react';
import { Shield, MessageSquare, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A1128] border-t border-[#14224C] pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#14224C] items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#0E1838] border border-[#B8860B]/40 flex items-center justify-center text-[#D8AA47]">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display tracking-[0.22em] text-lg font-bold text-white uppercase">
                SPEAKER’S GALLERY
              </span>
            </div>

            <div className="space-y-1">
              <p className="font-serif italic text-lg text-[#FDFBF7] font-normal">
                Leadership That Inspires.
              </p>
              <p className="font-serif italic text-lg text-[#D8AA47] font-normal">
                Experience That Speaks.
              </p>
            </div>

            <p className="font-sans text-xs text-[#E5E1D8]/80 max-w-md leading-relaxed font-normal">
              Representing distinguished military veterans from the Indian Army, translating decades of high-consequence command into decisive strategic insights for corporate, institutional, and academic forums.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8AA47] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('speakers')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Speakers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Enquiries Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D8AA47] block">
              Direct Coordination
            </span>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20speaker."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 98765 43210</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8AA47]" />
                <span>Call: +91 (0) 98765 43210</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#D8AA47]" />
                <span>secretariat@speakersgallery.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-400">
              © 2026 Speaker’s Gallery. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              Executive speaker bureau representing distinguished Indian Army veteran leaders.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-[#D8AA47] transition-colors group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
