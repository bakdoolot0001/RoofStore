import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.base} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};
