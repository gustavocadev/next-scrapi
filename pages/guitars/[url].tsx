import React from "react"
import Layout from "../../components/Layout"
import { GetServerSideProps } from "next"

import styles from "../../styles/Guitar.module.css"
import Image from "next/image"
import {
  GuitarsResponse,
  GuitarsResponseDatum,
} from "../../types/GuitarsReponse"

type Props = {
  guitar: GuitarsResponseDatum
}

export default function Product({ guitar }: Props) {
  const { descripcion, Imagen, nombre, precio } = guitar.attributes

  const { data } = Imagen

  const { attributes: attributesImage } = data[0]

  const { url: urlImage } = attributesImage
  return (
    <Layout page={`Guitarra ${nombre}`}>
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
          <form className={styles.form}>
            <label htmlFor="">Cantidad: </label>
            <select name="" id="">
              <option value="">-- Seleccione --</option>
              <option value="1">-- 1 --</option>
              <option value="2">-- 2 --</option>
              <option value="3">-- 3 --</option>
              <option value="4">-- 4 --</option>
              <option value="5">-- 5 --</option>
              <option value="6">-- 6 --</option>
            </select>

            <button type="submit">Agregar Al carrito</button>
          </form>
        </figcaption>
      </figure>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { url } = query
  const res = await fetch(`${process.env.API_URL}/api/guitarras/?populate=*`)

  const { data, meta }: GuitarsResponse = await res.json()

  const guitar = data.find((el) => el.attributes.url === url)

  return {
    props: {
      guitar,
    },
  }
}
