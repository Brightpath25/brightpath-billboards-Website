import Link from "next/link";

function InlineText({ text }: { text: string }) {
  const tokens = text.split(/(\\*\\*[^*]+\\*\\*|\\[[^\\]]+\\]\\([^)]*\\))/g);
  return <>{tokens.map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }
    const match = token.match(/^\\[([^\\]]+)\\]\\(([^)]*)\\)$/);
    if (match) {
      return <a key={index} href={match[2]} className="text-gold-highlight underline hover:text-white">{match[1]}</a>;
    }
    return <span key={index}>{token}</span>;
  })}</>;
}

export default function PolicyPage({ title, content }: { title: string; content: string[] }) {
  return (
    <main className="min-h-screen bg-black-hero text-text-light pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-10 border-b border-gold-base/30 pb-8">
          <Link href="/" className="text-gold-highlight hover:text-white text-sm">← Back to BrightPath Billboards</Link>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gold-gradient">{title}</h1>
          <p className="mt-4 text-text-mid">BrightPath Billboards LLC</p>
        </div>
        <article className="space-y-4 text-base md:text-lg leading-8 text-text-mid">
          {content.map((line, index) => {
            if (!line.trim()) return <div key={index} className="h-2" aria-hidden="true" />;
            if (line.startsWith("# ")) return <h2 key={index} className="text-2xl md:text-3xl font-bold text-text-light pt-6">{line.slice(2)}</h2>;
            if (line.startsWith("## ")) return <h2 key={index} className="text-2xl md:text-3xl font-bold text-gold-highlight pt-8">{line.slice(3)}</h2>;
            if (line.startsWith("### ")) return <h3 key={index} className="text-xl md:text-2xl font-semibold text-text-light pt-5">{line.slice(4)}</h3>;
            if (line.startsWith("- ") || line.startsWith("* ")) return <div key={index} className="pl-6 relative"><span className="absolute left-1 top-3 h-2 w-2 rounded-full bg-gold-base" /><InlineText text={line.slice(2)} /></div>;
            if (line.startsWith("> ")) return <blockquote key={index} className="border-l-2 border-gold-base pl-5 italic text-text-light"><InlineText text={line.slice(2)} /></blockquote>;
            return <p key={index}><InlineText text={line} /></p>;
          })}
        </article>
      </div>
    </main>
  );
}
