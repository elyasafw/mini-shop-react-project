import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.container}>
            <h3>Mini Shop</h3>
            <nav>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? styles.activateNavLink
                            : styles.deactivateNavLink
                    }
                    to={"/"}
                >
                    Products
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? styles.activateNavLink
                            : styles.deactivateNavLink
                    }
                    to={"favorites"}
                >
                    Favorites
                </NavLink>
            </nav>
            <ThemeToggle />
        </header>
    );
};

export default Header;
