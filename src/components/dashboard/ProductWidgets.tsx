import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const topSellingProducts = [
  {
    id: '1',
    name: 'Charger Cable - Lighting',
    price: '₦187',
    sales: '247+ Sales',
    percentage: '25%',
    image: 'https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Yves Saint Eau De Parfum',
    price: '₦145',
    sales: '289+ Sales',
    percentage: '25%',
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Apple Airpods 2',
    price: '₦458',
    sales: '300+ Sales',
    percentage: '25%',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    name: 'Vacuum Cleaner',
    price: '₦139',
    sales: '225+ Sales',
    percentage: '21%',
    isNegative: true,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '5',
    name: 'Samsung Galaxy S21 Fe 5g',
    price: '₦898',
    sales: '365+ Sales',
    percentage: '25%',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const lowStockProducts = [
  {
    id: '1',
    name: 'Dell XPS 13',
    productId: '#665814',
    stock: '08',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Vacuum Cleaner Robot',
    productId: '#940004',
    stock: '14',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'KitchenAid Stand Mixer',
    productId: '#325569',
    stock: '21',
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    name: "Levi's Trucker Jacket",
    productId: '#124588',
    stock: '12',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '5',
    name: "Lay's Classic",
    productId: '#365586',
    stock: '10',
    image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const recentSales = [
  {
    id: '1',
    name: 'Apple Watch Series 9',
    category: 'Electronics',
    price: '₦640',
    date: 'Today',
    status: 'Processing',
    statusColor: 'bg-purple-100 text-purple-800',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    name: 'Gold Bracelet',
    category: 'Fashion',
    price: '₦126',
    date: 'Today',
    status: 'Cancelled',
    statusColor: 'bg-red-100 text-red-800',
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    name: 'Parachute Down Duvet',
    category: 'Health',
    price: '₦69',
    date: '15 Jan 2025',
    status: 'Onhold',
    statusColor: 'bg-cyan-100 text-cyan-800',
    image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    name: 'YETI Rambler Tumbler',
    category: 'Sports',
    price: '₦65',
    date: '12 Jan 2025',
    status: 'Processing',
    statusColor: 'bg-purple-100 text-purple-800',
    image: 'https://images.pexels.com/photos/2842876/pexels-photo-2842876.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '5',
    name: 'Osmo Genius Starter Kit',
    category: 'Lifestyles',
    price: '₦87.56',
    date: '11 Jan 2025',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-800',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export default function ProductWidgets() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Selling Products */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Top Selling Products</h3>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option>Today</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-4">
          {topSellingProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{product.price}</span>
                  <span>•</span>
                  <span>{product.sales}</span>
                </div>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                product.isNegative 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-green-100 text-green-600'
              }`}>
                {product.isNegative ? '↓' : '↑'} {product.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Low Stock Products */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Low Stock Products</h3>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {lowStockProducts.map((product) => (
            <div key={product.id} className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                <p className="text-sm text-gray-600">ID : {product.productId}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Instock</p>
                <p className="text-lg font-bold text-red-600">{product.stock}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
          </div>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option>Weekly</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div className="space-y-4">
          {recentSales.map((sale) => (
            <div key={sale.id} className="flex items-center gap-3">
              <img
                src={sale.image}
                alt={sale.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{sale.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{sale.category}</span>
                  <span>•</span>
                  <span>{sale.price}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">{sale.date}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${sale.statusColor}`}>
                  {sale.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}