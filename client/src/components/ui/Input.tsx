type InputProps = {
    type?: string;
    placeholder?: string;
  };
  
  const Input = ({ type = "text", placeholder }: InputProps) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-xl border border-zinc-700 bg-transparent
          px-4 py-3 text-sm text-white outline-none
          placeholder:text-zinc-500
          focus:border-zinc-500
        "
      />
    );
  };
  
  export default Input;