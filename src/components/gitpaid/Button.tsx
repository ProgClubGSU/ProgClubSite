interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  onClick,
  href,
  external = false,
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-xl no-underline';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    gradient: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100';
  const widthClass = fullWidth ? 'w-full' : '';

  const className = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${disabled ? disabledClasses : ''}
    ${widthClass}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="text-xl">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="text-xl">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {content}
    </button>
  );
}
