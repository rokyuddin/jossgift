import React from 'react';
import { Container } from "@/components/molecules/container";
import { FilterSidebar } from "@/features/products/components/filter-sidebar";
import { ProductsHeader } from "@/features/products/components/products-header";
import { ProductsGrid } from "@/features/products/components/products-grid";
import { Section } from '@/components/molecules/section';

export default function ProductsPage() {
    return (
        <Section>
        <Container className='flex lg:flex-row flex-col gap-12 pt-12'>
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block top-0 sticky w-72 h-fit shrink-0">
                    <FilterSidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1 space-y-10">
                    <ProductsHeader />
                    <ProductsGrid />
                </main>
        </Container>
        </Section>
    );
}
