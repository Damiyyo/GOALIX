
interface AuthInputProps {
  label: string;
  type?: string;
  placeholder: string;

  name?: string;
  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}: AuthInputProps) => {
  return (
    <div className="space-y-2">
      <label
        className="
          text-sm font-semibold
          text-zinc-700
        "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="
          h-14 w-full rounded-2xl
          border border-zinc-300
          bg-black px-5 outline-none
          transition-all duration-300

          focus:border-zinc-700
          focus:ring-4
          focus:ring-zinc-200
        "
      />
    </div>
  );
};

export default AuthInput;
