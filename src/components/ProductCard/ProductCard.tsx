import type { Product } from "../../types/product";

interface CardProp {
    product: Product;
    renderProduct: (product: Product) => void;
}

const ProductCard = ({ product, renderProduct }: CardProp) => {
    return <>{renderProduct(product)}</>;
};

export default ProductCard;
