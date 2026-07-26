type SectionTitleProps = {
    title: string;
    subtitle?: string;
  };
  
  const SectionTitle = ({
    title,
    subtitle,
  }: SectionTitleProps) => {
    return (
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">
          {title}
        </h2>
  
        {subtitle && (
          <p className="mt-2 text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
    );
  };
  
  export default SectionTitle;