import React from 'react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { mockCategories } from '../../data/mockData';

export default function CategoryGrid() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Product Categories</h2>
          <p className="text-gray-600">Organize your products into categories</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <PlusIcon className="w-5 h-5" />
          Add Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <div key={category.id} className="card hover:shadow-lg transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{category.icon}</div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.productCount} products</p>
            
            <div className="flex items-center justify-between">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((category.productCount / 300) * 100, 100)}%` }}
                ></div>
              </div>
              <span className="ml-3 text-sm text-gray-500 whitespace-nowrap">
                {Math.round((category.productCount / 300) * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="card bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <PlusIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">Quick Add</h3>
              <p className="text-sm text-blue-700">Create new category</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-gradient-to-r from-green-50 to-green-100 border-green-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-600 rounded-lg">
              <PencilIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-green-900">Bulk Edit</h3>
              <p className="text-sm text-green-700">Edit multiple categories</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-600 rounded-lg">
              <TrashIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-purple-900">Archive</h3>
              <p className="text-sm text-purple-700">Remove unused categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}