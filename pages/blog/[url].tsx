import { GetServerSideProps } from "next"
import Image from "next/image"
import React from "react"
import Layout from "../../components/Layout"
import styles from "../../styles/Entry.module.css"
import { BlogResponse, Datum } from "../../types/BlogResponse"

type Props = Datum

export default function BlogRead({ attributes, id }: Props) {
  const { imagen, contenido, publishedAt, titulo } = attributes

  const { data: dataImage } = imagen

  const { attributes: attributesData } = dataImage

  const { url } = attributesData
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
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { url } = query
  console.log(url)
  const res = await fetch(`${process.env.API_URL}/api/blogs?populate=*`)

  const { data }: BlogResponse = await res.json()
  const entryFound = data.find((el) => el.attributes.url === url)

  return {
    props: { ...entryFound },
  }
}
