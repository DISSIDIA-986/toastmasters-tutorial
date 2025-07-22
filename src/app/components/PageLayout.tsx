import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export default function PageLayout({ 
  children, 
  title, 
  description,
  className = '' 
}: PageLayoutProps) {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {/* Page Header */}
      {title && (
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {description}
            </p>
          )}
        </header>
      )}

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}