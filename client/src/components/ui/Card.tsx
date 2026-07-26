type CardProps = {
    children: React.ReactNode;
  };
  
  const Card = ({ children }: CardProps) => {
    return (
      <div
        className="
          rounded-2xl border border-zinc-800
          bg-zinc-900/70 p-5
          backdrop-blur-sm
        "
      >
        {children}
      </div>
    );
  };
  
  export default Card;