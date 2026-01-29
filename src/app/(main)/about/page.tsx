import { LegalPageLayout, LegalSection } from "@/features/legal/components/legal-page-layout";

export default function AboutPage() {
    return (
        <LegalPageLayout title="About Us" lastUpdated="January 29, 2026">
            <LegalSection title="Our Story">
                <p>
                    Welcome to JossGift, where the art of gifting meets the finest craftsmanship.
                    Founded with a passion for creating memorable moments, we started as a small
                    boutique dedicated to curating the most exquisite chocolate collections and premium gifts.
                </p>
                <p>
                    From our humble beginnings, we have grown into a destination for those who seek
                    more than just a product—who seek a feeling. Every item in our collection is handpicked,
                    ensuring that it meets our rigorous standards for quality, aesthetics, and delight.
                </p>
            </LegalSection>

            <LegalSection title="Our Mission">
                <p>
                    At JossGift, our mission is simple: to make every occasion extraordinary. We believe that
                    a gift is a language of its own, capable of expressing love, gratitude, and celebration
                    better than words ever could.
                </p>
                <p>
                    We strive to bridge the gap between premium quality and accessibility, ensuring that
                    luxury is not just a privilege, but an experience available to everyone who wishes
                    to share joy.
                </p>
            </LegalSection>

            <LegalSection title="Craftsmanship & Quality">
                <p>
                    We take pride in the details. Our chocolates are sourced from the finest cocoa beans,
                    crafted by master chocolatiers who honor tradition while embracing innovation. Beyond
                    sweets, our packaging is designed to be as beautiful as the gift inside—sustainable,
                    elegant, and ready to impress.
                </p>
                <p>
                    Whether it&apos;s a signature truffle box or a custom-curated hamper, every JossGift
                    product is a testament to our commitment to excellence.
                </p>
            </LegalSection>

            <LegalSection title="Our Values">
                <ul className="space-y-2 pl-6 list-disc">
                    <li>
                        <strong>Excellence:</strong> We never settle for "good enough." Every product must be exceptional.
                    </li>
                    <li>
                        <strong>Integrity:</strong> We are transparent about our sourcing, pricing, and processes.
                    </li>
                    <li>
                        <strong>Customer Joy:</strong> Your happiness is our north star. We go the extra mile to ensure your experience is seamless.
                    </li>
                    <li>
                        <strong>Sustainability:</strong> We are committed to eco-friendly practices, from sourcing to packaging.
                    </li>
                </ul>
            </LegalSection>
        </LegalPageLayout>
    );
}
