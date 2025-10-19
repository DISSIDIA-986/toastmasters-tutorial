import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Toastmasters Tutorial</h1>
          <p className="text-blue-200 mt-2">Your Toastmasters Learning Partner</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">© 2024 Toastmasters Tutorial</p>
            <p className="text-gray-400 text-sm">
              This website is designed to help members better understand Toastmasters International
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://www.toastmasters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                Official Website
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="mailto:contact@example.com"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}