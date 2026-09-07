import { memo, type ReactNode } from "react";
import type { Product } from "../../types/product";

interface CardProp {
    product: Product;
    renderProduct: (product: Product) => ReactNode;
}

const ProductCard = memo(({ product, renderProduct }: CardProp) => {
    return <>{renderProduct(product)}</>;
});

export default ProductCard;
