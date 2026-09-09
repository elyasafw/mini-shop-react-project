import { useNavigate } from "react-router-dom";
import UseFavorites from "../../store/favoritesStore";
import type { Product } from "../../types/product";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product }: { product: Product }) => {
    const navigate = useNavigate();
    const isFavorite = UseFavorites((s) =>
        s.favoritesProducts.some((p) => p.id === product.id),
    );
    const toggleFavorites = UseFavorites((s) => s.toggleFavorites);
    return (
        <article className={styles.container}>
            <section className={styles.imgSection}>
                <img
                    className={styles.img}
                    src={product.image}
                    alt={`${product.title}`}
                />
            </section>
            <section className={styles.content}>
                <h1>{product.title}</h1>
                <span className={styles.categoryTag}>
                    &#127991;&#xFE0E; {product.category}
                </span>
                <h1 className={styles.price}>
                    <b>$ {product.price}</b>
                </h1>
                <p className={styles.desc}>{product.description}</p>
                <div className={styles.btnsContainer}>
                    <button
                        className={styles.btns}
                        onClick={() => toggleFavorites(product)}
                    >
                        {isFavorite
                            ? "♥ Remove from favorites"
                            : "♡ Add to favorites"}
                    </button>
                    <button
                        className={styles.btns}
                        onClick={() => navigate(-1)}
                    >
                        → Back to products
                    </button>
                </div>
            </section>
        </article>
    );
};

export default ProductDetails;
