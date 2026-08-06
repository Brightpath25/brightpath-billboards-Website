interface EventSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}

export default function EventSection({ title, subtitle, children, dark = false, id }: EventSectionProps) {
  return (
    <section style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }} id={id} className={`border-b border-white/[0.06] py-14 md:py-20 ${dark ? "bg-[#0f1110]" : "bg-[#070809]"}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e3b04b]">BrightPath / Campaign intelligence</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-normal text-[#f4f1e8] md:text-5xl" style={{ fontFamily: "'Gill Sans', 'Gill Sans Nova', 'Trebuchet MS', 'Helvetica Neue', Arial, sans-serif" }}>{title}</h2>
          {subtitle && <p className="mt-4 max-w-xl text-base leading-7 text-[#aeb5bd] md:text-lg">{subtitle}</p>}
          <div className="mt-6 h-px w-20 bg-[#e3b04b]" />
        </div>
        {children}
      </div>
    </section>
  );
}
