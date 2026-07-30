import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "BrightPath Billboards Terms of Service",
  description: "Terms of Service for BrightPath Billboards and BrightPathIQ services.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return <PolicyPage sourceFile="TERMS-OF-SERVICE.md" />;
}
