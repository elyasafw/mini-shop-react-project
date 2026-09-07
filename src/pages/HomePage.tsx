import { useMemo, useState } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import renderProduct from "../components/ProductCard/renderProduct";
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
