import { ProductDetailsView } from "@/features/landing";

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;

    // In a real app, you would fetch product data here using the slug
    console.log("Loading product:", slug);

    return <ProductDetailsView />;
}
