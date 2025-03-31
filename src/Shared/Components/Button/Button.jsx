import React from "react";
import styles from "./Button.module.css";

function Button({
  variant = "secondary",
  icon: Icon,
  iconColor = "black",
  disabled = false,
  children,
  onClick,
  className = "",
}) {
  const buttonClass = ` ${
    variant === "primary" ? styles.primary : styles.secondary
  }`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${buttonClass} ${className}`.trim()}
    >
      {Icon && <Icon className={styles.icon} style={{ color: iconColor }} />}
      {children}
    </button>
  );
}

export default Button;
