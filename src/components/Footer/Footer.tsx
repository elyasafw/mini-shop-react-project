import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p>
                © Mini shop {new Date().getFullYear()} &bull; All
                rights reserved
            </p>
        </footer>
    );
};

export default Footer;
