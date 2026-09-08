import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import useFetch, { API } from "../hooks/useFetch";
import type { Product } from "../types/product";

const ProductPage = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useFetch<Product>(`${API}/${id}`);

    if (loading) {
        return <p>Loading product ...</p>;
    }
    if (error !== null) {
        console.log(error);
        return <p>ERROR: {error}</p>;
    }

    return <ProductDetails product={product} />;
};

export default ProductPage;
