type ExperienceProps = {
  title: string | React.ReactNode;
  period: string | React.ReactNode;
  children: React.ReactNode;
};

const ExperienceSection: React.FC<ExperienceProps> = ({
  title,
  period,
  children,
}) => {
  return (
    <div>
      <div className="flex  justify-between ">
        <h1 className="font-bold text-base text">{title}</h1>
        <h1 className="font-bold text-base  opacity-75 text hidden md:block">
          {period}
        </h1>
      </div>
      <h1 className="font-bold text-base opacity-75 text block md:hidden">
        {period}
      </h1>
      {children}
    </div>
  );
};

export default ExperienceSection;
