export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  supplier: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  productCount: number;
  icon: string;
}

export interface Supplier {
  id: string;
  name: string;
  contact: string;
  email: string;
  status: 'Active' | 'Inactive';
}

export interface SalesData {
  date: string;
  sales: number;
  revenue: number;
}

export interface StockAlert {
  id: string;
  product: string;
  currentStock: number;
  minimumStock: number;
  severity: 'low' | 'critical';
}