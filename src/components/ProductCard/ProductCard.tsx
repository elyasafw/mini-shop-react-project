import { memo } from "react";
import type { Product } from "../../types/product";

interface CardProp {
    product: Product;
    renderProduct: (product: Product) => void;
}

const ProductCard = memo(({ product, renderProduct }: CardProp) => {
    return <>{renderProduct(product)}</>;
});

ProductCard.displayName = "ProductCard";

export default ProductCard;
