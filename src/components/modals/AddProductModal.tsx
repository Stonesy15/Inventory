import React, { useState } from 'react';
import { XMarkIcon, ChevronDownIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Upload, Calendar } from 'lucide-react';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const [formData, setFormData] = useState({
    store: '',
    warehouse: '',
    productName: '',
    slug: '',
    sku: '',
    sellingType: '',
    category: '',
    subCategory: '',
    brand: '',
    unit: '',
    barcodeSymbology: '',
    itemCode: '',
    description: '',
    productType: 'single',
    quantity: '',
    price: '',
    taxType: '',
    discountType: '',
    discountValue: '',
    quantityAlert: '',
    warranty: '',
    manufacturer: '',
    manufacturedDate: '',
    expiryDate: ''
  });

  const [uploadedImages, setUploadedImages] = useState<string[]>([
  
  ]);

  const [activeTab, setActiveTab] = useState('warranties');

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Create Product</h2>
              <p className="text-sm text-gray-500">Create new product</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
              >
                Back to Product
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              {/* Product Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 text-sm">📦</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Product Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Store <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.store}
                        onChange={(e) => handleInputChange('store', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="main-store">Main Store</option>
                        <option value="branch-1">Branch 1</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Warehouse <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.warehouse}
                        onChange={(e) => handleInputChange('warehouse', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="warehouse-a">Warehouse A</option>
                        <option value="warehouse-b">Warehouse B</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.productName}
                      onChange={(e) => handleInputChange('productName', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter product name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => handleInputChange('slug', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Enter slug"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SKU <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.sku}
                        onChange={(e) => handleInputChange('sku', e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter SKU"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                      >
                        Generate
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Selling Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.sellingType}
                        onChange={(e) => handleInputChange('sellingType', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="retail">Retail</option>
                        <option value="wholesale">Wholesale</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <select
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                        >
                          <option value="">Choose</option>
                          <option value="electronics">Electronics</option>
                          <option value="clothing">Clothing</option>
                        </select>
                        <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                      <button
                        type="button"
                        className="px-3 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors text-sm"
                      >
                        + Add New
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sub Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.subCategory}
                        onChange={(e) => handleInputChange('subCategory', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="laptops">Laptops</option>
                        <option value="phones">Phones</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Brand <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.brand}
                        onChange={(e) => handleInputChange('brand', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unit <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.unit}
                        onChange={(e) => handleInputChange('unit', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="pc">Pc</option>
                        <option value="kg">Kg</option>
                        <option value="liter">Liter</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Barcode Symbology <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.barcodeSymbology}
                        onChange={(e) => handleInputChange('barcodeSymbology', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="code128">Code 128</option>
                        <option value="ean13">EAN-13</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Item Code <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.itemCode}
                        onChange={(e) => handleInputChange('itemCode', e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="Enter item code"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <div className="border border-gray-300 rounded-lg">
                    <div className="flex items-center gap-2 p-3 border-b border-gray-200 bg-gray-50">
                      <select className="text-sm border-none bg-transparent outline-none">
                        <option>Normal</option>
                      </select>
                      <select className="text-sm border-none bg-transparent outline-none">
                        <option>Sans Serif</option>
                      </select>
                      <div className="flex items-center gap-1 ml-2">
                        <button type="button" className="p-1 hover:bg-gray-200 rounded">
                          <strong>B</strong>
                        </button>
                        <button type="button" className="p-1 hover:bg-gray-200 rounded">
                          <em>I</em>
                        </button>
                        <button type="button" className="p-1 hover:bg-gray-200 rounded">
                          <u>U</u>
                        </button>
                      </div>
                    </div>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="w-full p-4 border-none outline-none resize-none"
                      rows={4}
                      placeholder="Enter product description..."
                    />
                    <div className="p-2 text-xs text-gray-500 border-t border-gray-200">
                      Maximum 60 Words
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & Stocks Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 text-sm">💰</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Pricing & Stocks</h3>
                </div>

                {/* Product Type Radio Buttons */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="productType"
                        value="single"
                        checked={formData.productType === 'single'}
                        onChange={(e) => handleInputChange('productType', e.target.value)}
                        className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">Single Product</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="productType"
                        value="variable"
                        checked={formData.productType === 'variable'}
                        onChange={(e) => handleInputChange('productType', e.target.value)}
                        className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">Variable Product</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tax Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.taxType}
                        onChange={(e) => handleInputChange('taxType', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Select Option</option>
                        <option value="inclusive">Tax Inclusive</option>
                        <option value="exclusive">Tax Exclusive</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.discountType}
                        onChange={(e) => handleInputChange('discountType', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed Amount</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Value <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.discountValue}
                      onChange={(e) => handleInputChange('discountValue', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Alert <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={formData.quantityAlert}
                      onChange={(e) => handleInputChange('quantityAlert', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 text-sm">🖼️</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Images</h3>
                </div>

                <div className="flex gap-4">
                  {/* Upload Area */}
                  <div className="flex-1">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">Add Images</p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Choose files or drag and drop
                      </label>
                    </div>
                  </div>

                  {/* Uploaded Images */}
                  <div className="flex gap-3">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <XMarkIcon className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Fields Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 text-sm">⚙️</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Custom Fields</h3>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit">
                  <button
                    type="button"
                    onClick={() => setActiveTab('warranties')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'warranties'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Warranties
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('manufacturer')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'manufacturer'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Manufacturer
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('expiry')}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === 'expiry'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Expiry
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Warranty <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.warranty}
                        onChange={(e) => handleInputChange('warranty', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="1-year">1 Year</option>
                        <option value="2-year">2 Years</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Manufacturer <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.manufacturer}
                        onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Choose</option>
                        <option value="apple">Apple Inc.</option>
                        <option value="samsung">Samsung</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Manufactured Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.manufacturedDate}
                        onChange={(e) => handleInputChange('manufacturedDate', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="27/08/2025"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="md:col-start-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry On <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        placeholder="27/08/2025"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}