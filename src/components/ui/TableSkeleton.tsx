import React from 'react';

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

/**
 * Skeleton loading component for tables
 */
export default function TableSkeleton({ rows = 5, columns = 8 }: TableSkeletonProps) {
  return (
    <div className="animate-pulse">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="border-b border-gray-100 hover:bg-gray-50">
          <div className="flex items-center py-3 px-4 space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="flex-1">
                {colIndex === 1 ? (
                  // Customer name column with avatar
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                ) : colIndex === 4 ? (
                  // Status column
                  <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                ) : (
                  // Regular columns
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}