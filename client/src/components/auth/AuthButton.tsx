
interface AuthButtonProps {
  text: string;
}

const AuthButton = ({
  text,
}: AuthButtonProps) => {
  return (
    <button
      className="
        h-14 w-full rounded-2xl
        bg-zinc-700 font-semibold
        text-white transition-all
        duration-300

        hover:bg-zinc-600
        hover:shadow-lg
      "
    >
      {text}
    </button>
  );
};

export default AuthButton;

