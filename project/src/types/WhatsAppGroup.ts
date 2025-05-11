export interface WhatsAppGroup {
  id: string;
  name: string;
  link: string;
  country: string;
  language: string;
  category: 'Fun' | 'Entertainment' | 'Education' | 'Sports' | 'Technology' | 'Business' | 'Travel' | '18+' | 'Other';
  members?: number;
  addedAt: Date;
  description?: string;
}