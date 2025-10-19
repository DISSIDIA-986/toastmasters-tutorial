import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface FullLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Basic page layout with Header, Main Content, Footer
 * Complete page layout component containing navigation bar, main content area and footer
 */
export default function FullLayout({ children, className = '' }: FullLayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Header with Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}