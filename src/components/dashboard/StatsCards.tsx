import React from 'react';
import { CubeIcon, ShoppingBagIcon, UsersIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stats = [
  {
    title: 'Total Products',
    value: '2,847',
    change: '+12%',
    changeType: 'increase',
    icon: CubeIcon,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Daily Sales',
    value: '₦24,890',
    change: '+8.2%',
    changeType: 'increase',
    icon: CurrencyDollarIcon,
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Orders Today',
    value: '1,247',
    change: '+15%',
    changeType: 'increase',
    icon: ShoppingBagIcon,
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Low Stock Items',
    value: '23',
    change: '-5%',
    changeType: 'decrease',
    icon: UsersIcon,
    gradient: 'from-orange-500 to-orange-600'
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        const TrendIcon = stat.changeType === 'increase' ? TrendingUp : TrendingDown;
        
        return (
          <div key={index} className={`stat-card bg-gradient-to-r ${stat.gradient}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-white/80 text-sm font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                <div className="flex items-center gap-1 mt-3">
                  <TrendIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{stat.change}</span>
                  <span className="text-white/70 text-sm">vs last month</span>
                </div>
              </div>
              <div className="bg-white/20 p-3 rounded-xl">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}