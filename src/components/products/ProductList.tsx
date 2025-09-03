import React, { useState } from 'react';
import { PencilIcon, TrashIcon, PlusIcon, EyeIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Search, Download, Upload, RefreshCw, ArrowUpDown } from 'lucide-react';
import AddProductModal from '../modals/AddProductModal';
import EditProductModal from '../modals/EditProductModal';
import Pagination from '../ui/Pagination';

// Enhanced product data with images and additional fields
const enhancedProducts = [
  {
    id: 'PT001',
    sku: 'PT001',
    name: 'Lenovo 3rd Generation',
    category: 'Laptop',
    brand: 'Lenovo',
    price: 12500.00,
    unit: 'Pc',
    qty: 100,
    createdBy: 'Arroon',
    createdByAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '💻',
    status: 'In Stock'
  },
  {
    id: 'PT002',
    sku: 'PT002',
    name: 'Bold V3.2',
    category: 'Electronics',
    brand: 'Bolt',
    price: 1600.00,
    unit: 'Pc',
    qty: 140,
    createdBy: 'Kenneth',
    createdByAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '🎧',
    status: 'In Stock'
  },
  {
    id: 'PT003',
    sku: 'PT003',
    name: 'Nike Jordan',
    category: 'Shoe',
    brand: 'Nike',
    price: 6000.00,
    unit: 'Pc',
    qty: 780,
    createdBy: 'Gooch',
    createdByAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '👟',
    status: 'In Stock'
  },
  {
    id: 'PT004',
    sku: 'PT004',
    name: 'Apple Series 5 Watch',
    category: 'Electronics',
    brand: 'Apple',
    price: 25000.00,
    unit: 'Pc',
    qty: 450,
    createdBy: 'Nathan',
    createdByAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '⌚',
    status: 'In Stock'
  },
  {
    id: 'PT005',
    sku: 'PT005',
    name: 'Amazon Echo Dot',
    category: 'Speaker',
    brand: 'Amazon',
    price: 1600.00,
    unit: 'Pc',
    qty: 477,
    createdBy: 'Alice',
    createdByAvatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '🔊',
    status: 'In Stock'
  },
  {
    id: 'PT006',
    sku: 'PT006',
    name: 'Lobar Handy',
    category: 'Furnitures',
    brand: 'Woodmart',
    price: 4521.00,
    unit: 'Kg',
    qty: 145,
    createdBy: 'Robb',
    createdByAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '🪑',
    status: 'In Stock'
  },
  {
    id: 'PT007',
    sku: 'PT007',
    name: 'Red Premium Handy',
    category: 'Bags',
    brand: 'Versace',
    price: 2024.00,
    unit: 'Kg',
    qty: 747,
    createdBy: 'Steven',
    createdByAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50',
    image: '👜',
    status: 'In Stock'
  }
];

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productFilter, setProductFilter] = useState('all');
  const [createdByFilter, setCreatedByFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [brandFilter, setBrandFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price_high_to_low');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Show 7 items per page to match the table in the image

  const filteredProducts = enhancedProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProductFilter = productFilter === 'all' || 
                               product.category.toLowerCase() === productFilter.toLowerCase();
    const matchesCreatedByFilter = createdByFilter === 'all' || 
                                 product.createdBy.toLowerCase() === createdByFilter.toLowerCase();
    const matchesCategoryFilter = categoryFilter === 'all' || 
                                product.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesBrandFilter = brandFilter === 'all' || 
                             product.brand.toLowerCase() === brandFilter.toLowerCase();
    
    return matchesSearch && matchesProductFilter && matchesCreatedByFilter && 
           matchesCategoryFilter && matchesBrandFilter;
  });
  
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    // Sort based on selected option
    switch (sortBy) {
      case 'price_high_to_low':
        return b.price - a.price;
      case 'price_low_to_high':
        return a.price - b.price;
      case 'quantity':
        return b.qty - a.qty;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return b.price - a.price; // Default to price high to low
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  
  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, productFilter, createdByFilter, categoryFilter, brandFilter, sortBy]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Product List</h2>
          <p className="text-gray-600">Manage your products</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Export buttons */}
          <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            <span className="text-xs font-bold">PDF</span>
          </button>
          <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <span className="text-xs font-bold">XLS</span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
            <RefreshCw className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowUpDown className="w-5 h-5" />
          </button>
          
          {/* Action buttons */}
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            <PlusIcon className="w-5 h-5" />
            Add New Product
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium">
            <Download className="w-5 h-5" />
            Import Product
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <select 
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[120px]"
            >
              <option value="all">Product</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={createdByFilter}
              onChange={(e) => setCreatedByFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[120px]"
            >
              <option value="all">Created By</option>
              <option value="arroon">Arroon</option>
              <option value="kenneth">Kenneth</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[120px]"
            >
              <option value="all">Category</option>
              <option value="laptop">Laptop</option>
              <option value="electronics">Electronics</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[120px]"
            >
              <option value="all">Brand</option>
              <option value="lenovo">Lenovo</option>
              <option value="apple">Apple</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-w-[160px]"
            >
              <option value="price_high_to_low">Sort By: Price (High to Low)</option>
              <option value="price_low_to_high">Sort By: Price (Low to High)</option>
              <option value="quantity">Sort By: Quantity</option>
              <option value="name">Sort By: Name</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    SKU
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Product
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Category
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Brand
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Price
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Unit
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Qty
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Created By
                    <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </div>
                </th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    {product.sku}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-lg cursor-pointer"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsEditModalOpen(true);
                        }}
                      >
                        {product.image}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.brand}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    ₦{product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.unit}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {product.qty}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={product.createdByAvatar}
                        alt={product.createdBy}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-sm text-gray-900">{product.createdBy}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsEditModalOpen(true);
                        }}
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          totalItems={sortedProducts.length}
        />
      </div>

      {/* Add Product Modal */}
      <AddProductModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

      {/* Edit Product Modal */}
      {selectedProduct && (
        <EditProductModal 
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          product={selectedProduct}
        />
      )}

      {sortedProducts.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}