import React from 'react';
import { ExclamationTriangleIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { mockStockAlerts } from '../../data/mockData';

export default function StockAlerts() {
  const getSeverityColor = (severity: string) => {
    return severity === 'critical' 
      ? 'border-red-200 bg-red-50' 
      : 'border-yellow-200 bg-yellow-50';
  };

  const getSeverityIconColor = (severity: string) => {
    return severity === 'critical' 
      ? 'text-red-600' 
      : 'text-yellow-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Stock Alerts</h2>
          <p className="text-gray-600">Monitor low stock items and take action</p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
            {mockStockAlerts.filter(alert => alert.severity === 'critical').length} Critical
          </span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
            {mockStockAlerts.filter(alert => alert.severity === 'low').length} Low Stock
          </span>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {mockStockAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-6 border-2 rounded-xl ${getSeverityColor(alert.severity)} transition-all hover:shadow-md`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full bg-white ${getSeverityIconColor(alert.severity)}`}>
                  <ExclamationTriangleIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{alert.product}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-gray-600">
                      Current Stock: <span className="font-medium">{alert.currentStock}</span>
                    </span>
                    <span className="text-sm text-gray-600">
                      Minimum Required: <span className="font-medium">{alert.minimumStock}</span>
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      alert.severity === 'critical' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {alert.severity === 'critical' ? 'Critical' : 'Low Stock'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Reorder Now
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Stock Level</span>
                <span>{Math.round((alert.currentStock / alert.minimumStock) * 100)}% of minimum</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    alert.severity === 'critical' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${Math.min((alert.currentStock / alert.minimumStock) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-6 border-t border-gray-200">
        <button className="btn-primary flex items-center gap-2">
          <CheckIcon className="w-5 h-5" />
          Mark All as Resolved
        </button>
        <button className="btn-secondary">
          Generate Purchase Orders
        </button>
        <button className="btn-secondary">
          Export Report
        </button>
      </div>
    </div>
  );
}