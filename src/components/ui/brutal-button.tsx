import * as React from "react";
import { cn } from "@/lib/utils";

export interface BrutalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  textColor?: string;
  hasBorder?: boolean;
  borderColor?: string;
  hasShadow?: boolean;
  shadowColor?: string;
  radius?: number;
  href?: string;
  external?: boolean;
}

export const BrutalButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  BrutalButtonProps
>(
  (
    {
      className,
      color,
      textColor,
      hasBorder = true,
      borderColor,
      hasShadow = true,
      shadowColor,
      radius = 0,
      href,
      external,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const customStyles = {
      "--btn-bg": color || "var(--background)",
      "--btn-text": textColor || "var(--foreground)",
      "--btn-border": hasBorder ? borderColor || "var(--foreground)" : "transparent",
      "--btn-shadow": shadowColor || "var(--foreground)",
      "--btn-radius": `${radius}px`,
      ...style,
    } as React.CSSProperties;

    const classes = cn(
      "inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-200 ease-in-out",
      hasBorder ? "border-2" : "border-0",
      hasShadow
        ? "shadow-[4px_4px_0px_var(--btn-shadow)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--btn-shadow)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        : "active:scale-95",
      className
    );

    const combinedStyle: React.CSSProperties = {
      backgroundColor: "var(--btn-bg)",
      color: "var(--btn-text)",
      borderColor: "var(--btn-border)",
      borderRadius: "var(--btn-radius)",
      ...customStyles,
    };

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
          style={combinedStyle}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        style={combinedStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BrutalButton.displayName = "BrutalButton";

export default BrutalButton;
