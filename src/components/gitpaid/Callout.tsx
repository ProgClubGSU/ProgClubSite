interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'tip' | 'danger';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: { border: 'border-blue-400/40', bg: 'bg-blue-400/5', text: 'text-blue-300/80' },
    warning: { border: 'border-orange-400/40', bg: 'bg-orange-400/5', text: 'text-orange-300/80' },
    success: { border: 'border-green-400/40', bg: 'bg-green-400/5', text: 'text-green-300/80' },
    tip: { border: 'border-purple-400/40', bg: 'bg-purple-400/5', text: 'text-purple-300/80' },
    danger: { border: 'border-red-400/40', bg: 'bg-red-400/5', text: 'text-red-300/80' },
  };

  const currentStyle = styles[type];

  return (
    <div className={`${currentStyle.border} ${currentStyle.bg} border-l-2 p-4 rounded-r-lg my-4`}>
      <div className="flex-1">
        {title && (
          <h4 className={`${currentStyle.text} font-semibold mb-2 text-sm`}>{title}</h4>
        )}
        <div className={`${currentStyle.text} text-sm leading-relaxed`}>{children}</div>
      </div>
    </div>
  );
}
