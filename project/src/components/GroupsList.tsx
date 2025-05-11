import React, { useState } from 'react';
import WhatsAppGroupCard from './WhatsAppGroupCard';
import { WhatsAppGroup } from '../types/WhatsAppGroup';
import { Search, Filter, Globe, Languages } from 'lucide-react';

interface GroupsListProps {
  groups: WhatsAppGroup[];
}

export default function GroupsList({ groups }: GroupsListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WhatsAppGroup['category'] | 'All'>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  
  const categories: (WhatsAppGroup['category'] | 'All')[] = [
    'All', 'Fun', 'Entertainment', 'Education', 'Sports', 
    'Technology', 'Business', 'Travel', '18+'
  ];

  const regions = ['All', ...new Set(groups.map(group => group.country))];
  const languages = ['All', ...new Set(groups.map(group => group.language))];
  
  const sortedGroups = [...groups].sort((a, b) => {
    if (a.members && b.members) {
      return b.members - a.members;
    }
    return b.addedAt.getTime() - a.addedAt.getTime();
  });
  
  const filteredGroups = sortedGroups
    .filter(group => 
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(group => selectedCategory === 'All' ? true : group.category === selectedCategory)
    .filter(group => selectedRegion === 'All' ? true : group.country === selectedRegion)
    .filter(group => selectedLanguage === 'All' ? true : group.language === selectedLanguage);

  return (
    <div className="w-full">
      <div className="mb-6 space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition duration-150 ease-in-out"
            placeholder="Search groups..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter size={18} className="text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition duration-150 ease-in-out appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as WhatsAppGroup['category'] | 'All')}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe size={18} className="text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition duration-150 ease-in-out appearance-none"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Languages size={18} className="text-gray-400" />
            </div>
            <select
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition duration-150 ease-in-out appearance-none"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {filteredGroups.length > 0 ? (
        <div className="space-y-4">
          {filteredGroups.map(group => (
            <WhatsAppGroupCard key={group.id} group={group} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <h3 className="text-lg font-medium text-gray-600">No groups found</h3>
          <p className="text-gray-500 mt-2">Try changing your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}