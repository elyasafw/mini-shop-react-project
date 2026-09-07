import { useMemo, useState } from "react";
import styles from "../components/ProductCard/ProductCard.module.css";
import ProductsList from "../components/ProductsList/ProductsList";
import SearchBar from "../components/SearchBar/SearchBar";
import useFetch from "../hooks/useFetch";
import type { Product } from "../types/product";

const API = "https://fakestoreapi.com/products";

const HomePage = () => {
    const { data: products, loading, error } = useFetch<Product[]>(API);
    const [filter, setFilter] = useState<string>("");

    const currentProductsList = useMemo(() => {
        return products?.filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [filter, products]);

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

    return (
        <>
            <div style={{display: "flex", alignContent: "center", justifyContent: "space-between"}}>
                <h1>Products</h1>
                <SearchBar setFilter={setFilter} />
            </div>
            <ProductsList
                products={currentProductsList}
                renderProduct={renderProduct}
            />
        </>
    );
};

export default HomePage;
