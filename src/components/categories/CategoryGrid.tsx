import React, { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon, ArrowPathIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { mockCategories } from '../../data/mockData';
import AddCategoryModal from '../modals/AddCategoryModal';
import EditCategoryModal from '../modals/EditCategoryModal';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import { Category } from '../../types';

export default function CategoryGrid() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Category</h2>
          <p className="text-gray-600">Manage your categories</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors bg-white rounded-md border border-gray-200">
            <ArrowPathIcon className="w-5 h-5" />
          </button>
          <button 
            className="btn-primary flex items-center gap-2"
            onClick={() => setIsAddModalOpen(true)}
          >
            <PlusIcon className="w-5 h-5" />
            Add Category
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <select className="appearance-none bg-white border border-gray-200 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <ChevronUpDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="relative w-full sm:w-auto">
            <select className="appearance-none bg-white border border-gray-200 rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort By : Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
            <ChevronUpDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">Category <ChevronUpDownIcon className="w-4 h-4" /></div>
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">Category Slug <ChevronUpDownIcon className="w-4 h-4" /></div>
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-1">Created On <ChevronUpDownIcon className="w-4 h-4" /></div>
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-4 whitespace-nowrap text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockCategories.map((category, index) => {
              // Mock data for the table view
              const createdDates = [
                '25 May 2023',
                '24 Jun 2023',
                '23 Jul 2023',
                '22 Aug 2023',
                '21 Sep 2023',
                '20 Sep 2023'
              ];
              const slugs = [
                'laptop',
                'electronics',
                'shoe',
                'speaker',
                'furniture',
                'bags'
              ];
              
              return (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{slugs[index]}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{createdDates[index]}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <button 
                        className="text-blue-600 hover:text-blue-900"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsEditModalOpen(true);
                        }}
                      >
                        <PencilIcon className="w-5 h-5" />
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDeleteModalOpen(true);
                        }}
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
              <span className="font-medium">6</span> results
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      <AddCategoryModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
      />
      
      {/* Edit Category Modal */}
      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        category={selectedCategory}
        onSave={(updatedCategory) => {
          console.log('Category updated:', updatedCategory);
          // In a real app, you would update the category in your state or backend
          setIsEditModalOpen(false);
        }}
      />
      
      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          console.log('Category deleted:', selectedCategory?.id);
          // In a real app, you would delete the category from your state or backend
          setIsDeleteModalOpen(false);
        }}
        itemName="this category"
      />
    </div>
  );
}