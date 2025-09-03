import React, { useState, useEffect } from 'react';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Upload, Calendar } from 'lucide-react';

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any; // The product to edit
}

export default function EditProductModal({ isOpen, onClose, product }: EditProductModalProps) {
  const [activeTab, setActiveTab] = useState('warranties');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    store: '',
    warehouse: '',
    name: '',
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
    productType: '',
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

  // Initialize form data with product data when the component mounts or product changes
  useEffect(() => {
    if (product) {
      setFormData({
        store: product.store || '',
        warehouse: product.warehouse || '',
        name: product.name || '',
        slug: product.slug || '',
        sku: product.sku || '',
        sellingType: product.sellingType || '',
        category: product.category || '',
        subCategory: product.subCategory || '',
        brand: product.brand || '',
        unit: product.unit || '',
        barcodeSymbology: product.barcodeSymbology || '',
        itemCode: product.itemCode || '',
        description: product.description || '',
        productType: product.productType || '',
        quantity: product.qty?.toString() || '',
        price: product.price?.toString() || '',
        taxType: product.taxType || '',
        discountType: product.discountType || '',
        discountValue: product.discountValue || '',
        quantityAlert: product.quantityAlert || '',
        warranty: product.warranty || '',
        manufacturer: product.manufacturer || '',
        manufacturedDate: product.manufacturedDate || '',
        expiryDate: product.expiryDate || ''
      });

      // If product has images, set them
      if (product.images && Array.isArray(product.images)) {
        setUploadedImages(product.images);
      }
    }
  }, [product]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Here you would handle the form submission to update the product
    console.log('Updated product data:', formData);
    console.log('Updated images:', uploadedImages);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Edit Product</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-8">
            <form className="space-y-8">
              {/* Basic Info Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                    <span className="text-orange-600 text-sm">📋</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Basic Info</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <option value="">Select Store</option>
                        <option value="main">Main Store</option>
                        <option value="branch">Branch Store</option>
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
                        <option value="">Select Warehouse</option>
                        <option value="main">Main Warehouse</option>
                        <option value="secondary">Secondary Warehouse</option>
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
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Product Name"
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
                      placeholder="product-slug"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      SKU <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.sku}
                      onChange={(e) => handleInputChange('sku', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="SKU"
                    />
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
                        <option value="">Select Option</option>
                        <option value="retail">Retail</option>
                        <option value="wholesale">Wholesale</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="furniture">Furniture</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
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
                        <option value="">Select Sub Category</option>
                        <option value="laptops">Laptops</option>
                        <option value="smartphones">Smartphones</option>
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
                        <option value="">Select Brand</option>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="lenovo">Lenovo</option>
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
                        <option value="">Select Unit</option>
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
                        <option value="">Select Option</option>
                        <option value="code128">Code 128</option>
                        <option value="code39">Code 39</option>
                        <option value="ean13">EAN-13</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Item Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.itemCode}
                      onChange={(e) => handleInputChange('itemCode', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Item Code"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      placeholder="Product Description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.productType}
                        onChange={(e) => handleInputChange('productType', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white"
                      >
                        <option value="">Select Option</option>
                        <option value="standard">Standard</option>
                        <option value="digital">Digital</option>
                        <option value="service">Service</option>
                      </select>
                      <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
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
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}