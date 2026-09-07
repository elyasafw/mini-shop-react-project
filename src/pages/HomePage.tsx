import styles from "../components/ProductCard/ProductCard.module.css";
import ProductsList from "../components/ProductsList/ProductsList";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product";

const API = "https://fakestoreapi.com/products";

const HomePage = () => {
    const { data: products, loading, error } = useFetch<Product[]>(API);

    if (loading) {
        return <p>Loading products ...</p>;
    }
    if (error !== null) {
        console.log(error);
        return <p>ERROR: {error}</p>;
    }

    const renderProduct = (product: Product) => {
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
                    {product.title.slice(0, 20)} ...
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

    return (
        <>
        <h1>Products</h1>
            <ProductsList products={products} renderProduct={renderProduct} />
        </>
    );
};

export default HomePage;
