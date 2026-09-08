import { memo } from "react";
import UseFavorites from "../../store/favoritesStore";
import type { Product } from "../../types/product";
import type { ProductRenderer } from "./renderProduct";

interface CardProp {
    product: Product;
    renderProduct: ProductRenderer;
}

const ProductCard = memo(({ product, renderProduct }: CardProp) => {
    const isFavorite = UseFavorites((s) =>
        s.favoritesProducts.some((p) => p.id === product.id),
    );
    const toggleFavorites = UseFavorites((s) => s.toggleFavorites);

    return <>{renderProduct(product, { isFavorite, onToggle: toggleFavorites })}</>;
});

export default ProductCard;
