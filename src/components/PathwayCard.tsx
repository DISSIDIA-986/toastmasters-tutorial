import Card from './Card';

interface PathwayCardProps {
  name: string;
  chinese: string;
  description: string;
  focus: string[];
  icon: string;
  className?: string;
}

export default function PathwayCard({ 
  name, 
  chinese, 
  description, 
  focus, 
  icon, 
  className = '' 
}: PathwayCardProps) {
  return (
    <Card className={`p-6 hover:shadow-xl transition-shadow ${className}`}>
      <div className="text-4xl mb-4 text-center">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div>
        <h4 className="font-medium text-blue-700 mb-2">Key Focus Areas:</h4>
        <div className="flex flex-wrap gap-2">
          {focus.map((item, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}