import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Category } from '../../types';

interface EditCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  onSave: (category: Category) => void;
}

export default function EditCategoryModal({ isOpen, onClose, category, onSave }: EditCategoryModalProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    slug: '',
    productCount: 0,
    icon: '📦',
    status: true
  });

  // Update form data when category changes
  useEffect(() => {
    if (category) {
      setFormData({
        id: category.id,
        name: category.name,
        slug: '', // This would come from the backend in a real app
        productCount: category.productCount,
        icon: category.icon,
        status: true // Assuming all categories are active by default
      });
    }
  }, [category]);

  if (!isOpen || !category) return null;

  const handleInputChange = (field: string, value: string | boolean | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert form data back to Category type
    const updatedCategory: Category = {
      id: formData.id,
      name: formData.name,
      productCount: formData.productCount,
      icon: formData.icon
    };
    onSave(updatedCategory);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Edit Category</h2>
            <button
              onClick={onClose}
              className="p-1 text-red-500 hover:text-red-700 transition-colors rounded-full bg-red-50"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <form onSubmit={handleSubmit}>
              {/* Category Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder=""
                  required
                />
              </div>

              {/* Category Slug */}
              <div className="mb-4">
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Category Slug <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder=""
                  required
                />
              </div>

              {/* Status */}
              <div className="mb-4 flex items-center justify-between">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status <span className="text-red-500">*</span>
                </label>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input 
                    type="checkbox" 
                    id="status"
                    checked={formData.status}
                    onChange={() => handleInputChange('status', !formData.status)}
                    className="sr-only"
                  />
                  <div className="w-10 h-6 bg-gray-200 rounded-full shadow-inner"></div>
                  <div className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out ${formData.status ? 'bg-blue-600 transform translate-x-4' : 'bg-white'}`}></div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-end gap-2 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}