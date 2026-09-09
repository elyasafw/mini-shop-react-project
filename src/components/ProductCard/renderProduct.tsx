import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import styles from "./ProductCard.module.css";

export interface RenderContext {
    isFavorite: boolean;
    onToggle: (product: Product) => void;
}

export type ProductRenderer = (
    product: Product,
    ctx: RenderContext,
) => ReactNode;

export const renderProduct: ProductRenderer = (
    product,
    { isFavorite, onToggle },
) => {
    return (
        <article className={styles.card}>
            <Link className={styles.imgSectin} to={`products/${product.id}`}>
                <img
                    className={styles.image}
                    src={product.image}
                    alt={`${product.title} image`}
                />
            </Link>
            <h4 title={product.title} className={styles.title}>
                {product.title}
            </h4>
            <section className={styles.content}>
                <p className={styles.price}>
                    <b>$ {product.price}</b>
                </p>
                <button onClick={() => onToggle(product)}>
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </section>
        </article>
    );
};

export const renderFavorite: ProductRenderer = (product, { onToggle }) => {
    return (
        <article className={styles.card}>
            <Link className={styles.imgSectin} to={`/products/${product.id}`}>
                <span className={styles.favoriteTag}>
                    <h2>❤️</h2>
                </span>
                <img
                    className={styles.image}
                    src={product.image}
                    alt={`${product.title} image`}
                />
            </Link>
            <h4 title={product.title} className={styles.title}>
                {product.title}
            </h4>
            <section className={styles.content}>
                <p className={styles.price}>
                    <b>$ {product.price}</b>
                </p>
                <button onClick={() => onToggle(product)}>🗑️ Remove</button>
            </section>
        </article>
    );
};
