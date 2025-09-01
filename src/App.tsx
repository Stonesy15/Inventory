import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import StatsCards from './components/dashboard/StatsCards';
import SalesChart from './components/dashboard/SalesChart';
import RecentActivity from './components/dashboard/RecentActivity';
import ProductWidgets from './components/dashboard/ProductWidgets';
import ProductList from './components/products/ProductList';
import CategoryGrid from './components/categories/CategoryGrid';
import StockAlerts from './components/alerts/StockAlerts';
import UserList from './components/users/UserList.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'products':
        return <ProductList />;
      case 'categories':
        return <CategoryGrid />;
      case 'stock-alerts':
        return <StockAlerts />;
      case 'suppliers':
        return (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supplier Management</h2>
            <p className="text-gray-600">Supplier management features coming soon...</p>
          </div>
        );
      case 'sales':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Sales Analytics</h2>
              <p className="text-gray-600">Track your sales performance and trends</p>
            </div>
            <SalesChart />
          </div>
        );
      case 'customers':
        return (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Management</h2>
            <p className="text-gray-600">Customer management features coming soon...</p>
          </div>
        );
      case 'orders':
        return (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Management</h2>
            <p className="text-gray-600">Order management features coming soon...</p>
          </div>
        );
      case 'users':
        return <UserList />;
      case 'settings':
        return (
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">System Settings</h2>
            <p className="text-gray-600">System settings coming soon...</p>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <StatsCards />
            <SalesChart />
            <ProductWidgets />
            <RecentActivity />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <Header 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeSection={activeSection}
        />
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;