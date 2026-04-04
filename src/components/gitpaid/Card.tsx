interface CardProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'bordered';
  className?: string;
}

export default function Card({ title, children, variant = 'default', className = '' }: CardProps) {
  const variants = {
    default: 'bg-white/[0.02] border border-white/5',
    gradient: 'bg-white/[0.02] border border-white/5',
    bordered: 'bg-white/[0.02] border border-white/10',
  };

  return (
    <div className={`rounded-lg p-6 my-4 ${variants[variant]} ${className}`}>
      {title && (
        <h3 className="text-base font-semibold text-white mb-3" style={{ fontFamily: "'Noto Serif', Georgia, serif", fontStyle: "italic" }}>{title}</h3>
      )}
      <div className="text-white/40 text-sm">{children}</div>
    </div>
  );
}
