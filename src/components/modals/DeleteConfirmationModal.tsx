import React from 'react';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
}

export default function DeleteConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm,
  itemName = 'this'
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-hidden">
          {/* Content */}
          <div className="p-6 text-center">
            {/* Trash Icon Circle */}
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Are you sure you want to delete {itemName}?
            </h3>
            
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-gray-50 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Yes Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}