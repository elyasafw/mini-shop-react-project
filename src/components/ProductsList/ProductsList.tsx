import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsList.module.css"

interface ListProp {
    products: Product[];
    renderProduct: (product: Product) => void;
}

const ProductsList = ({ products, renderProduct }: ListProp) => {
    return (
        <div className={styles.container}>
            {products.map((p) => (
                <ProductCard
                    key={p.id}
                    product={p}
                    renderProduct={renderProduct}
                />
            ))}
        </div>
    );
};

export default ProductsList;
