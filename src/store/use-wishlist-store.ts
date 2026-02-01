import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WishlistItem {
    id: string;
    name: string;
    price: string;
    image: string;
    category?: string;
    inStock: boolean;
    tagline?: string;
}

interface WishlistState {
    items: WishlistItem[];
    toggleItem: (item: WishlistItem) => void;
    removeItem: (id: string) => void;
    clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set) => ({
            items: [],
            toggleItem: (newItem) =>
                set((state) => {
                    const exists = state.items.some((item) => item.id === newItem.id);
                    if (exists) {
                        return { items: state.items.filter((item) => item.id !== newItem.id) };
                    }
                    return { items: [...state.items, newItem] };
                }),
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== id),
                })),
            clearWishlist: () => set({ items: [] }),
        }),
        {
            name: 'wishlist-storage',
        }
    )
);
