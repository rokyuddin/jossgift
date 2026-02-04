import { CartList } from "@/features/checkout/components/cart-list";
import { OrderSummary } from "@/features/checkout/components/order-summary";
import { ShippingProgress } from "@/features/checkout/components/shipping-progress";
import { GiftOptions } from "@/features/checkout/components/gift-options";
import { Section } from "@/components/molecules/section";
import { Container } from "@/components/molecules/container";
import { SectionHeading } from "@/components/molecules/section-heading";
import { RecommendationProducts } from "@/features/checkout/components/recommendation-products";


export default function CheckoutPage() {
    return (
        <Section>
            <Container>
                <SectionHeading
                    title="Shopping Cart"
                    subtitle="(2 items)"
                    align="left"
                    className="mb-6 md:mb-8"
                    subtitleClassName="mx-0"
                />

                <div className="items-start gap-12 grid grid-cols-1 lg:grid-cols-12">
                    {/* Main Content Area */}
                    <div className="space-y-8 lg:col-span-8">
                        <ShippingProgress />

                        <section className="bg-card/50 p-2 md:p-6 border border-border/40 rounded-4xl">
                            <CartList />
                        </section>

                        <GiftOptions />
                    </div>

                    {/* Sidebar / Order Summary */}
                    <aside className="lg:col-span-4">
                        <OrderSummary />
                    </aside>
                </div>

                {/* Recommendations Section */}
                <RecommendationProducts />
            </Container>
        </Section>
    );
}
