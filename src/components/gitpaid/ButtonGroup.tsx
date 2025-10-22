interface ButtonGroupProps {
  children: React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  vertical?: boolean;
}

export default function ButtonGroup({
  children,
  alignment = 'left',
  spacing = 'md',
  vertical = false,
}: ButtonGroupProps) {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const spacingClasses = {
    sm: vertical ? 'gap-2' : 'gap-2',
    md: vertical ? 'gap-3' : 'gap-3',
    lg: vertical ? 'gap-4' : 'gap-4',
  };

  const directionClass = vertical ? 'flex-col' : 'flex-row flex-wrap';

  return (
    <div className={`flex ${directionClass} ${alignmentClasses[alignment]} ${spacingClasses[spacing]} my-4`}>
      {children}
    </div>
  );
}
