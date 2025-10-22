interface CardProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'bordered';
  className?: string;
}

export default function Card({ title, children, variant = 'default', className = '' }: CardProps) {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-md',
    bordered: 'bg-white border-2 border-blue-500 shadow-lg',
  };

  return (
    <div className={`rounded-lg p-6 my-4 ${variants[variant]} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
