import Card from './Card';

interface InfoCardProps {
  title: string;
  description?: string;
  icon: string;
  className?: string;
  children?: React.ReactNode;
  hover?: boolean;
}

export default function InfoCard({ 
  title, 
  description, 
  icon, 
  className = '', 
  children, 
  hover = false 
}: InfoCardProps) {
  const hoverClass = hover ? 'hover:shadow-xl transition-shadow' : '';
  
  return (
    <Card className={`p-6 ${hoverClass} ${className}`}>
      <div className="text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {children}
      </div>
    </Card>
  );
}