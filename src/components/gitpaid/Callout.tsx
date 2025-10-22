interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'tip' | 'danger';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      border: 'border-blue-500',
      bg: 'bg-blue-50',
      text: 'text-blue-900',
      icon: 'ℹ️',
    },
    warning: {
      border: 'border-orange-500',
      bg: 'bg-orange-50',
      text: 'text-orange-900',
      icon: '⚠️',
    },
    success: {
      border: 'border-green-500',
      bg: 'bg-green-50',
      text: 'text-green-900',
      icon: '✅',
    },
    tip: {
      border: 'border-purple-500',
      bg: 'bg-purple-50',
      text: 'text-purple-900',
      icon: '💡',
    },
    danger: {
      border: 'border-red-500',
      bg: 'bg-red-50',
      text: 'text-red-900',
      icon: '🚨',
    },
  };

  const currentStyle = styles[type];

  return (
    <div className={`${currentStyle.border} ${currentStyle.bg} border-l-4 p-4 rounded-r-lg my-4`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">{currentStyle.icon}</span>
        <div className="flex-1">
          {title && (
            <h4 className={`${currentStyle.text} font-semibold mb-2`}>{title}</h4>
          )}
          <div className={`${currentStyle.text} prose-sm`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
