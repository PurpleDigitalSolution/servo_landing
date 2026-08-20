// DownloadButton.tsx
import { motion } from "motion/react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "dark";
  children?: React.ReactNode;
}

const DownloadButton = ({
  onClick,
  href,
  className = "",
  size = "md",
  variant = "primary",
  children,
}: DownloadButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25",
    secondary: "bg-white dark:bg-surface-dark text-text-primary dark:text-text-primary-dark border-2 border-primary/20 hover:border-primary",
    dark: "bg-[#1a1a1a] dark:bg-surface-dark text-white dark:text-text-primary-dark hover:bg-[#2a2a2a] dark:hover:bg-surface-secondary-dark",
  };

  const buttonContent = (
    <>
      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>{children || "Download App"}</span>
    </>
  );

  const baseClasses = `
    inline-flex items-center gap-2 sm:gap-3
    font-semibold rounded-xl
    transition-all duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={baseClasses}
    >
      {buttonContent}
    </motion.button>
  );
};

export default DownloadButton;