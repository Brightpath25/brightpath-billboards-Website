"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Campaign360Viewer = dynamic(() => import("@/components/Campaign360Viewer"), {
  ssr: false,
  loading: () => <div className="py-24 bg-black-hero text-center"><p className="text-gold-highlight">Loading 3D preview...</p></div>,
});

export function ScrollRevealController() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -150px" },
    );

    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}

export function HomepageCampaignViewer() {
  return <Campaign360Viewer />;
}
