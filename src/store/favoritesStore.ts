import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

interface FavoritesState {
    favoritesProducts: Product[];
    toggleFavorites: (product: Product) => void;
}

const UseFavorites = create<FavoritesState>()(
    persist(
        (set) => ({
            favoritesProducts: [],
            toggleFavorites: (product) =>
                set((state) => {
                    const isFavorite = state.favoritesProducts.some(
                        (p) => p.id === product.id,
                    );

                    if (isFavorite) {
                        return {
                            favoritesProducts: state.favoritesProducts.filter(
                                (p) => p.id !== product.id,
                            ),
                        };
                    } else {
                        return {
                            favoritesProducts: [
                                ...state.favoritesProducts,
                                product,
                            ],
                        };
                    }
                }),
        }),
        { name: "favoritesProducts" },
    ),
);

export default UseFavorites;
