import { WishlistHeader } from "@/features/wishlist/components/wishlist-header";
import { WishlistGrid } from "@/features/wishlist/components/wishlist-grid";
import { Container } from "@/components/molecules/container";
import { Section } from '@/components/molecules/section';

export default function WishlistPage() {

    return (
        <Section>
            <Container>
                <WishlistHeader />
                <WishlistGrid />
            </Container>
        </Section>
    )
}