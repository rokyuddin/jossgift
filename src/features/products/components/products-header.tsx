"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/atoms/breadcrumb";
import { Input } from "@/components/atoms/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/atoms/sheet";
import { FilterSidebar } from "./filter-sidebar";

export function ProductsHeader() {
    return (
        <header className="space-y-6">
            <div className="flex flex-col gap-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Products</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="flex md:flex-row flex-col justify-between md:items-end gap-4">
                    <div className="space-y-1">
                        <h1 className="font-semibold text-4xl tracking-tight">All Gift Boxes</h1>
                        <p className="max-w-lg text-muted-foreground">
                            Curated chocolate gift boxes crafted from premium ingredients and elegant packaging to elevate every gifting moment.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Select defaultValue="featured">
                            <SelectTrigger className="rounded-xl w-[180px] h-12">
                                <span className="mr-1 text-muted-foreground">Sort by:</span>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="featured">Featured</SelectItem>
                                <SelectItem value="newest">Newest Arrivals</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Mobile Filter Trigger */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden rounded-xl size-12">
                                    <SlidersHorizontal className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="p-6 pt-10 w-[300px] h-full">
                                <FilterSidebar className="pr-0" />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

            <div className="group relative">
                <Search className="top-1/2 left-4 absolute size-5 text-muted-foreground group-focus-within:text-primary transition-colors -translate-y-1/2" />
                <Input
                    placeholder="Search for gift boxes, flavors, or occasions..."
                    className="bg-muted/50 pr-4 pl-12 border-none rounded-2xl focus-visible:ring-1 focus-visible:ring-primary/20 h-14 placeholder:text-muted-foreground/60 text-lg transition-all"
                />
            </div>
        </header>
    );
}
