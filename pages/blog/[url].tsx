import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Entry.module.css";

interface Attributes {
    titulo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    resumen: string;
    contenido: string;
    imagen: any;
}

interface BlogReadProps {
    attributes: Attributes;
    id: number;
}

export default function BlogRead({
    entryFound,
}: {
    entryFound: BlogReadProps;
}) {
    console.log(entryFound);
    const { attributes } = entryFound;
    const { imagen, contenido, publishedAt, titulo } = attributes;

    const { data: dataImage } = imagen;

    const { attributes: attributesData } = dataImage;

    const { url } = attributesData;
    return (
        <Layout page="ID">
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entry}>
                    <Image
                        layout="responsive"
                        width={800}
                        height={600}
                        src={url}
                        alt={`imagen de entra ${titulo}`}
                    />
                    <div className={styles.content}>
                        <p className={styles.date}>{publishedAt}</p>
                        <p className={styles.text}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { url } = query;
    console.log(url);
    const res = await fetch(`${process.env.API_URL}/api/blogs?populate=*`);

    const { data } = await res.json();
    const entryFound = data.find((el: any) => el.attributes.url === url);

    return {
        props: { entryFound },
    };
};
