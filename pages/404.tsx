import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
    return (
        <Layout page="404">
            <section className={styles.notFound}>
                <h2>Page Not Found</h2>

                <Link href="/">Volver al inicio</Link>
            </section>
        </Layout>
    );
}
