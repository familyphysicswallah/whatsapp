import React from 'react';
import { formatRelativeTime } from '../utils/dateUtils';
import { WhatsAppGroup } from '../types/WhatsAppGroup';
import CategoryBadge from './CategoryBadge';
import { Users, MessageSquare } from 'lucide-react';

interface WhatsAppGroupCardProps {
  group: WhatsAppGroup;
}

export default function WhatsAppGroupCard({ group }: WhatsAppGroupCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-grow">
        <div className="w-12 h-12 bg-[#049d7f] rounded-full flex items-center justify-center flex-shrink-0">
          <MessageSquare className="text-white" size={24} />
        </div>
        
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{group.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <CategoryBadge category={group.category} />
            {group.members && (
              <div className="flex items-center text-sm text-gray-600">
                <Users size={14} className="mr-1" />
                <span>{group.members}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <a 
        href={group.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#049d7f] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 whitespace-nowrap"
      >
        Join Now
      </a>
    </div>
  );
}