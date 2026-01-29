import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | JossGift",
    description: "Learn about our refund and return policies for JossGift products.",
};

export default function RefundPolicyPage() {
    return (
        <LegalPageLayout title="Refund & Return Policy" lastUpdated="January 29, 2026">
            <LegalSection title="1. Overview">
                <p>
                    We want you to be completely satisfied with your purchase. If you are not entirely happy
                    with your order, we're here to help.
                </p>
            </LegalSection>

            <LegalSection title="2. Returns">
                <p>
                    Due to the perishable nature of our products (chocolates and gift boxes), returns are handled
                    on a case-by-case basis. Generally, we do not accept returns of food items for health and
                    safety reasons.
                </p>
                <p>
                    However, if your order arrives damaged or incorrect, please notify us within 24 hours of
                    receipt with photo evidence.
                </p>
            </LegalSection>

            <LegalSection title="3. Refunds">
                <p>
                    Once we inspect the evidence of damage or error, we will notify you of the approval or
                    rejection of your refund.
                </p>
                <p>
                    If approved, your refund will be processed, and a credit will automatically be applied
                    to your original method of payment within a certain amount of days.
                </p>
            </LegalSection>

            <LegalSection title="4. Exchanges">
                <p>
                    We only replace items if they are defective or damaged upon arrival. If you need to
                    exchange it for the same item, send us an email at <strong>support@jossgift.com</strong>.
                </p>
            </LegalSection>

            <LegalSection title="5. Shipping Costs">
                <p>
                    Shipping costs are non-refundable. If you receive a refund, the cost of original shipping
                    will be deducted from your refund.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}