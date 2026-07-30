import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { ReactNode } from "react";

type PolicyPageProps = {
  sourceFile: "TERMS-OF-SERVICE.md" | "PRIVACY-POLICY.md" | "REFUND-POLICY.md";
};

function renderInline(text: string): ReactNode[] {
  return text
    .replace(/  $/, "")
    .split(/(\*\*.*?\*\*)/g)
    .filter(Boolean)
    .map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={`${part}-${index}`} className="font-semibold text-text-light">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      ),
    );
}

function renderMarkdown(markdown: string) {
  const lines = markdown.split(/\r?\n/);
  const content: ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;

    content.push(
      <ul key={`list-${content.length}`} className="my-5 space-y-3 pl-6 list-disc marker:text-gold-base">
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`} className="pl-1 text-text-mid leading-7">
            {renderInline(item)}
          </li>
        ))}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line) => {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();

    if (!line.trim()) return;
    if (line.startsWith("# ")) return;

    if (line.startsWith("### ")) {
      content.push(
        <h3 key={`h3-${content.length}`} className="mt-8 mb-3 text-xl font-bold text-text-light">
          {renderInline(line.slice(4))}
        </h3>,
      );
      return;
    }

    if (line.startsWith("## ")) {
      content.push(
        <h2
          key={`h2-${content.length}`}
          className="mt-12 mb-4 border-b border-gold-base/20 pb-3 text-2xl md:text-3xl font-bold text-text-light"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {renderInline(line.slice(3))}
        </h2>,
      );
      return;
    }

    content.push(
      <p key={`p-${content.length}`} className="my-4 text-text-mid leading-7 md:leading-8">
        {renderInline(line)}
      </p>,
    );
  });

  flushList();
  return content;
}

export default function PolicyPage({ sourceFile }: PolicyPageProps) {
  const sourcePath = path.join(process.cwd(), "src", "content", "policies", sourceFile);
  const markdown = fs.readFileSync(sourcePath, "utf8");
  const title = markdown.match(/^# (.+)$/m)?.[1] ?? "BrightPath Policy";

  return (
    <main className="min-h-screen bg-black-hero text-text-light">
      <section className="relative overflow-hidden border-b border-gold-base/20 bg-hero-gradient pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(227,176,75,0.22),transparent_36%)]" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <Link
            href="/"
            className="inline-flex rounded-xl border border-gold-base/50 px-5 py-2 text-sm font-semibold text-gold-base transition-colors hover:bg-gold-base hover:text-black-hero"
          >
            ← Home
          </Link>
          <p className="mt-10 mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold-base">
            BrightPath Billboards
          </p>
          <h1
            className="max-w-4xl text-4xl font-bold leading-tight text-text-light md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <article className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-gold-base/20 bg-black-panel p-6 shadow-card-glow md:p-10 lg:p-14">
            {renderMarkdown(markdown)}
          </div>
        </article>
      </section>
    </main>
  );
}
