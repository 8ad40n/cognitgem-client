'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          An unexpected error occurred. Please try again.
        </p>
        <Button
          onClick={reset}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
