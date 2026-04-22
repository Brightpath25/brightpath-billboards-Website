import type { Metadata } from "next";
import LaunchClient from "./LaunchClient";

export const metadata: Metadata = {
  title: "BrightPath Launch | Coachella Valley Mobile Billboards",
  description:
    "BrightPath is launching in the Coachella Valley. Public offer, limited campaign slots, first come, first served. Secure a 3-month subscription campaign today.",
};

export default function LaunchPage() {
  return <LaunchClient />;
}
