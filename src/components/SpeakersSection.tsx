import React from 'react';
import { ArrowRight, Shield, MessageSquare, Phone, ChevronRight } from 'lucide-react';
import { Speaker } from '../types';

interface SpeakersSectionProps {
  speakers: Speaker[];
  onSelectSpeaker: (speaker: Speaker) => void;
  onEnquireSpeaker: (speaker: Speaker) => void;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({
  speakers,
  onSelectSpeaker,
  onEnquireSpeaker,
}) => {
  return (
    <section
      id="speakers"
      className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0A1128]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E1D8] rounded-sm mb-4 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B8860B]">
              The Roster
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-semibold mb-4 tracking-tight">
            Meet Our Speakers
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#555C68] font-normal tracking-wide max-w-xl mx-auto mb-4">
            Distinguished leaders. Extraordinary journeys. Valuable perspectives.
          </p>

          <div className="w-20 h-[1px] bg-[#B8860B] mx-auto" />
        </div>

        {/* Two Premium Editorial Speaker Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {speakers.map((speaker, index) => {
            const waMessage = encodeURIComponent(
              `Hello Speaker's Gallery, I would like to enquire about inviting ${speaker.name} (${speaker.designation}) to speak at our event.`
            );

            return (
              <article
                key={speaker.id}
                id={`speaker-card-${speaker.id}`}
                className="group relative bg-white rounded-sm border border-[#E5E1D8] hover:border-[#B8860B] transition-all duration-500 overflow-hidden flex flex-col shadow-[0_4px_24px_-4px_rgba(26,26,26,0.06)] hover:shadow-2xl"
              >
                {/* Top Subtle Brass Accent Edge */}
                <div className="h-[2px] w-full bg-[#E5E1D8] group-hover:bg-[#B8860B] transition-all duration-500" />

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 flex-1">
                  
                  {/* Portrait Column */}
                  <div className="sm:col-span-5 relative min-h-[300px] sm:min-h-full overflow-hidden bg-[#F6F3EC]">
                    <img
                      src={speaker.portraitUrl}
                      alt={speaker.name}
                      className="w-full h-full object-cover object-top filter grayscale-[20%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#1A1A1A]/70 via-[#1A1A1A]/20 to-transparent opacity-85 sm:opacity-60" />

                    {/* Rank Badge overlay */}
                    <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-[#E5E1D8] rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] text-[#1A1A1A] shadow-xs">
                      {speaker.rank}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 hidden sm:block bg-white/90 backdrop-blur-xs p-2 rounded-xs border border-[#E5E1D8]">
                      <span className="text-[9px] uppercase tracking-wider text-[#6F7785] block font-semibold">
                        Service
                      </span>
                      <span className="text-xs text-[#1A1A1A] font-semibold">
                        {speaker.service}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                    
                    <div className="space-y-4">
                      {/* Designation */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#B8860B]">
                          {speaker.designation}
                        </span>
                        <span className="text-[10px] text-[#8C94A2] font-mono">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A1A1A] group-hover:text-[#0A1128] transition-colors leading-tight">
                        {speaker.name}
                      </h3>

                      {/* Short Placeholder Biography */}
                      <p className="font-sans text-xs sm:text-sm text-[#555C68] leading-relaxed font-normal line-clamp-4">
                        {speaker.shortBio}
                      </p>

                      {/* Speaking Areas / Expertise */}
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#6F7785] block mb-2">
                          Speaking Areas:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {speaker.speakingAreas.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-[11px] font-medium rounded-sm bg-[#F6F3EC] text-[#2D3139] border border-[#E5E1D8]"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#E5E1D8] space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <button
                          id={`view-profile-btn-${speaker.id}`}
                          onClick={() => onSelectSpeaker(speaker)}
                          className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A1128] hover:text-[#B8860B] transition-colors"
                        >
                          <span>View Profile</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={`https://wa.me/919876543210?text=${waMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-sm bg-[#F6F3EC] hover:bg-white border border-[#E5E1D8] text-[#2D3139] hover:text-[#1A1A1A] transition-colors"
                            title={`Chat on WhatsApp regarding ${speaker.name}`}
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                          </a>
                          <a
                            href="tel:+919876543210"
                            className="p-2 rounded-sm bg-[#F6F3EC] hover:bg-white border border-[#E5E1D8] text-[#2D3139] hover:text-[#1A1A1A] transition-colors"
                            title={`Call for booking ${speaker.name}`}
                          >
                            <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
                          </a>
                        </div>
                      </div>

                      <button
                        id={`card-enquire-btn-${speaker.id}`}
                        onClick={() => onEnquireSpeaker(speaker)}
                        className="w-full py-2.5 px-4 rounded-sm bg-[#0A1128] hover:bg-[#1A1A1A] text-white border border-[#0A1128] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
                      >
                        <span>Enquire for Keynote</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Note regarding customized topics */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#6F7785] font-normal">
            Customised keynote briefings and board-level advisory sessions are tailored to each host organisation’s specific strategic objectives.
          </p>
        </div>

      </div>
    </section>
  );
};
