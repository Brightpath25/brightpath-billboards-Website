export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Campaigns", href: "/#campaigns" },
  { label: "Events", href: "/events" },
  { label: "BrightPathIQ", href: "https://bpmobilebillboardsiq.live", external: true },
  { label: "About", href: "/#about" },
];

export const campaignHref = "/quote";
