import { Product, Category, Supplier, SalesData, StockAlert } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    sku: 'ORG-BAN-001',
    category: 'Fruits',
    stock: 150,
    price: 2.99,
    supplier: 'Fresh Farm Co.',
    status: 'In Stock',
    lastUpdated: '2025-01-27'
  },
  {
    id: '2',
    name: 'Whole Milk 1L',
    sku: 'DAI-MIL-001',
    category: 'Dairy',
    stock: 25,
    price: 3.49,
    supplier: 'Dairy Direct',
    status: 'Low Stock',
    lastUpdated: '2025-01-27'
  },
  {
    id: '3',
    name: 'Premium Bread',
    sku: 'BAK-BRD-001',
    category: 'Bakery',
    stock: 0,
    price: 4.99,
    supplier: 'Local Bakery',
    status: 'Out of Stock',
    lastUpdated: '2025-01-26'
  },
  {
    id: '4',
    name: 'Chicken Breast',
    sku: 'MEA-CHI-001',
    category: 'Meat',
    stock: 80,
    price: 8.99,
    supplier: 'Premium Meats',
    status: 'In Stock',
    lastUpdated: '2025-01-27'
  },
  {
    id: '5',
    name: 'Coca Cola 2L',
    sku: 'BEV-COK-001',
    category: 'Beverages',
    stock: 120,
    price: 2.99,
    supplier: 'Beverage Corp',
    status: 'In Stock',
    lastUpdated: '2025-01-27'
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Fruits & Vegetables', productCount: 245, icon: '🥬' },
  { id: '2', name: 'Dairy & Eggs', productCount: 89, icon: '🥛' },
  { id: '3', name: 'Meat & Seafood', productCount: 67, icon: '🥩' },
  { id: '4', name: 'Bakery', productCount: 156, icon: '🍞' },
  { id: '5', name: 'Beverages', productCount: 198, icon: '🥤' },
  { id: '6', name: 'Frozen Foods', productCount: 134, icon: '❄️' }
];

export const mockSuppliers: Supplier[] = [
  { id: '1', name: 'Fresh Farm Co.', contact: '+1 555-0123', email: 'orders@freshfarm.com', status: 'Active' },
  { id: '2', name: 'Dairy Direct', contact: '+1 555-0124', email: 'sales@dairydirect.com', status: 'Active' },
  { id: '3', name: 'Local Bakery', contact: '+1 555-0125', email: 'info@localbakery.com', status: 'Inactive' },
  { id: '4', name: 'Premium Meats', contact: '+1 555-0126', email: 'orders@premiummeats.com', status: 'Active' },
  { id: '5', name: 'Beverage Corp', contact: '+1 555-0127', email: 'wholesale@beveragecorp.com', status: 'Active' }
];

export const mockSalesData: SalesData[] = [
  { date: '2025-01-20', sales: 1250, revenue: 15680 },
  { date: '2025-01-21', sales: 1180, revenue: 14920 },
  { date: '2025-01-22', sales: 1420, revenue: 18340 },
  { date: '2025-01-23', sales: 1380, revenue: 17560 },
  { date: '2025-01-24', sales: 1560, revenue: 19840 },
  { date: '2025-01-25', sales: 1890, revenue: 24120 },
  { date: '2025-01-26', sales: 2100, revenue: 26880 },
  { date: '2025-01-27', sales: 1750, revenue: 22400 }
];

export const mockStockAlerts: StockAlert[] = [
  { id: '1', product: 'Whole Milk 1L', currentStock: 25, minimumStock: 50, severity: 'low' },
  { id: '2', product: 'Premium Bread', currentStock: 0, minimumStock: 20, severity: 'critical' },
  { id: '3', product: 'Fresh Eggs', currentStock: 15, minimumStock: 30, severity: 'low' },
  { id: '4', product: 'Orange Juice', currentStock: 5, minimumStock: 25, severity: 'critical' }
];