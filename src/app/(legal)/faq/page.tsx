import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/atoms/accordion";

export default function FAQPage() {
    return (
        <LegalPageLayout title="Frequently Asked Questions" lastUpdated="January 29, 2026">
            <LegalSection title="Ordering & Payments">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                        <AccordionContent>
                            We accept all major credit cards including Visa, Mastercard, American Express, and Discover.
                            We also offer accelerated checkout options via Apple Pay, Google Pay, and PayPal for your convenience.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Can I change or cancel my order after placing it?</AccordionTrigger>
                        <AccordionContent>
                            We process orders quickly to ensure fast delivery. If you need to make changes, please contact
                            us at support@jossgift.com within 1 hour of placing your order. We cannot guarantee changes
                            once the order has been processed by our fulfillment team.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Do you offer gift wrapping?</AccordionTrigger>
                        <AccordionContent>
                            Yes! All JossGift products come in our signature premium packaging. You can also add a
                            personalized gift note at checkout free of charge.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </LegalSection>

            <LegalSection title="Shipping & Delivery">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="ship-1">
                        <AccordionTrigger>Where do you ship to?</AccordionTrigger>
                        <AccordionContent>
                            We currently ship throughout the United States and Canada. We are working on expanding our
                            international shipping options to bring JossGift to more countries soon.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ship-2">
                        <AccordionTrigger>How can I track my order?</AccordionTrigger>
                        <AccordionContent>
                            Once your order ships, you will receive a confirmation email with a tracking number.
                            You can also track the status of your order by logging into your account on our website.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </LegalSection>

            <LegalSection title="Products & Quality">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="prod-1">
                        <AccordionTrigger>Are your chocolates gluten-free?</AccordionTrigger>
                        <AccordionContent>
                            Many of our chocolates are gluten-free, but they are produced in a facility that handles
                            wheat, nuts, and dairy. Please check the specific product page for detailed allergen information
                            and ingredients lists.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="prod-2">
                        <AccordionTrigger>How should I store my chocolates?</AccordionTrigger>
                        <AccordionContent>
                            To maintain freshness and quality, store your chocolates in a cool, dry place away from
                            direct sunlight (ideally between 60°F and 70°F). Do not refrigerate unless necessary,
                            as this can affect the texture and bloom.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </LegalSection>
        </LegalPageLayout>
    );
}
