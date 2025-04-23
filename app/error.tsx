'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
          <FaExclamationTriangle className="w-10 h-10" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <p className="text-muted-foreground mb-8">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        
        <button
          onClick={() => reset()}
          className="flex items-center justify-center gap-2 px-6 py-3 mx-auto rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <FaRedo className="w-4 h-4" />
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
