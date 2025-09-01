import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, MoreVertical } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { useUrlParams } from '../../hooks/useUrlParams';
import { searchSales, SalesSearchResponse } from '../../services/salesApi';
import Pagination from '../ui/Pagination';
import LoadingSpinner from '../ui/LoadingSpinner';
import TableSkeleton from '../ui/TableSkeleton';

/**
 * Enhanced Recent Activity component with real-time search and pagination
 */
export default function RecentActivity() {
  // State management
  const [searchQuery, setSearchQuery] = useUrlParams('search', '');
  const [currentPage, setCurrentPage] = useUrlParams('page', '1');
  const [customerFilter, setCustomerFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('Last 7 Days');
  
  // Search and pagination state
  const [salesData, setSalesData] = useState<SalesSearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Debounce search query to avoid excessive API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 400);
  
  // Items per page configuration
  const ITEMS_PER_PAGE = 10;

  /**
   * Fetch sales data based on current filters and search query
   */
  const fetchSalesData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await searchSales({
        query: debouncedSearchQuery,
        page: parseInt(currentPage),
        limit: ITEMS_PER_PAGE,
        customer: customerFilter !== 'all' ? customerFilter : undefined,
        status: statusFilter !== 'all' ? statusFilter : undefined,
        paymentStatus: paymentStatusFilter !== 'all' ? paymentStatusFilter : undefined,
      });
      
      setSalesData(response);
    } catch (err) {
      setError('Failed to fetch sales data. Please try again.');
      console.error('Error fetching sales data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to fetch data when search query or filters change
  useEffect(() => {
    fetchSalesData();
  }, [debouncedSearchQuery, currentPage, customerFilter, statusFilter, paymentStatusFilter]);

  // Reset to first page when search query changes
  useEffect(() => {
    if (debouncedSearchQuery !== searchQuery) {
      setCurrentPage('1');
    }
  }, [debouncedSearchQuery]);

  /**
   * Handle search input change
   */
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  /**
   * Handle page change
   */
  const handlePageChange = (page: number) => {
    setCurrentPage(page.toString());
  };

  /**
   * Clear all filters and search
   */
  const clearFilters = () => {
    setSearchQuery('');
    setCurrentPage('1');
    setCustomerFilter('all');
    setStatusFilter('all');
    setPaymentStatusFilter('all');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers, references, status..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
          />
          {isLoading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <LoadingSpinner size="sm" />
            </div>
          )}
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <select 
              value={customerFilter}
              onChange={(e) => setCustomerFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">All Customers</option>
              <option value="carl">Carl Evans</option>
              <option value="minerva">Minerva Rameriz</option>
              <option value="robert">Robert Lamon</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={paymentStatusFilter}
              onChange={(e) => setPaymentStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">All Payment Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
              <option value="Overdue">Overdue</option>
              <option value="Partial">Partial</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option>Sort By : Last 7 Days</option>
              <option>Sort By : Last 30 Days</option>
              <option>Sort By : Last 3 Months</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Results Summary and Clear Filters */}
      {(searchQuery || customerFilter !== 'all' || statusFilter !== 'all' || paymentStatusFilter !== 'all') && (
        <div className="flex items-center justify-between mb-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2">
            {salesData && (
              <span className="text-sm text-blue-700">
                {salesData.total} result{salesData.total !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
              </span>
            )}
          </div>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
          <button
            onClick={fetchSalesData}
            className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
          >
            Try again
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Customer Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Reference</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Grand Total</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Paid</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Due</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Payment Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">Biller</th>
              <th className="text-left py-3 px-4 font-medium text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={11} className="p-0">
                  <TableSkeleton rows={ITEMS_PER_PAGE} columns={11} />
                </td>
              </tr>
            ) : salesData && salesData.data.length > 0 ? (
              salesData.data.map((sale) => (
                <tr key={sale.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={sale.avatar}
                        alt={sale.customerName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-gray-900">{sale.customerName}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-blue-600 font-medium">{sale.reference}</td>
                  <td className="py-3 px-4 text-gray-600">{sale.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${sale.statusColor}`}>
                      {sale.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-medium">{sale.grandTotal}</td>
                  <td className="py-3 px-4 text-gray-900">{sale.paid}</td>
                  <td className="py-3 px-4 text-gray-900">{sale.due}</td>
                  <td className="py-3 px-4">
                    <span className={`text-sm font-medium ${sale.paymentStatusColor}`}>
                      • {sale.paymentStatus}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{sale.biller}</td>
                  <td className="py-3 px-4">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Search className="w-12 h-12 text-gray-300" />
                    <p className="text-gray-500 font-medium">No results found</p>
                    <p className="text-gray-400 text-sm">
                      {searchQuery 
                        ? `No sales match "${searchQuery}". Try adjusting your search terms.`
                        : 'No sales data available with the current filters.'
                      }
                    </p>
                    {(searchQuery || customerFilter !== 'all' || statusFilter !== 'all' || paymentStatusFilter !== 'all') && (
                      <button
                        onClick={clearFilters}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {salesData && salesData.totalPages > 1 && (
        <Pagination
          currentPage={parseInt(currentPage)}
          totalPages={salesData.totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={salesData.total}
        />
      )}
    </div>
  );
}