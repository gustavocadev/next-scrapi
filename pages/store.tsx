import React from "react"
import Layout from "../components/Layout"
import { GetServerSideProps } from "next"
import List from "../components/List"
import { GuitarsResponse } from "../types/GuitarsReponse"

type Props = GuitarsResponse

export default function Store({ data, meta }: Props) {
  // console.log(data);
  return (
    <Layout page="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <List guitars={data} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/guitarras?populate=*`)

  const data: GuitarsResponse = await res.json()

  return {
    props: data,
  }
}
