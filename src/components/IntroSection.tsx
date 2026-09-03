import React from 'react';
import { Compass, Target, Sparkles, Quote } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const valueBlocks = [
    {
      id: 'value-leadership',
      title: 'Leadership',
      subtitle: 'Principled Command',
      icon: Compass,
      description:
        'Cultivated in crucible environments where character is tested and compromises are fatal. Our speakers impart the fundamentals of moral courage, authentic authority, and taking absolute accountability for collective outcomes.',
      highlights: ['Command accountability', 'Unflinching moral integrity', 'Leading by frontline example']
    },
    {
      id: 'value-perspective',
      title: 'Perspective',
      subtitle: 'Strategic Foresight',
      icon: Target,
      description:
        'Shaped by decades of high-consequence decision-making under uncertainty. Gain rare clarity on long-range risk assessment, systemic operational resilience, and the cognitive agility needed to navigate volatile horizons.',
      highlights: ['Clarity amidst ambiguity', 'Strategic horizon scanning', 'Calculated risk governance']
    },
    {
      id: 'value-impact',
      title: 'Impact',
      subtitle: 'Enduring Transformation',
      icon: Sparkles,
      description:
        'Far beyond standard keynote platitudes, these addresses challenge thinking and ignite institutional resolve. Audiences depart with actionable mental models and a renewed commitment to mission-driven execution.',
      highlights: ['Behavioral alignment', 'Institutional morale boost', 'Practical action frameworks']
    }
  ];

  return (
    <section
      id="intro"
      className="py-24 lg:py-32 bg-[#F6F3EC] border-y border-[#E5E1D8] relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0A1128]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B8860B] block mb-3">
            Why Speaker’s Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-semibold mb-6 leading-tight">
            Experience Worth Listening To
          </h2>
          <div className="w-16 h-[2px] bg-[#B8860B] mx-auto mb-6" />
          <p className="font-sans text-base sm:text-lg text-[#555C68] leading-relaxed font-normal">
            Speaker’s Gallery brings together accomplished leaders whose careers have been defined by responsibility, resilience and leadership, offering valuable perspectives to organisations, institutions and audiences.
          </p>
        </div>

        {/* Three Value Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {valueBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.id}
                id={`intro-block-${block.id}`}
                className="group relative bg-white rounded-sm p-8 border border-[#E5E1D8] hover:border-[#B8860B] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(26,26,26,0.05)] hover:shadow-xl"
              >
                {/* Subtle gold line on top */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-[#B8860B] transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#FDFBF7] border border-[#E5E1D8] flex items-center justify-center text-[#B8860B] mb-6 group-hover:border-[#B8860B]/60 transition-colors">
                    <Icon className="w-6 h-6 text-[#B8860B]" strokeWidth={1.5} />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#B8860B] block mb-1">
                    {block.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-4">
                    {block.title}
                  </h3>

                  <p className="font-sans text-sm text-[#555C68] leading-relaxed mb-6 font-normal">
                    {block.description}
                  </p>
                </div>

                {/* Sub-highlights */}
                <div className="pt-4 border-t border-[#E5E1D8] space-y-2">
                  {block.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-[#2D3139] gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Executive Pullquote */}
        <div className="max-w-4xl mx-auto rounded-sm bg-white p-8 sm:p-10 border border-[#E5E1D8] shadow-[0_4px_24px_-4px_rgba(26,26,26,0.06)] relative">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-[#B8860B]/20 pointer-events-none" />
          <div className="relative z-10 text-center">
            <p className="font-serif italic text-lg sm:text-xl text-[#1A1A1A] leading-relaxed mb-4">
              “When corporate enterprises face unprecedented market volatility, the time-tested doctrines of command composure, decentralised initiative, and steadfast resilience become the ultimate differentiator.”
            </p>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#B8860B] font-semibold">
              The Speaker’s Gallery Ethos
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
