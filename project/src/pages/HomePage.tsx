import React from 'react';
import GroupsList from '../components/GroupsList';
import { mockGroups } from '../data/mockGroups';
import { ArrowDown, MessageSquare } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Discover and Join the Best <span className="text-[#049d7f]">WhatsApp Groups</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find WhatsApp groups for any interest - Entertainment, Education, Sports, Business, 
              and more. Connect with people who share your passions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#groups" 
                className="bg-[#049d7f] hover:bg-[#128C7E] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Browse Groups
                <ArrowDown size={18} className="ml-2 animate-bounce" />
              </a>
              <a 
                href="#" 
                className="bg-white text-[#049d7f] border border-[#049d7f] hover:bg-gray-50 font-medium px-6 py-3 rounded-md transition-colors duration-300"
              >
                Submit Your Group
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            {['Fun', 'Education', 'Sports', 'Entertainment'].map((category) => (
              <a 
                key={category}
                href="#" 
                className="bg-white border border-gray-200 hover:border-[#049d7f] hover:shadow-md rounded-lg p-4 text-center transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <MessageSquare size={24} className="text-[#049d7f]" />
                </div>
                <h3 className="font-medium text-gray-900">{category}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section id="groups" className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Latest WhatsApp Groups</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of WhatsApp groups. Find your community and connect with people around the world.
            </p>
          </div>
          
          <GroupsList groups={mockGroups} />
        </div>
      </section>
      
      <section className="py-16 px-4 bg-[#049d7f]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Own a WhatsApp Group?</h2>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
              Submit your WhatsApp group to our directory and reach thousands of potential members!
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-[#049d7f] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Submit Your Group
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}