import {
    Hero,
    ShopByOccasion,
    BestSellers,
    NewArrivals,
    WhyJossGift,
    HowItWorks,
    CustomerReviews,
    SocialGallery,
    FinalCTA
} from '@/features/landing'

export default function LandingPage() {
    return (
        <div className="flex flex-col">
            <Hero />
            <ShopByOccasion />
            <NewArrivals />
            <BestSellers />
            <WhyJossGift />
            <HowItWorks />
            <CustomerReviews />
            <FinalCTA />
            <SocialGallery />
        </div>
    )
}
