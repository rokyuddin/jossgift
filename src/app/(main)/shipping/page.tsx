import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";

export default function ShippingPage() {
    return (
        <LegalPageLayout title="Shipping & Delivery" lastUpdated="January 29, 2026">
            <LegalSection title="Shipping Overview">
                <p>
                    At JossGift, we understand that timely delivery is crucial, especially when it comes to gifting.
                    We partner with reliable carriers to ensure your gifts arrive safely and on time.
                    Unless otherwise noted, all orders are processed and shipped from our New York facility.
                </p>
            </LegalSection>

            <LegalSection title="Processing Time">
                <p>
                    Orders placed before 1:00 PM EST on business days are typically processed and shipped the same day.
                    Orders placed after this time or on weekends/holidays will be processed next business day.
                    During peak seasons (Valentine's Day, Mother's Day, Christmas), processing may take an additional 24-48 hours.
                </p>
            </LegalSection>

            <LegalSection title="Shipping Options & Rates">
                <div className="border border-border rounded-lg overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-border border-b font-medium text-foreground">
                            <tr>
                                <th className="px-4 py-3">Service</th>
                                <th className="px-4 py-3">Estimated Delivery</th>
                                <th className="px-4 py-3">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            <tr>
                                <td className="px-4 py-3 font-medium">Standard Ground</td>
                                <td className="px-4 py-3">3-5 Business Days</td>
                                <td className="px-4 py-3">$9.95 (Free over $100)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">Expedited</td>
                                <td className="px-4 py-3">2-3 Business Days</td>
                                <td className="px-4 py-3">$19.95</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 font-medium">Overnight</td>
                                <td className="px-4 py-3">Next Business Day</td>
                                <td className="px-4 py-3">$34.95</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">
                    *Rates apply to the contiguous United States. P.O. Box addresses are shipped via Standard Ground only.
                </p>
            </LegalSection>

            <LegalSection title="Warm Weather Shipping">
                <p>
                    During warmer months (May – September), or when shipping to warm climates, we utilize special
                    insulated packaging and ice packs to ensure your chocolates arrive in perfect condition.
                </p>
                <p>
                    To prevent melting over weekends, orders placed with Warm Weather Shipping after Wednesday at 1 PM EST
                    will be held until the following Monday.
                </p>
            </LegalSection>

            <LegalSection title="International Shipping">
                <p>
                    We currently ship to Canada. International shipping rates are calculated at checkout based on
                    weight and destination. Please note that customers are responsible for any customs duties,
                    taxes, or import fees that may apply.
                </p>
            </LegalSection>

            <LegalSection title="Tracking Your Order">
                <p>
                    You will receive a shipment confirmation email containing your tracking number once your label is created.
                    Please allow up to 24 hours for the tracking information to update in the carrier's system.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
