import React, { useRef } from "react";
import {
  ButtonSize,
  ButtonVariant,
  ButtonColor,
  ButtonState,
} from "../../constants";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  state?: ButtonState;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      size = "M",
      variant = "fill",
      color = "primary",
      state = "enabled",
      children,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
    };

    const isDisabled = disabled || state === "disabled";

    const buttonClasses = [
      styles.button,
      styles[size],
      styles[variant],
      styles[color],
      isDisabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref || buttonRef}
        className={buttonClasses}
        onClick={handleClick}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
