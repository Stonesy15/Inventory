import { useState, useEffect } from 'react';

/**
 * Custom hook for managing URL parameters
 * @param paramName - Name of the URL parameter
 * @param defaultValue - Default value if parameter doesn't exist
 * @returns [value, setValue] tuple
 */
export function useUrlParams(paramName: string, defaultValue: string = '') {
  const [value, setValue] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(paramName) || defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    if (value && value !== defaultValue) {
      url.searchParams.set(paramName, value);
    } else {
      url.searchParams.delete(paramName);
    }
    window.history.replaceState({}, '', url.toString());
  }, [value, paramName, defaultValue]);

  return [value, setValue] as const;
}