import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Entry from "../components/Entry";
import styles from "../styles/Blog.module.css";
import ListBlog from "../components/ListBlog";

export default function Blog({ data }: { data: any }) {
    return (
        <Layout page="Blog">
            <main className="contenedor">
                <ListBlog data={data} />
            </main>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.API_URL}/api/blogs?populate=*`);
    const { data } = await res.json();

    return {
        props: { data },
    };
};
