import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitar.module.css"
import { PurpleAttributes } from "../types/GuitarsReponse"

type Props = {
  attributes: PurpleAttributes
}

export default function Guitar({ attributes }: Props) {
  const { descripcion, Imagen, nombre, precio, url } = attributes

  const { data } = Imagen

  const { attributes: attributesImage } = data[0]

  const { url: urlImage } = attributesImage

  return (
    <figure className={styles.guitar}>
      <Image
        layout="responsive"
        width={200}
        height={350}
        src={urlImage}
        alt={`Imagen guitarra ${nombre}`}
      />
      <figcaption className={styles.content}>
        <h3>{nombre}</h3>
        <p className={styles.description}>{descripcion}</p>
        <p className={styles.price}>${precio}</p>
        <Link href={`/guitars/${url}`}>
          <a className={styles.link}>Ver Producto</a>
        </Link>
      </figcaption>
    </figure>
  )
}
