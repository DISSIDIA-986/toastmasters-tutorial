import Card from './Card';

interface RoleCardProps {
  title: string;
  description: string;
  responsibilities: string[];
  benefits: string[];
  icon: string;
  timeCommitment?: string;
  className?: string;
}

export default function RoleCard({ 
  title, 
  description, 
  responsibilities, 
  benefits, 
  icon, 
  timeCommitment, 
  className = '' 
}: RoleCardProps) {
  return (
    <Card className={`p-6 hover:shadow-xl transition-shadow ${className}`}>
      <div className="text-center mb-4">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
        {timeCommitment && (
          <p className="text-sm text-gray-500 mt-1">{timeCommitment}</p>
        )}
      </div>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-blue-700 mb-2">Main Responsibilities:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-green-700 mb-2">Skills Developed:</h4>
        <div className="flex flex-wrap gap-2">
          {benefits.map((benefit, idx) => (
            <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}