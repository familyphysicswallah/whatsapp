import { WhatsAppGroup } from '../types/WhatsAppGroup';

export const mockGroups: WhatsAppGroup[] = [
  {
    id: '1',
    name: 'Football Fans Club',
    link: 'https://chat.whatsapp.com/example1',
    country: 'Global',
    language: 'English',
    category: 'Sports',
    members: 245,
    addedAt: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    description: 'Join fellow football enthusiasts to discuss matches, players, and more!'
  },
  {
    id: '2',
    name: 'Tech Geeks',
    link: 'https://chat.whatsapp.com/example2',
    country: 'United States',
    language: 'English',
    category: 'Technology',
    members: 189,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    description: 'For all tech enthusiasts to share news, gadgets, and tech tips'
  },
  {
    id: '3',
    name: 'Anime Lovers',
    link: 'https://chat.whatsapp.com/example3',
    country: 'Japan',
    language: 'Japanese/English',
    category: 'Entertainment',
    members: 328,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    description: 'Discuss your favorite anime series, movies and manga!'
  },
  {
    id: '4',
    name: 'Travel Buddies',
    link: 'https://chat.whatsapp.com/example4',
    country: 'Global',
    language: 'English',
    category: 'Travel',
    members: 156,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    description: 'Find travel partners and share your travel experiences around the world'
  },
  {
    id: '5',
    name: 'Business Networking',
    link: 'https://chat.whatsapp.com/example5',
    country: 'Global',
    language: 'English',
    category: 'Business',
    members: 205,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    description: 'Connect with professionals for business opportunities and networking'
  },
  {
    id: '6',
    name: 'Meme Sharing',
    link: 'https://chat.whatsapp.com/example6',
    country: 'Global',
    language: 'English',
    category: 'Fun',
    members: 412,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    description: 'Share and laugh at the latest memes'
  },
  {
    id: '7',
    name: 'Study Group',
    link: 'https://chat.whatsapp.com/example7',
    country: 'United Kingdom',
    language: 'English',
    category: 'Education',
    members: 134,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    description: 'A group for students to help each other with studies and assignments'
  },
  {
    id: '8',
    name: 'Adults Only',
    link: 'https://chat.whatsapp.com/example8',
    country: 'Global',
    language: 'English',
    category: '18+',
    members: 267,
    addedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
    description: 'Adult content sharing and discussions. 18+ only!'
  }
];