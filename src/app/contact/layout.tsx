import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & Community | Join the RealGen Labs",
    description: "Get in touch with RealGen Labs for technical support, partnerships, or to join our community of digital forensic researchers and truth advocates.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
