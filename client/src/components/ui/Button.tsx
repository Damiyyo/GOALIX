type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    onClick?: () => void;
  };
  
  const Button = ({
    children,
    type = "button",
    variant = "primary",
    onClick,
  }: ButtonProps) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`
          w-full rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300
          ${
            variant === "primary"
              ? "bg-zinc-800 text-white hover:bg-zinc-700"
              : "border border-zinc-700 bg-transparent text-white hover:bg-zinc-800"
          }
        `}
      >
        {children}
      </button>
    );
  };
  
  export default Button;