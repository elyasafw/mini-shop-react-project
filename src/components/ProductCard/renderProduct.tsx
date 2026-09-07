import type { ReactNode } from "react";
import type { Product } from "../../types/product";
import styles from "./ProductCard.module.css";

const renderProduct = (product: Product): ReactNode => {
    return (
        <article className={styles.card}>
            <section className={styles.imgSectin}>
                <img
                    className={styles.image}
                    src={product.image}
                    alt={`${product.title} image`}
                />
            </section>
            <h4 className={styles.title}>
                {product.title.length > 20
                    ? product.title.slice(0, 20) + " ..."
                    : product.title}
            </h4>
            <section className={styles.content}>
                <p className={styles.price}>
                    <b>{product.price} $</b>
                </p>
                <button>🤍</button>
            </section>
        </article>
    );
};

export default renderProduct;
