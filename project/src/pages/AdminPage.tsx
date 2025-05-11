import React, { useState } from 'react';
import { WhatsAppGroup } from '../types/WhatsAppGroup';
import { Plus } from 'lucide-react';

export default function AdminPage() {
  const [formData, setFormData] = useState({
    name: '',
    link: '',
    country: '',
    language: '',
    category: 'Fun' as WhatsAppGroup['category'],
    members: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement group addition logic with Supabase
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center mr-3">
              <Plus className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Add New WhatsApp Group</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Group Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                required
              />
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700">WhatsApp Link</label>
              <input
                type="url"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Region</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                  required
                />
              </div>

              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                  required
                >
                  <option value="Fun">Fun</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Education">Education</option>
                  <option value="Sports">Sports</option>
                  <option value="Technology">Technology</option>
                  <option value="Business">Business</option>
                  <option value="Travel">Travel</option>
                  <option value="18+">18+</option>
                </select>
              </div>

              <div>
                <label htmlFor="members" className="block text-sm font-medium text-gray-700">Number of Members</label>
                <input
                  type="number"
                  id="members"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-[#25D366] focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center"
            >
              <Plus size={20} className="mr-2" />
              Add Group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}