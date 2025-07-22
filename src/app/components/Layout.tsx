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
          <h1 className="text-2xl font-bold">Toastmasters 中文指南</h1>
          <p className="text-blue-200 mt-2">您的 Toastmasters 学习伙伴</p>
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
            <p className="mb-2">© 2024 Toastmasters 中文指南</p>
            <p className="text-gray-400 text-sm">
              本网站旨在帮助中文会员更好地了解 Toastmasters International
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://www.toastmasters.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                官方网站
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="mailto:contact@example.com"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}