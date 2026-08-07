import type { ReactNode } from "react";

export default function QuoteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="quote-page-shell">
      {children}
      <style>{`
        .quote-page-shell a[aria-label="BrightPath Billboards home"] img {
          width: 5.25rem !important;
          height: auto !important;
          max-width: none !important;
        }

        @media (min-width: 640px) {
          .quote-page-shell a[aria-label="BrightPath Billboards home"] img {
            width: 6rem !important;
          }
        }

        @media (min-width: 1024px) {
          .quote-page-shell a[aria-label="BrightPath Billboards home"] img {
            width: 6.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
