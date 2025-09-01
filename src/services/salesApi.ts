// Mock API service for sales data
export interface SalesSearchParams {
  query?: string;
  page?: number;
  limit?: number;
  customer?: string;
  status?: string;
  paymentStatus?: string;
}

export interface SalesSearchResponse {
  data: any[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Mock API function to simulate searching sales data
 * In a real application, this would make HTTP requests to your backend
 */
export const searchSales = async (params: SalesSearchParams): Promise<SalesSearchResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Import mock data
  const { default: mockSalesData } = await import('../data/mockSalesData');
  
  let filteredData = [...mockSalesData];
  
  // Apply search filter
  if (params.query && params.query.trim()) {
    const query = params.query.toLowerCase().trim();
    filteredData = filteredData.filter(sale => 
      sale.customerName.toLowerCase().includes(query) ||
      sale.reference.toLowerCase().includes(query) ||
      sale.status.toLowerCase().includes(query) ||
      sale.paymentStatus.toLowerCase().includes(query)
    );
  }
  
  // Apply other filters
  if (params.customer && params.customer !== 'all') {
    filteredData = filteredData.filter(sale => 
      sale.customerName.toLowerCase().includes(params.customer!.toLowerCase())
    );
  }
  
  if (params.status && params.status !== 'all') {
    filteredData = filteredData.filter(sale => sale.status === params.status);
  }
  
  if (params.paymentStatus && params.paymentStatus !== 'all') {
    filteredData = filteredData.filter(sale => sale.paymentStatus === params.paymentStatus);
  }
  
  // Calculate pagination
  const page = params.page || 1;
  const limit = params.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    total: filteredData.length,
    page,
    limit,
    totalPages: Math.ceil(filteredData.length / limit)
  };
};