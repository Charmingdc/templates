interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  alternateBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
  alternateBackground = false
}) => {
  return (
    <section
      id={id}
      className={`py-32 px-6 md:px-12 lg:px-32 ${alternateBackground ? "bg-[#FAFAFA]" : "bg-white"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};
