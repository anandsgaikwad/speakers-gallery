export interface SpeakingTopic {
  id: string;
  number: string;
  title: string;
  description: string;
  keyTakeaways?: string[];
}

export interface Speaker {
  id: string;
  slug: string;
  name: string;
  rank: string;
  designation: string;
  service: string;
  shortBio: string;
  fullBio: string[];
  portraitUrl: string;
  speakingAreas: string[];
  speakingTopics: SpeakingTopic[];
  quote: string;
  experienceHighlight: string;
  primaryAreas: string[];
}

export type GalleryCategory = 'All' | 'Leadership' | 'Events' | 'Service' | 'Speaking';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Leadership' | 'Events' | 'Service' | 'Speaking';
  imageUrl: string;
  caption: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export interface ContactFormData {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  speakerPreference: string;
  eventRequirement: string;
  message?: string;
}
