import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface FullLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 包含 Header, Main Content, Footer 的基本页面布局
 * 完整的页面布局组件，包含导航栏、主要内容区域和页脚
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