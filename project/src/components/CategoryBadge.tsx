import React from 'react';
import { WhatsAppGroup } from '../types/WhatsAppGroup';

interface CategoryBadgeProps {
  category: WhatsAppGroup['category'];
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryStyles = (category: WhatsAppGroup['category']) => {
    switch (category) {
      case 'Fun':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Entertainment':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Education':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Sports':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'Technology':
        return 'bg-cyan-100 text-cyan-800 border-cyan-300';
      case 'Business':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'Travel':
        return 'bg-green-100 text-green-800 border-green-300';
      case '18+':
        return 'bg-pink-100 text-pink-800 border-pink-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <span 
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full inline-flex items-center 
      border ${getCategoryStyles(category)}`}
    >
      {category}
    </span>
  );
}