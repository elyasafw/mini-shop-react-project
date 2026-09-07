import { useEffect, useRef } from "react";
import styles from "./SearchBar.module.css";

interface SearchProps {
    setFilter: (filter: string) => void;
}

const SearchBar = ({ setFilter }: SearchProps) => {
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
    }, []);

    return (
        <div className={styles.container}>
            Search
            <input
                className={styles.searchInput}
                ref={searchRef}
                type="text"
                placeholder="Search Product"
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
