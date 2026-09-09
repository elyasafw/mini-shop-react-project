import { useMemo, useState } from "react";
import { renderProduct } from "../components/ProductCard/renderProduct";
import ProductsList from "../components/ProductsList/ProductsList";
import SearchBar from "../components/SearchBar/SearchBar";
import useFetch, { API } from "../hooks/useFetch";
import type { Product } from "../types/product";

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
            <div
                style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                <h1>Products</h1>
                <SearchBar setFilter={setFilter} />
            </div>
            {currentProductsList && currentProductsList.length > 0 ? (
                <ProductsList
                    products={currentProductsList}
                    renderProduct={renderProduct}
                />
            ) : (
                <p>No matching search results found ...</p>
            )}
        </>
    );
};

export default HomePage;
