interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "dark";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary"
}) => {
  const baseStyles =
    "px-10 py-4 rounded-full font-medium transition-all duration-700 flex items-center justify-center gap-3 transform tracking-[0.15em] text-[11px] uppercase";

  const variants = {
    primary:
      "bg-[#C5A059] text-white shadow-xl hover:bg-[#B48F48] hover:-translate-y-1",
    outline:
      "border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white",
    dark: "bg-[#121212] text-white hover:bg-[#C5A059] hover:-translate-y-1"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
