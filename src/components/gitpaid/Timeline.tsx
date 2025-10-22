interface TimelineItem {
  title: string;
  description: string;
  date?: string;
  status?: 'completed' | 'in-progress' | 'upcoming';
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-300';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className="my-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 pb-8 relative">
          {/* Timeline line */}
          {index < items.length - 1 && (
            <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gray-200" />
          )}

          {/* Timeline dot */}
          <div className={`w-4 h-4 rounded-full ${getStatusColor(item.status)} flex-shrink-0 mt-1 z-10`} />

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-baseline justify-between mb-1">
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              {item.date && (
                <span className="text-sm text-gray-500">{item.date}</span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
