"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const siteLinks = [
  ["How It Works", "/services/mobile-led-advertising"],
  ["Campaigns", "/services/targeted-campaigns"],
  ["Events", "/events"],
  ["BrightPathIQ Demo", "/brightpathiq-demo"],
  ["About", "/about"],
] as const;

const chapters = [
  { id: "overview", label: "Overview", enabled: true },
  { id: "inventory", label: "Inventory", enabled: true },
  { id: "market", label: "Market", enabled: true },
  { id: "measurement", label: "Measurement", enabled: true },
  { id: "campaigns", label: "Campaigns", enabled: true },
  { id: "proof", label: "Proof", enabled: true },
  { id: "company", label: "Company", enabled: true },
] as const;

const approvedMediaKitPdfHref = "/brightpath-enterprise-media-kit.pdf";

const availableChapters = chapters.filter((chapter) => chapter.enabled);
const chapterBySectionHash: Record<string, string> = {
  overview: "overview",
  inventory: "inventory",
  market: "market",
  measurement: "measurement",
  campaigns: "campaigns",
  proof: "proof",
  pricing: "campaigns",
  company: "company",
  contact: "company",
};

export default function MediaKitNavigation() {
  const [siteMenuOpen, setSiteMenuOpen] = useState(false);
  const [chapterMenuOpen, setChapterMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState("overview");
  const [chapterMenuChapter, setChapterMenuChapter] = useState("overview");
  const chapterMenuOpenRef = useRef(false);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-media-kit-chapter]"),
    );
    let animationFrame = 0;
    const syncActiveChapter = () => {
      if (chapterMenuOpenRef.current) return;
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        if (chapterMenuOpenRef.current) return;
        const boundary = window.innerWidth <= 767 ? 136 : 144;
        const sectionAtBoundary =
          sections.find((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top <= boundary && rect.bottom > boundary;
          }) ??
          [...sections].sort(
            (a, b) =>
              Math.abs(a.getBoundingClientRect().top - boundary) -
              Math.abs(b.getBoundingClientRect().top - boundary),
          )[0];
        const chapter = sectionAtBoundary?.dataset.mediaKitChapter;
        if (chapter) setActiveChapter(chapter);
      });
    };
    const hashChapter = window.location.hash.slice(1);
    const hasAvailableHash = availableChapters.some(
      (chapter) => chapter.id === hashChapter,
    );
    if (hasAvailableHash) {
      setActiveChapter(hashChapter);
    } else {
      syncActiveChapter();
    }
    const initialSync = window.setTimeout(syncActiveChapter, 500);
    window.addEventListener("scroll", syncActiveChapter, { passive: true });
    window.addEventListener("hashchange", syncActiveChapter);
    window.addEventListener("resize", syncActiveChapter);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(initialSync);
      window.removeEventListener("scroll", syncActiveChapter);
      window.removeEventListener("hashchange", syncActiveChapter);
      window.removeEventListener("resize", syncActiveChapter);
    };
  }, []);

  const displayedChapter = chapterMenuOpen ? chapterMenuChapter : activeChapter;
  const activeLabel =
    chapters.find((chapter) => chapter.id === displayedChapter)?.label ??
    "Overview";
  const closeMenus = () => {
    chapterMenuOpenRef.current = false;
    setSiteMenuOpen(false);
    setChapterMenuOpen(false);
  };
  const toggleChapterMenu = () => {
    const nextOpen = !chapterMenuOpen;
    chapterMenuOpenRef.current = nextOpen;
    if (nextOpen) {
      const hashChapter = chapterBySectionHash[window.location.hash.slice(1)];
      const frozenChapter = hashChapter ?? activeChapter;
      setChapterMenuChapter(frozenChapter);
      setActiveChapter(frozenChapter);
    } else {
      setActiveChapter(chapterMenuChapter);
    }
    setChapterMenuOpen(nextOpen);
  };

  return (
    <>
      <header className="mk-site-header">
        <nav className="mk-site-nav" aria-label="Primary navigation">
          <Link href="/" className="mk-logo-link" onClick={closeMenus}>
            <Image
              src="/brightpath-logo.png"
              alt="BrightPath Billboards"
              width={44}
              height={44}
              priority
            />
          </Link>
          <div className="mk-site-links">
            {siteLinks.map(([label, href]) => (
              <Link key={label} href={href}>
                {label}
              </Link>
            ))}
            <Link href="/quote" className="mk-site-action">
              Build My Campaign
            </Link>
          </div>
          <button
            type="button"
            className="mk-menu-button"
            aria-label={
              siteMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={siteMenuOpen}
            aria-controls="media-kit-site-menu"
            onClick={() => setSiteMenuOpen((open) => !open)}
          >
            {siteMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </nav>
        {siteMenuOpen && (
          <div id="media-kit-site-menu" className="mk-site-menu">
            {siteLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={closeMenus}>
                {label}
              </Link>
            ))}
            <Link href="/quote" onClick={closeMenus}>
              Build My Campaign
            </Link>
          </div>
        )}
      </header>

      <nav className="mk-chapter-nav" aria-label="Media kit chapters">
        <div className="mk-chapter-desktop">
          <span className="mk-chapter-kicker">Media kit</span>
          <ol>
            {availableChapters.map((chapter) => (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  onClick={() => setActiveChapter(chapter.id)}
                  aria-current={
                    activeChapter === chapter.id ? "location" : undefined
                  }
                >
                  {chapter.label}
                </a>
              </li>
            ))}
          </ol>
          <a
            className="mk-chapter-pdf"
            href={approvedMediaKitPdfHref}
            download
          >
            Download PDF ↓
          </a>
        </div>
        <div className="mk-chapter-mobile">
          <button
            type="button"
            aria-expanded={chapterMenuOpen}
            aria-controls="media-kit-chapter-menu"
            onClick={toggleChapterMenu}
          >
            <span>
              <small>Chapter</small>
              <strong>{activeLabel}</strong>
            </span>
            <ChevronDown aria-hidden="true" />
          </button>
          {chapterMenuOpen && (
            <ol id="media-kit-chapter-menu">
              {availableChapters.map((chapter) => (
                <li key={chapter.id}>
                  <a
                    href={`#${chapter.id}`}
                    aria-current={
                      displayedChapter === chapter.id ? "location" : undefined
                    }
                    onClick={() => {
                      chapterMenuOpenRef.current = false;
                      setChapterMenuChapter(chapter.id);
                      setActiveChapter(chapter.id);
                      setChapterMenuOpen(false);
                    }}
                  >
                    {chapter.label}
                  </a>
                </li>
              ))}
              <li className="mk-chapter-mobile-pdf">
                <a href={approvedMediaKitPdfHref} download>
                  Download PDF ↓
                </a>
              </li>
            </ol>
          )}
        </div>
      </nav>
    </>
  );
}
