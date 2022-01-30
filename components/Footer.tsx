import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="contenedor">
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/about">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/store">Tienda</Link>
                </nav>
                <p className={styles.copyright}>
                    Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}
