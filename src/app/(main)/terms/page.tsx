import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | JossGift",
    description: "Read the terms and conditions for using JossGift services.",
};

export default function TermsOfServicePage() {
    return (
        <LegalPageLayout title="Terms of Service" lastUpdated="January 29, 2026">
            <LegalSection title="1. Acceptance of Terms">
                <p>
                    By accessing and using JossGift ("the Service"), you agree to be bound by these Terms of Service
                    and all applicable laws and regulations. If you do not agree with any of these terms, you are
                    prohibited from using or accessing this site.
                </p>
            </LegalSection>

            <LegalSection title="2. User Accounts">
                <p>
                    When you create an account with us, you must provide information that is accurate, complete,
                    and current at all times. Failure to do so constitutes a breach of the Terms, which may result
                    in immediate termination of your account on our Service.
                </p>
                <p>
                    You are responsible for safeguarding the password that you use to access the Service and for
                    any activities or actions under your password.
                </p>
            </LegalSection>

            <LegalSection title="3. Product Sales and Payments">
                <p>
                    All products listed on the Service are subject to availability. We reserve the right to limit
                    the quantities of any products or services that we offer.
                </p>
                <p>
                    Payments are processed through secure third-party payment processors. By providing a payment
                    method, you represent and warrant that you have the legal right to use such payment method.
                </p>
            </LegalSection>

            <LegalSection title="4. Prohibited Uses">
                <p>You agree not to use the Service:</p>
                <ul className="space-y-2 pl-6 list-disc">
                    <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</li>
                    <li>To harass, abuse, insult, harm, defame, slander, or intimidate others.</li>
                    <li>To upload or transmit viruses or any other type of malicious code.</li>
                    <li>To scrape, crawl, or spider any part of the Service without our express permission.</li>
                </ul>
            </LegalSection>

            <LegalSection title="5. Limitation of Liability">
                <p>
                    In no event shall JossGift, nor its directors, employees, partners, or agents, be liable for
                    any indirect, incidental, special, consequential or punitive damages, including without limitation,
                    loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                    to or use of or inability to access or use the Service.
                </p>
            </LegalSection>

            <LegalSection title="6. Governing Law">
                <p>
                    These Terms shall be governed and construed in accordance with the laws of the jurisdiction
                    in which JossGift operates, without regard to its conflict of law provisions.
                </p>
            </LegalSection>

            <LegalSection title="7. Changes to Terms">
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                    What constitutes a material change will be determined at our sole discretion.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
