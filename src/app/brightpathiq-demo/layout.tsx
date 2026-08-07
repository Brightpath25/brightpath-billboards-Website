import type { ReactNode } from "react";

export default function BrightPathIQDemoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="iq-premium-laptop-route">
      {children}
      <style>{`
        /*
         * Premium laptop presentation for the BrightPathIQ public demo.
         * The selected option #3 frame remains the approved physical device.
         * These rules intentionally override only the old placement behavior;
         * the live Campaign / Route / Proof / Report experience remains intact.
         */
        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-stage {
          position: relative;
          width: min(100%, 1120px);
          height: auto;
          margin: clamp(2rem, 4vw, 3.25rem) auto 0;
          padding: 0 0 clamp(1rem, 2vw, 1.5rem);
          overflow: visible;
          text-align: center;
          isolation: isolate;
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-stage::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: 50%;
          bottom: 5.5%;
          width: 68%;
          height: 2.2%;
          min-height: 18px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: rgba(36, 29, 22, 0.18);
          filter: blur(22px);
          pointer-events: none;
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-frame {
          position: relative;
          width: min(100%, 1080px);
          aspect-ratio: 992 / 804;
          margin: 0 auto;
          transform: none;
          transform-origin: center top;
          overflow: visible;
          background-color: #f7f5f0;
          background-position: center top;
          background-repeat: no-repeat;
          background-size: contain;
          background-blend-mode: multiply;
        }

        /* Fit the live product just inside the physical display bezel. */
        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen {
          position: absolute;
          top: 5.05%;
          left: 13.35%;
          width: 73.3%;
          height: 52.35%;
          overflow: hidden;
          border: 0;
          border-radius: 0.32rem;
          background: #f7f5f0;
          box-shadow:
            0 0 0 1px rgba(36, 29, 22, 0.12) inset,
            0 1px 2px rgba(0, 0, 0, 0.12);
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content {
          height: 100%;
          overflow: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: rgba(178, 123, 24, 0.5) rgba(36, 29, 22, 0.06);
          background: #f7f5f0;
          text-align: left;
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: rgba(178, 123, 24, 0.48);
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar-track {
          background: rgba(36, 29, 22, 0.05);
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content > div {
          width: 112.4%;
          min-width: 0;
          min-height: 112%;
          padding: 0.8rem !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          transform-origin: top left;
          zoom: 0.89;
          text-align: left;
        }

        /* The guide remains a proper viewport modal rather than being trapped in the screen. */
        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content .iq-guide-backdrop {
          position: fixed;
        }

        .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-caption {
          position: relative;
          width: min(100%, 620px);
          margin: -0.35rem auto 0;
          padding: 0 1rem;
          color: #756a5e;
          font-size: 0.78rem;
          line-height: 1.55;
          letter-spacing: 0.015em;
        }

        @media (min-width: 1200px) {
          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content > div {
            width: 109.9%;
            min-height: 109%;
            zoom: 0.91;
          }
        }

        @media (max-width: 900px) {
          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-stage {
            margin-top: 2rem;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen {
            top: 5.05%;
            left: 13.35%;
            width: 73.3%;
            height: 52.35%;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content > div {
            width: 116.3%;
            min-height: 116%;
            zoom: 0.86;
          }
        }

        /*
         * Mobile keeps the entire physical laptop visible. We deliberately
         * remove the old fixed-width/cropped treatment and keep interaction
         * contained inside the screen rather than creating page overflow.
         */
        @media (max-width: 640px) {
          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-stage {
            width: 100% !important;
            height: auto !important;
            margin-top: 1.4rem !important;
            padding-bottom: 0.5rem;
            overflow: visible !important;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-frame {
            width: 100% !important;
            margin: 0 auto !important;
            transform: none !important;
            transform-origin: center top !important;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen {
            top: 5.15%;
            left: 13.45%;
            width: 73.1%;
            height: 52.15%;
            border-radius: 0.18rem;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content {
            scrollbar-width: none;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar {
            display: none;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content > div {
            width: 138.9%;
            min-height: 138%;
            padding: 0.55rem !important;
            zoom: 0.72;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-caption {
            margin-top: 0.2rem !important;
            padding: 0 0.75rem !important;
            font-size: 0.7rem !important;
          }

          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-stage::after {
            bottom: 7%;
            width: 72%;
            min-height: 10px;
            filter: blur(13px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-frame,
          .iq-premium-laptop-route .brightpathiq-demo .iq-laptop-screen-content > div {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
