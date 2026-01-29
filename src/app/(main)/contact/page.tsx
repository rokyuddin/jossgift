import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";

export default function ContactPage() {
    return (
        <LegalPageLayout title="Contact Us" lastUpdated="January 29, 2026">
            <LegalSection title="We're Here to Help">
                <p>
                    Have a question, suggestion, or just want to say hello? We'd love to hear from you.
                    At JossGift, providing exceptional customer service is at the heart of what we do.
                </p>
                <p>
                    Whether you need assistance with an order, advice on the perfect gift, or have inquiries
                    about our corporate gifting options, our dedicated team is ready to assist you.
                </p>
            </LegalSection>

            <LegalSection title="Get in Touch">
                <div className="gap-6 grid md:grid-cols-2">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">Customer Support</h3>
                        <p>
                            For general inquiries and order support:<br />
                            <a href="mailto:support@jossgift.com" className="text-primary hover:underline">support@jossgift.com</a>
                        </p>
                    </div>
                </div>
            </LegalSection>

            <LegalSection title="Business Hours">
                <p>
                    Our support team is available during the following hours (EST):
                </p>
                <ul className="space-y-2 mt-2 pl-6 list-disc">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                    <li>Sunday: Closed</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-sm">
                    We aim to respond to all emails within 24 hours during business days.
                </p>
            </LegalSection>

            <LegalSection title="Corporate Gifting & Partnerships">
                <p>
                    Interested in bulk orders or customized corporate gifts? We specialize in creating
                    branded experiences that leave a lasting impression.
                </p>
                <p>
                    Reach out to our partnerships team at <a href="mailto:corporate@jossgift.com" className="text-primary hover:underline">corporate@jossgift.com</a> to discuss your needs.
                </p>
            </LegalSection>

            <LegalSection title="Mailing Address">
                <p>
                    JossGift Headquarters<br />
                    123 Confectionery Lane, Suite 100<br />
                    New York, NY 10012<br />
                    United States
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
