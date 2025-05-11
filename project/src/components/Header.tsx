import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={`w-10 h-10 bg-[#049d7f] rounded-full flex items-center justify-center ${
              scrolled ? 'scale-90' : 'scale-100'
            } transition-transform duration-300`}>
              <MessageSquare className="text-white" size={24} />
            </div>
            <h1 className={`text-lg font-bold ml-2 ${
              scrolled ? 'text-gray-900' : 'text-gray-800'
            }`}>WhatsApp Groups</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className={`font-medium transition-colors duration-200 ${
              scrolled ? 'text-gray-700 hover:text-[#049d7f]' : 'text-gray-800 hover:text-gray-600'
            }`}>Home</a>
            <a href="#" className={`font-medium transition-colors duration-200 ${
              scrolled ? 'text-gray-700 hover:text-[#049d7f]' : 'text-gray-800 hover:text-gray-600'
            }`}>Categories</a>
            <a href="#" className={`font-medium transition-colors duration-200 ${
              scrolled ? 'text-gray-700 hover:text-[#049d7f]' : 'text-gray-800 hover:text-gray-600'
            }`}>Popular</a>
            <a href="#" className={`font-medium transition-colors duration-200 ${
              scrolled ? 'text-gray-700 hover:text-[#049d7f]' : 'text-gray-800 hover:text-gray-600'
            }`}>Submit Group</a>
            <a href="#" className="bg-[#049d7f] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 flex items-center">
              <MessageSquare size={18} className="mr-2" />
              Join Now
            </a>
          </nav>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a href="#" className="font-medium text-gray-700 hover:text-[#049d7f] transition-colors duration-200">Home</a>
              <a href="#" className="font-medium text-gray-700 hover:text-[#049d7f] transition-colors duration-200">Categories</a>
              <a href="#" className="font-medium text-gray-700 hover:text-[#049d7f] transition-colors duration-200">Popular</a>
              <a href="#" className="font-medium text-gray-700 hover:text-[#049d7f] transition-colors duration-200">Submit Group</a>
              <a href="#" className="bg-[#049d7f] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 flex items-center w-fit">
                <MessageSquare size={18} className="mr-2" />
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}