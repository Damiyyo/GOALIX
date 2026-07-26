interface FormBadgeProps {
    result: string;
  }
  
  const colors = {
    W: "bg-green-500/15 text-green-400 border-green-500/20",
    D: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    L: "bg-red-500/15 text-red-400 border-red-500/20",
  };
  
  const FormBadge = ({ result }: FormBadgeProps) => {
    return (
      <div
        className={`
          h-8
          w-8
          rounded-full
          border
          flex
          items-center
          justify-center
          text-xs
          font-bold
          ${colors[result as keyof typeof colors] || "bg-zinc-700 text-white"}
        `}
      >
        {result}
      </div>
    );
  };
  
  export default FormBadge;