import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/product";
import styles from "./ProductDetails.module.css";

const ProductDetails = ({ product }: { product: Product }) => {
    const navigate = useNavigate();
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
                <div className={styles.btns}>
                    <button>Add to favorites</button>
                    <button onClick={() => navigate(-1)}>
                        Back to products
                    </button>
                </div>
            </section>
        </article>
    );
};

export default ProductDetails;
