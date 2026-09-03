import React from 'react';
import { ArrowRight, ChevronDown, Award, Compass, Users } from 'lucide-react';

interface HeroProps {
  onExploreSpeakers: () => void;
  onEnquireNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSpeakers, onEnquireNow }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-[#FDFBF7]"
    >
      {/* Geometric architectural grid pattern and ambient light */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 25%, rgba(184, 134, 11, 0.08) 0%, transparent 60%),
                              linear-gradient(to right, rgba(26, 26, 26, 0.035) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(26, 26, 26, 0.035) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 56px 56px, 56px 56px',
          }}
        />
      </div>

      {/* Decorative subtle ambient glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#B8860B]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#0A1128]/5 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white border border-[#E5E1D8] shadow-2xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse" />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-[#B8860B]">
                SPEAKER’S GALLERY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem] text-[#1A1A1A] font-semibold leading-[1.12] tracking-tight mb-6">
              Leadership That <span className="text-[#0A1128] italic font-normal">Inspires.</span>
              <br />
              Experience That <span className="text-[#B8860B] font-semibold">Speaks.</span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#555C68] max-w-2xl leading-relaxed mb-9 font-normal">
              Distinguished leaders sharing decades of experience, leadership lessons and perspectives shaped by service, responsibility and real-world challenges.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                id="hero-explore-cta"
                onClick={onExploreSpeakers}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0A1128] hover:bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-[0.14em] rounded-sm transition-all shadow-md hover:shadow-lg active:scale-[0.99] border border-[#0A1128]"
              >
                <span>Explore Our Speakers</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-enquire-cta"
                onClick={onEnquireNow}
                className="inline-flex items-center justify-center px-7 py-4 bg-white hover:bg-[#F6F3EC] text-[#1A1A1A] hover:text-[#0A1128] font-semibold text-xs tracking-[0.14em] uppercase border border-[#E5E1D8] hover:border-[#B8860B] rounded-sm transition-all shadow-2xs"
              >
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Subtle Pillars / Labels */}
            <div className="pt-6 border-t border-[#E5E1D8] w-full flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2 text-[#2D3139]">
                <Compass className="w-4 h-4 text-[#B8860B]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#2D3139]">
                  Leadership
                </span>
              </div>
              <span className="text-[#D5CEBF] hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-[#2D3139]">
                <Award className="w-4 h-4 text-[#B8860B]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#2D3139]">
                  Strategy
                </span>
              </div>
              <span className="text-[#D5CEBF] hidden sm:inline">•</span>
              <div className="flex items-center gap-2 text-[#2D3139]">
                <Users className="w-4 h-4 text-[#B8860B]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#2D3139]">
                  Experience
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Treatment (Large Executive Portrait with Geometric Frame) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Architectural Border Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E1D8] bg-white p-2 shadow-2xl shadow-black/[0.06] group">
              
              <div className="relative w-full h-full overflow-hidden rounded-xs">
                {/* Image */}
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                  alt="Executive Speaker Keynote"
                  className="w-full h-full object-cover object-top filter brightness-98 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent pointer-events-none" />

                {/* Corner geometric brass ornaments */}
                <div className="absolute top-3 left-3 border-l-2 border-t-2 border-[#B8860B] w-5 h-5 pointer-events-none z-20" />
                <div className="absolute bottom-3 right-3 border-r-2 border-b-2 border-[#B8860B] w-5 h-5 pointer-events-none z-20" />

                {/* Floating Executive Badges */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-sm bg-white/95 backdrop-blur-md border border-[#E5E1D8] shadow-sm z-20">
                  <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#1A1A1A]">
                    Indian Army Veterans
                  </span>
                </div>

                {/* Bottom Card Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-sm bg-white/95 backdrop-blur-md border border-[#E5E1D8] shadow-md z-20">
                  <p className="text-[10px] uppercase tracking-wider text-[#B8860B] font-bold mb-0.5">
                    Keynote Perspectives
                  </p>
                  <p className="font-serif text-sm sm:text-base text-[#1A1A1A] font-semibold leading-snug">
                    Decades of High-Stakes Command Distilled for Corporate & Institutional Forums
                  </p>
                </div>
              </div>

            </div>

            {/* Underlay geometric shadow frame */}
            <div className="absolute -inset-2 rounded-sm bg-[#B8860B]/5 -z-10 blur-xl opacity-80" />

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex justify-center mt-12">
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-1.5 text-[#6F7785] hover:text-[#B8860B] transition-colors"
            aria-label="Scroll to introductory section"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
