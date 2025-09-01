import React from 'react';
import {
  HomeIcon,
  CubeIcon,
  ChartBarIcon,
  UsersIcon,
  ShoppingBagIcon,
  CogIcon,
  TruckIcon,
  ExclamationTriangleIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import { ShoppingCart } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
  { id: 'products', label: 'Products', icon: CubeIcon },
  { id: 'categories', label: 'Categories', icon: TagIcon },
  { id: 'suppliers', label: 'Suppliers', icon: TruckIcon },
  { id: 'stock-alerts', label: 'Stock Alerts', icon: ExclamationTriangleIcon },
  { id: 'sales', label: 'Sales', icon: ChartBarIcon },
  { id: 'customers', label: 'Customers', icon: UsersIcon },
  { id: 'users', label: 'Users', icon: UsersIcon },
  { id: 'orders', label: 'Orders', icon: ShoppingBagIcon },
  { id: 'settings', label: 'Settings', icon: CogIcon },
];

export default function Sidebar({ isOpen, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className={`fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } w-64`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-200">
          <div className="p-2 bg-blue-600 rounded-xl">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Danalhaji Supermarket</h1>
            <p className="text-sm text-gray-500"></p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`sidebar-item w-full text-left ${isActive ? 'active' : ''}`}
              >
                <IconComponent className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">STONESY</p>
              <p className="text-xs text-gray-500">Store Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}