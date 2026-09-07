import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p>
                <b>
                    © Mini shop {new Date().getFullYear()} &bull; All rights
                    reserved
                </b>
            </p>
        </footer>
    );
};

export default Footer;
