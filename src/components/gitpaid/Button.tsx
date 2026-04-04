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
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 no-underline text-center [&>p]:m-0 [&>p]:p-0 [&>p]:leading-none';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs tracking-widest rounded',
    md: 'px-4 py-2 text-xs tracking-widest rounded',
    lg: 'px-5 py-2.5 text-sm tracking-widest rounded',
  };

  const variantClasses = {
    primary: 'bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/10 hover:border-white/20',
    secondary: 'bg-white/[0.03] hover:bg-white/[0.06] text-white/50 hover:text-white/70 border border-white/5 hover:border-white/10',
    success: 'bg-white/[0.03] hover:bg-white/[0.06] text-white/50 hover:text-white/70 border border-white/5 hover:border-white/10',
    danger: 'bg-white/[0.03] hover:bg-white/[0.06] text-white/50 hover:text-white/70 border border-white/5 hover:border-white/10',
    gradient: 'bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white border border-white/10 hover:border-white/20',
    outline: 'bg-transparent hover:bg-white/[0.04] text-white/50 hover:text-white/70 border border-white/10 hover:border-white/20',
  };

  const disabledClasses = 'opacity-30 cursor-not-allowed';
  const widthClass = fullWidth ? 'w-full' : '';

  const className = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? disabledClasses : ''} ${widthClass}`.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
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
    <button className={className} onClick={onClick} disabled={disabled} type="button">
      {content}
    </button>
  );
}
