import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | JossGift",
    description: "Learn how JossGift collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout title="Privacy Policy" lastUpdated="January 29, 2026">
            <LegalSection title="1. Overview">
                <p>
                    At JossGift, we value your privacy and are committed to protecting your personal data.
                    This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website
                    or use our services.
                </p>
            </LegalSection>

            <LegalSection title="2. Information We Collect">
                <p>We may collect several types of information from and about users of our website, including:</p>
                <ul className="space-y-3 pl-6 list-disc">
                    <li><strong>Personal Identity Information:</strong> Name, email address, phone number, and shipping/billing addresses.</li>
                    <li><strong>Transaction Details:</strong> Information about payments and the products you purchase from us.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, time zone setting, and location data.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                </ul>
            </LegalSection>

            <LegalSection title="3. How We Use Your Data">
                <p>We use the information we collect to:</p>
                <ul className="space-y-3 pl-6 list-disc">
                    <li>Process and deliver your orders efficiently.</li>
                    <li>Manage your account and provide customer support.</li>
                    <li>Send you updates, newsletters, and promotional materials (with your consent).</li>
                    <li>Improve our website, products, and overall customer experience.</li>
                    <li>Comply with legal obligations and prevent fraudulent activities.</li>
                </ul>
            </LegalSection>

            <LegalSection title="4. Data Storage and Security">
                <p>
                    Your data is stored on secure servers and we implement a variety of security measures to maintain the
                    safety of your personal information. We use industry-standard encryption protocols for data transmission
                    and storage.
                </p>
                <p>
                    We retain your personal data only for as long as necessary to fulfill the purposes we collected it for,
                    including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
            </LegalSection>

            <LegalSection title="5. Your Privacy Rights">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul className="space-y-3 pl-6 list-disc">
                    <li><strong>Access:</strong> The right to request copies of your personal data.</li>
                    <li><strong>Rectification:</strong> The right to request that we correct any information you believe is inaccurate.</li>
                    <li><strong>Erasure:</strong> The right to request that we erase your personal data under certain conditions.</li>
                    <li><strong>Data Portability:</strong> The right to request that we transfer the data we have collected to another organization.</li>
                </ul>
            </LegalSection>

            <LegalSection title="6. Contact Us">
                <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact our
                    Data Protection Officer at <strong>privacy@jossgift.com</strong>.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
