'use client';

import React, { useState, useEffect } from 'react';

interface ViewContextType {
  showHuman: boolean;
  toggleView: () => void;
}

const ViewContext = React.createContext<ViewContextType | undefined>(undefined);

function ViewProvider({ children }: { children: React.ReactNode }) {
  const [showHuman, setShowHuman] = useState(true); // Default to human view for SEO

  useEffect(() => {
    // Immediately switch to code view for humans on page load
    // Human view stays in DOM for SEO purposes
    setShowHuman(false);
  }, []);

  const toggleView = () => {
    setShowHuman(prev => !prev);
  };

  return (
    <ViewContext.Provider value={{ showHuman, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export default ViewProvider;

export function useView() {
  const context = React.useContext(ViewContext);
  if (!context) {
    throw new Error('useView must be used within ViewProvider');
  }
  return context;
}