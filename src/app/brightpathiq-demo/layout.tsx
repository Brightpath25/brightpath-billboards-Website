import type { ReactNode } from "react";

export default function BrightPathIQDemoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="iq-device-presentation">
      {children}
      <style>{`
        /* BrightPathIQ demo only: preserve the approved option #3 laptop,
           while replacing the old cropped/fixed-width presentation. */
        .iq-device-presentation .brightpathiq-demo .iq-laptop-stage {
          position: relative;
          width: min(100%, 1080px);
          height: auto;
          margin: clamp(2rem, 4vw, 3.25rem) auto 0;
          padding: 0 0 clamp(1.25rem, 2vw, 2rem);
          overflow: visible;
          text-align: center;
          isolation: isolate;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-stage::before {
          content: "";
          position: absolute;
          z-index: -2;
          top: 4%;
          left: 50%;
          width: 86%;
          height: 65%;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(178, 123, 24, 0.10) 0%, rgba(178, 123, 24, 0.035) 42%, transparent 72%);
          pointer-events: none;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-stage::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: 50%;
          bottom: 7.5%;
          width: 66%;
          height: 2.2%;
          min-height: 18px;
          transform: translateX(-50%);
          border-radius: 999px;
          background: rgba(36, 29, 22, 0.22);
          filter: blur(22px);
          pointer-events: none;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-frame {
          position: relative;
          width: min(100%, 1040px);
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
          filter: drop-shadow(0 24px 28px rgba(36, 29, 22, 0.12));
        }

        /* The live UI sits slightly inside the physical bezel so the laptop
           still reads as a real device rather than a dashboard pasted on top. */
        .iq-device-presentation .brightpathiq-demo .iq-laptop-screen {
          position: absolute;
          top: 5.1%;
          left: 13.35%;
          width: 73.3%;
          height: 52.4%;
          overflow: hidden;
          border: 0;
          border-radius: 0.3rem;
          background: #f7f5f0;
          box-shadow: 0 0 0 1px rgba(36, 29, 22, 0.12) inset;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content {
          height: 100%;
          overflow: auto;
          overscroll-behavior: contain;
          scrollbar-gutter: stable;
          scrollbar-width: thin;
          scrollbar-color: rgba(178, 123, 24, 0.48) rgba(36, 29, 22, 0.05);
          background: #f7f5f0;
          text-align: left;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: rgba(178, 123, 24, 0.48);
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar-track {
          background: rgba(36, 29, 22, 0.05);
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content > div {
          min-width: 0;
          min-height: 100%;
          padding: 0.85rem !important;
          border: 0 !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          text-align: left;
        }

        .iq-device-presentation .brightpathiq-demo .iq-laptop-caption {
          position: relative;
          width: min(100%, 640px);
          margin: -0.25rem auto 0;
          padding: 0 1rem;
          color: #756a5e;
          font-size: 0.78rem;
          line-height: 1.55;
          letter-spacing: 0.01em;
        }

        /* Keep the guide in the viewport rather than clipping it inside the
           physical display when visitors reopen the walkthrough. */
        .iq-device-presentation .brightpathiq-demo .iq-guide-backdrop {
          position: fixed;
        }

        @media (max-width: 900px) {
          .iq-device-presentation .brightpathiq-demo .iq-laptop-stage {
            margin-top: 2rem;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-frame {
            width: 100%;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content > div {
            padding: 0.7rem !important;
          }
        }

        /* Mobile rule: show the whole device. Never return to the old 680px
           fixed frame + clipped 355px stage treatment. */
        @media (max-width: 640px) {
          .iq-device-presentation .brightpathiq-demo .iq-laptop-stage {
            width: 100% !important;
            height: auto !important;
            margin-top: 1.5rem !important;
            padding-bottom: 0.75rem;
            overflow: visible !important;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-frame {
            width: 100% !important;
            margin: 0 auto !important;
            transform: none !important;
            transform-origin: center top !important;
            filter: drop-shadow(0 14px 18px rgba(36, 29, 22, 0.10));
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen {
            top: 5.15%;
            left: 13.45%;
            width: 73.1%;
            height: 52.2%;
            border-radius: 0.18rem;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content {
            scrollbar-width: none;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content::-webkit-scrollbar {
            display: none;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content > div {
            padding: 0.45rem !important;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-caption {
            margin-top: 0.15rem !important;
            padding: 0 0.75rem !important;
            font-size: 0.7rem !important;
          }

          .iq-device-presentation .brightpathiq-demo .iq-laptop-stage::after {
            bottom: 8%;
            width: 70%;
            min-height: 10px;
            filter: blur(13px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .iq-device-presentation .brightpathiq-demo .iq-laptop-frame,
          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen,
          .iq-device-presentation .brightpathiq-demo .iq-laptop-screen-content {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
