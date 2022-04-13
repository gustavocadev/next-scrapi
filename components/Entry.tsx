import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from "../styles/Entry.module.css"
import { Datum } from "../types/BlogResponse"

type Props = Datum

export default function Entry({ attributes, id }: Props) {
  const { titulo, resumen, publishedAt, imagen, url: post } = attributes
  const { data } = imagen

  const { attributes: attributesData } = data

  const { url } = attributesData
  return (
    <article>
      <Image
        src={url}
        alt={`Imagen del blog ${titulo}`}
        width={800}
        height={600}
      />
      <header className={styles.content}>
        <h3>{titulo}</h3>
        <p className={styles.date}>{publishedAt}</p>
        <p>{resumen}</p>
        <Link href={`/blog/${post}`}>
          <a className={styles.link}>leer más</a>
        </Link>
      </header>
    </article>
  )
}
