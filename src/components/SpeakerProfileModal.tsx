import React, { useEffect } from 'react';
import { X, MessageSquare, Phone, Calendar, ArrowRight, Shield, Award, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Speaker } from '../types';

interface SpeakerProfileModalProps {
  speaker: Speaker | null;
  onClose: () => void;
  onSelectSpeakerForBooking: (speaker: Speaker) => void;
  allSpeakers: Speaker[];
  onSwitchSpeaker: (speaker: Speaker) => void;
}

export const SpeakerProfileModal: React.FC<SpeakerProfileModalProps> = ({
  speaker,
  onClose,
  onSelectSpeakerForBooking,
  allSpeakers,
  onSwitchSpeaker
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (speaker) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [speaker, onClose]);

  if (!speaker) return null;

  const currentIndex = allSpeakers.findIndex((s) => s.id === speaker.id);
  const nextSpeaker = allSpeakers[(currentIndex + 1) % allSpeakers.length];
  const prevSpeaker = allSpeakers[(currentIndex - 1 + allSpeakers.length) % allSpeakers.length];

  const waMessage = encodeURIComponent(
    `Hello Speaker's Gallery, I would like to invite ${speaker.name} (${speaker.designation}) to speak at our upcoming executive conference/event.`
  );

  return (
    <div
      id="speaker-profile-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#121418]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="speaker-profile-modal-content"
        className="relative w-full max-w-5xl bg-[#FDFBF7] border border-[#E5E1D8] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-[#1A1A1A]"
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1D8] bg-white sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#B8860B]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B8860B]">
              Speaker Dossier & Speaking Topics
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Switch between Speakers */}
            <div className="hidden sm:flex items-center gap-1 border border-[#E5E1D8] rounded-sm px-1 py-0.5 bg-[#F6F3EC]">
              <button
                onClick={() => onSwitchSpeaker(prevSpeaker)}
                className="p-1.5 text-[#555C68] hover:text-[#1A1A1A] rounded transition-colors"
                title={`Switch to ${prevSpeaker.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-[10px] text-[#6F7785] uppercase tracking-wider px-1 font-mono">
                {currentIndex + 1} / {allSpeakers.length}
              </span>
              <button
                onClick={() => onSwitchSpeaker(nextSpeaker)}
                className="p-1.5 text-[#555C68] hover:text-[#1A1A1A] rounded transition-colors"
                title={`Switch to ${nextSpeaker.name}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              id="speaker-profile-close-btn"
              onClick={onClose}
              className="p-2 rounded-sm bg-[#F6F3EC] text-[#555C68] hover:text-[#1A1A1A] hover:bg-white border border-[#E5E1D8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              aria-label="Close speaker profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-12 bg-[#FDFBF7]">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#E5E1D8] pb-10">
            {/* Large Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-sm overflow-hidden border border-[#E5E1D8] shadow-lg bg-white p-1.5">
                <div className="relative w-full h-full overflow-hidden rounded-xs">
                  <img
                    src={speaker.portraitUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Official Rank Ribbon */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm border border-[#E5E1D8] rounded-sm text-[10px] uppercase font-bold tracking-[0.2em] text-[#1A1A1A] shadow-xs">
                    {speaker.rank}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-sm border border-[#E5E1D8] shadow-sm">
                    <p className="text-[10px] uppercase tracking-wider text-[#B8860B] font-bold">
                      Service Ethos
                    </p>
                    <p className="text-xs text-[#555C68] italic font-normal">
                      “{speaker.quote}”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Header Details */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E1D8] rounded-sm self-start shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
                <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#0A1128]">
                  {speaker.service}
                </span>
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-semibold tracking-tight">
                  {speaker.name}
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#B8860B] font-semibold tracking-wide mt-1">
                  {speaker.designation}
                </p>
              </div>

              <p className="font-sans text-base text-[#555C68] leading-relaxed font-normal">
                {speaker.shortBio}
              </p>

              {/* Speaking Specialties Pills */}
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#6F7785] block mb-2.5">
                  Speaking Specialties
                </span>
                <div className="flex flex-wrap gap-2">
                  {speaker.speakingAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-sm bg-white text-[#2D3139] border border-[#E5E1D8]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Actions in Hero */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  id={`modal-invite-btn-${speaker.id}`}
                  onClick={() => onSelectSpeakerForBooking(speaker)}
                  className="px-6 py-3 bg-[#0A1128] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-sm border border-[#0A1128]"
                >
                  Invite to Speak
                </button>
                <a
                  href={`https://wa.me/919876543210?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] text-xs font-semibold rounded-sm shadow-2xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] text-xs font-semibold rounded-sm shadow-2xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B8860B]" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B8860B]">
                Biography
              </span>
              <div className="flex-1 h-[1px] bg-[#E5E1D8]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-semibold">
              About {speaker.name}
            </h3>
            <div className="space-y-3 text-[#555C68] leading-relaxed font-normal text-sm sm:text-base">
              {speaker.fullBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B8860B]">
                Competencies
              </span>
              <div className="flex-1 h-[1px] bg-[#E5E1D8]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-semibold">
              Areas of Expertise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {speaker.speakingAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-sm bg-white border border-[#E5E1D8] flex items-start gap-3 hover:border-[#B8860B] transition-colors shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1A1A1A]">{area}</h4>
                    <p className="text-xs text-[#6F7785] mt-0.5 font-normal">
                      Distilled from real operational responsibility and command rigor.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaking Topics */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B8860B]">
                Curated Keynotes
              </span>
              <div className="flex-1 h-[1px] bg-[#E5E1D8]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-semibold">
                Speaking Topics
              </h3>
              <p className="text-sm text-[#6F7785] mt-1 font-normal">
                Tailored keynote presentations, leadership masterclasses, and executive dialogues.
              </p>
            </div>

            <div className="space-y-4">
              {speaker.speakingTopics.map((topic) => (
                <div
                  key={topic.id}
                  className="p-5 sm:p-6 rounded-sm bg-white border border-[#E5E1D8] hover:border-[#B8860B] transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 shadow-2xs"
                >
                  <div className="flex items-center sm:items-start">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#B8860B] tracking-wider w-14">
                      {topic.number}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h4 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-semibold">
                      {topic.title}
                    </h4>
                    <p className="text-sm text-[#555C68] leading-relaxed font-normal">
                      {topic.description}
                    </p>

                    {topic.keyTakeaways && (
                      <div className="pt-3 border-t border-[#E5E1D8] mt-3">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-[#B8860B] block mb-1.5">
                          Key Takeaways
                        </span>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-[#2D3139]">
                          {topic.keyTakeaways.map((takeaway, tIdx) => (
                            <li key={tIdx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#B8860B]" />
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* End CTA: Invite [Speaker Name] to Speak */}
          <div className="rounded-sm bg-white border border-[#E5E1D8] p-8 sm:p-10 text-center space-y-6 shadow-[0_4px_24px_-4px_rgba(26,26,26,0.06)]">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#B8860B] block">
              Engagement & Availability
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-semibold">
              Invite {speaker.name} to Speak
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#555C68] max-w-2xl mx-auto font-normal">
              Available for corporate annual offsites, leadership conventions, global summits, university convocations, and executive advisory sessions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                id="modal-cta-whatsapp"
                href={`https://wa.me/919876543210?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                id="modal-cta-call"
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-white hover:bg-[#F6F3EC] border border-[#E5E1D8] hover:border-[#B8860B] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span>Call Now</span>
              </a>

              <button
                id="modal-cta-enquire"
                onClick={() => onSelectSpeakerForBooking(speaker)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#0A1128] hover:bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm border border-[#0A1128]"
              >
                <Calendar className="w-4 h-4" />
                <span>Send Enquiry Form</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
