import React from 'react';
import { Container } from "@/components/molecules/container";
import { FilterSidebar } from "@/features/products/components/filter-sidebar";
import { ProductsHeader } from "@/features/products/components/products-header";
import { ProductsGrid } from "@/features/products/components/products-grid";

export default function ProductsPage() {
    return (
        <Container className="py-12 md:py-20 lg:py-24">
            <div className="flex lg:flex-row flex-col gap-12">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block top-24 sticky w-72 h-fit shrink-0">
                    <FilterSidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1 space-y-10">
                    <ProductsHeader />
                    <ProductsGrid />
                </main>
            </div>
        </Container>
    );
}
