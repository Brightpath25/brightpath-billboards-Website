import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "BrightPath Billboards Privacy Policy",
  description: "Privacy Policy for BrightPath Billboards and BrightPathIQ services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PolicyPage sourceFile="PRIVACY-POLICY.md" />;
}
