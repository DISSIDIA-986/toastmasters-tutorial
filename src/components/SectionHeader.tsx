interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  className = '', 
  center = true 
}: SectionHeaderProps) {
  const alignmentClass = center ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-8 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl font-bold text-blue-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}