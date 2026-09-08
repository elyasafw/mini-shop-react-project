import { useMemo, useState } from "react";
import { renderFavorite } from "../components/ProductCard/renderProduct";
import ProductsList from "../components/ProductsList/ProductsList";
import SearchBar from "../components/SearchBar/SearchBar";
import UseFavorites from "../store/favoritesStore";

const FavoritesPage = () => {
    const { favoritesProducts } = UseFavorites();
    const [filter, setFilter] = useState<string>("");

    const currentFavoritesList = useMemo(() => {
        return favoritesProducts?.filter((product) =>
            product.title.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [filter, favoritesProducts]);

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
                <h1>Favorites</h1>
                <SearchBar setFilter={setFilter} />
            </div>
            {favoritesProducts.length === 0 ? (
                <p>There are no products here yet</p>
            ) : currentFavoritesList.length > 0 ? (
                <ProductsList
                    products={currentFavoritesList}
                    renderProduct={renderFavorite}
                />
            ) : (
                <p>No matching search results found ...</p>
            )}
        </>
    );
};

export default FavoritesPage;
