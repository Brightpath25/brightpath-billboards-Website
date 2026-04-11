interface EventSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}

export default function EventSection({
  title,
  subtitle,
  children,
  dark = false,
  id,
}: EventSectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-black-panel" : "bg-black-hero"}`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-text-light mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-text-mid text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="gold-divider mx-auto mt-6" />
        </div>
        {children}
      </div>
    </section>
  );
}
