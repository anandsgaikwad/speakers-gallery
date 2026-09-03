import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle, Shield, Clock } from 'lucide-react';
import { Speaker, ContactFormData } from '../types';

interface ContactSectionProps {
  speakers: Speaker[];
  preselectedSpeakerId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  speakers,
  preselectedSpeakerId,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    speakerPreference: preselectedSpeakerId || 'both',
    eventRequirement: 'Keynote Address / Annual Summit',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselectedSpeakerId changes
  React.useEffect(() => {
    if (preselectedSpeakerId) {
      setFormData((prev) => ({ ...prev, speakerPreference: preselectedSpeakerId }));
    }
  }, [preselectedSpeakerId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous clean client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organisation: '',
      email: '',
      phone: '',
      speakerPreference: 'both',
      eventRequirement: 'Keynote Address / Annual Summit',
      message: '',
    });
  };

  const directWaMessage = encodeURIComponent(
    `Hello Speaker's Gallery Secretariat, I would like to enquire about speaker availability and keynote booking details for an upcoming corporate event.`
  );

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#FDFBF7] relative overflow-hidden"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0A1128]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E1D8] rounded-sm mb-4 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B8860B]">
              Speaker Bureau Secretariat
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-semibold mb-4 tracking-tight">
            Let’s Start a Conversation
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#555C68] font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Looking for an experienced leader to speak at your next event, conference or leadership program? Get in touch with us.
          </p>

          <div className="w-20 h-[1px] bg-[#B8860B] mx-auto" />
        </div>

        {/* Two Column Layout: Prominent Direct Actions on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Prominent Quick Actions & Desk Coordinates */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="p-6 sm:p-8 rounded-sm bg-white border border-[#E5E1D8] shadow-[0_4px_24px_-4px_rgba(26,26,26,0.06)] space-y-6">
              <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">
                Immediate Direct Access
              </h3>
              <p className="text-sm text-[#555C68] leading-relaxed">
                Connect directly with our coordination secretariat for real-time calendar availability, honorarium information, and keynote briefing notes.
              </p>

              {/* WhatsApp Prominent Card */}
              <a
                id="contact-action-whatsapp"
                href={`https://wa.me/919876543210?text=${directWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-sm bg-[#F6F3EC] hover:bg-white border border-[#E5E1D8] hover:border-[#25D366] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#25D366] block">
                      Instant WhatsApp
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#1A1A1A] group-hover:text-[#0A1128]">
                      +91 98765 43210
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#555C68] group-hover:text-[#1A1A1A] uppercase tracking-wider">
                  Chat Now →
                </span>
              </a>

              {/* Call Now Prominent Card */}
              <a
                id="contact-action-call"
                href="tel:+919876543210"
                className="group flex items-center justify-between p-4 rounded-sm bg-[#F6F3EC] hover:bg-white border border-[#E5E1D8] hover:border-[#B8860B] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#B8860B] block">
                      Coordination Desk
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#1A1A1A] group-hover:text-[#0A1128]">
                      +91 (0) 98765 43210
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#555C68] group-hover:text-[#1A1A1A] uppercase tracking-wider">
                  Call Now →
                </span>
              </a>

              {/* Email & Location coordinates */}
              <div className="pt-4 border-t border-[#E5E1D8] space-y-3 text-xs text-[#555C68]">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B8860B]" />
                  <span>secretariat@speakersgallery.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#B8860B]" />
                  <span>Executive Bureau, New Delhi, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#B8860B]" />
                  <span>Response time: Under 4 business hours</span>
                </div>
              </div>

            </div>

            {/* Credibility Guarantee Notice */}
            <div className="p-5 rounded-sm bg-white border border-[#E5E1D8] flex items-start gap-3 shadow-2xs">
              <Shield className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  Confidential Corporate Protocol
                </h4>
                <p className="text-xs text-[#555C68] mt-1 leading-relaxed font-normal">
                  All institutional dialogues, event inquiries, and honorarium deliberations are managed with the highest standards of discretion and professional courtesy.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-sm border border-[#E5E1D8] shadow-[0_4px_24px_-4px_rgba(26,26,26,0.06)] relative text-left">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 border border-[#B8860B] flex items-center justify-center text-[#B8860B] mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#B8860B] block mb-2">
                      Enquiry Received
                    </span>
                    <h3 className="font-serif text-3xl text-[#1A1A1A] font-semibold mb-3">
                      Thank You for Reaching Out
                    </h3>
                    <p className="font-sans text-sm text-[#555C68] max-w-md mx-auto leading-relaxed">
                      Your event enquiry has been logged with our speaker bureau secretariat. A representative will contact you within 4 business hours to discuss calendar dates and keynote coordination.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-sm bg-white hover:bg-[#F6F3EC] border border-[#E5E1D8] text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=${directWaMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-sm bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Follow up on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-[#E5E1D8] pb-4">
                    <h3 className="font-serif text-2xl text-[#1A1A1A] font-semibold">
                      Event & Keynote Enquiry
                    </h3>
                    <p className="text-xs text-[#6F7785] mt-1 font-normal">
                      Please provide preliminary details regarding your organization and requested dates.
                    </p>
                  </div>

                  {/* Name & Organisation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                        Full Name <span className="text-[#B8860B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] placeholder-[#8C94A2] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-organisation" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                        Organisation / Institution <span className="text-[#B8860B]">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-organisation"
                        name="organisation"
                        required
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="e.g. Tata Consultancy / IIM"
                        className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] placeholder-[#8C94A2] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                        Work Email <span className="text-[#B8860B]">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] placeholder-[#8C94A2] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                        Phone Number <span className="text-[#B8860B]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 00000"
                        className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] placeholder-[#8C94A2] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Speaker Preference & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="form-speaker-pref" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                        Preferred Speaker
                      </label>
                      <select
                        id="form-speaker-pref"
                        name="speakerPreference"
                        value={formData.speakerPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all"
                      >
                        <option value="both">Both / Advice Needed</option>
                        {speakers.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} ({s.rank})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="form-requirement" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                        Event / Requirement <span className="text-[#B8860B]">*</span>
                      </label>
                      <select
                        id="form-requirement"
                        name="eventRequirement"
                        value={formData.eventRequirement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all"
                      >
                        <option value="Keynote Address / Annual Summit">Keynote Address / Annual Summit</option>
                        <option value="Executive Leadership Retreat">Executive Leadership Retreat</option>
                        <option value="Boardroom Advisory Briefing">Boardroom Advisory Briefing</option>
                        <option value="Crisis Management Masterclass">Crisis Management Masterclass</option>
                        <option value="University / Institution Convocation">University / Institution Convocation</option>
                        <option value="Other Bespoke Engagement">Other Bespoke Engagement</option>
                      </select>
                    </div>
                  </div>

                  {/* Message & Event Dates */}
                  <div>
                    <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-[#2D3139] mb-2">
                      Event Details, Tentative Dates & Location
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention expected audience size, tentative event dates, location, and key themes..."
                      className="w-full px-4 py-3 rounded-sm bg-[#F6F3EC] border border-[#E5E1D8] text-[#1A1A1A] placeholder-[#8C94A2] text-sm focus:outline-none focus:border-[#B8860B] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-sm bg-[#0A1128] hover:bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#6F7785]">
                    By sending this enquiry, you agree to direct communication from the Speaker’s Gallery secretariat regarding your event.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
