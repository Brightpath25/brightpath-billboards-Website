import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "BrightPath Billboards Refund Policy",
  description: "Refund, cancellation, and credit policy for BrightPath Billboards and BrightPathIQ services.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <PolicyPage sourceFile="REFUND-POLICY.md" />;
}
