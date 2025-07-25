import Link from "next/link";

interface LinkButtonProps {
  text: string;
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export default function LinkButton({
  href,
  text,
  className = "",
  variant = "primary",
}: LinkButtonProps) {
  const btnBaseClasses =
    "flex justify-center items-center px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 abeezee";

  const btnVariantClasses = {
    primary: "bg-[#e73c1e] text-white",
    secondary: "bg-[#729cd8] text-white",
    ghost: "bg-transparent text-black",
  };

  return (
    <Link
      href={href}
      className={`${btnBaseClasses} ${btnVariantClasses[variant]} ${className}`}
    >
      {text}
    </Link>
  );
}
