import type { Metadata } from "next";
import LaunchClient from "./LaunchClient";

export const metadata: Metadata = {
  title: "Black Coffee Brunch | BrightPath Billboards Launch",
  description:
    "Join BrightPath Billboards for Black Coffee Brunch on August 14, 2026, at Burgers & Beer in Rancho Mirage. RSVP by August 7.",
};

export default function LaunchPage() {
  return <LaunchClient />;
}
