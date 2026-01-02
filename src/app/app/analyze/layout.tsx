import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forensic Lab | Deep-Media Analysis Engine",
    description: "Access the RealGen Forensic Lab for high-accuracy AI content detection. Analyze photos, videos, and documents for synthetic artifacts using multi-spectral neural fingerprints.",
};

export default function AnalyzeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
