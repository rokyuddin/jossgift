import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";

export default function ReturnsPage() {
    return (
        <LegalPageLayout title="Returns & Refunds" lastUpdated="January 29, 2026">
            <LegalSection title="Our Promise">
                <p>
                    We want you and your recipients to be absolutely charmed by your JossGift experience.
                    If something isn't quite right, we are here to help. Due to the perishable nature of our products,
                    we have specific guidelines for returns and refunds to ensure safety and quality.
                </p>
            </LegalSection>

            <LegalSection title="Return Policy">
                <p>
                    <strong>Perishable Items (Chocolates & Foods):</strong> For health and safety reasons, we cannot accept returns
                    on perishable food items. However, if your order arrived damaged, melted, or incorrect, please
                    contact us immediately.
                </p>
                <p>
                    <strong>Non-Perishable Items:</strong> Unopened non-perishable merchandise may be returned within 30 days
                    of delivery for a full refund or exchange. Items must be in their original packaging and condition.
                </p>
            </LegalSection>

            <LegalSection title="Damaged or Defective Items">
                <p>
                    We take great care in packaging your gifts, but accidents can happen in transit. If your order
                    arrives damaged or defective:
                </p>
                <ul className="space-y-2 mt-2 pl-6 list-disc">
                    <li>Take photos of the product and the shipping box.</li>
                    <li>Contact us at <a href="mailto:support@jossgift.com" className="text-primary hover:underline">support@jossgift.com</a> within 48 hours of delivery.</li>
                    <li>Include your order number and the photos in your email.</li>
                </ul>
                <p className="mt-4">
                    We will happily replace the item at no cost to you or issue a full refund, including shipping charges.
                </p>
            </LegalSection>

            <LegalSection title="Refund Process">
                <p>
                    Once your refund request is approved, credit will automatically be applied to your original method
                    of payment. Please allow 5-10 business days for your bank or credit card company to process
                    and post the refund.
                </p>
            </LegalSection>

            <LegalSection title="Exchanges">
                <p>
                    We only replace items if they are defective or damaged. If you need to exchange an item for
                    the same item due to damage, send us an email at support@jossgift.com.
                </p>
            </LegalSection>

            <LegalSection title="Gift Returns">
                <p>
                    If the item was marked as a gift when purchased and shipped directly to you, you'll receive
                    a gift credit for the value of your return. Once the returned item is received (if applicable),
                    a gift certificate will be emailed to you.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
