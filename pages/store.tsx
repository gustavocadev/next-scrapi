import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { GetServerSideProps } from "next";
import List from "../components/List";

interface StoreProps {
    id: number;
    attributes: any[];
}

export default function Store({ data: guitars }: { data: StoreProps[] }) {
    // console.log(data);
    return (
        <Layout page="Tienda">
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>
                <List guitars={guitars} />
            </main>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`${process.env.API_URL}/api/guitarras?populate=*`);

    const { data } = await res.json();

    return {
        props: {
            data,
        },
    };
};
