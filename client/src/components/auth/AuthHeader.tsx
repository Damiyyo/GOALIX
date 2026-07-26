interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader = ({
  title,
  subtitle,
}: AuthHeaderProps) => {
  return (
    <div className="mb-10">
      <h1
        className="
          text-4xl font-black
          text-black
        "
      >
        {title}
      </h1>

      <p
        className="
          mt-3 leading-7
          text-zinc-500
        "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;
