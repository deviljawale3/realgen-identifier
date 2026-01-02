import { Metadata } from "next";

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Verification Certificate ${params.id.substring(0, 8)} | RealGen`,
        description: `Official forensic verification certificate for asset ${params.id}. Verify media authenticity and check for neural artifacts on the RealGen truth ledger.`,
        robots: {
            index: false, // Don't index individual dynamic verification pages by default to avoid duplicates
            follow: true,
        },
    };
}

export default function VerifyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
