"use client";

interface ButtonProps {
  text: string;
  action?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  action,
  text,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const btnBaseClasses =
    "flex justify-center items-center px-6 py-2 rounded-md text-base font-medium transition-colors duration-200";

  const btnVariantClasses = {
    primary: "bg-[#e73c1e] text-white",
    secondary: "bg-[#729cd8] text-white",
    ghost: "bg-transparent text-black",
  };

  return (
    <button
      type={type}
      onClick={(e) => {
        if (type === "button") {
          e.preventDefault();
          action?.();
        }
      }}
      className={`${btnBaseClasses} ${btnVariantClasses[variant]} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
