import React, { useRef } from "react";
import { ButtonSize } from "../../constants";
import styles from "./Button.module.css";

export type ButtonAppearance =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "warning"
  | "error";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      size = "md",
      appearance = "primary",
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
    };

    const buttonClasses = [
      styles.button,
      styles[size],
      styles[appearance],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref || buttonRef}
        className={buttonClasses}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
