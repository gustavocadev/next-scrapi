import { GetServerSideProps } from "next"
import React from "react"
import Layout from "../components/Layout"
import ListBlog from "../components/ListBlog"
import { BlogResponse } from "../types/BlogResponse"

type Props = BlogResponse

export default function Blog({ data, meta }: Props) {
  return (
    <Layout page="Blog">
      <main className="contenedor">
        <ListBlog data={data} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/blogs?populate=*`)
  const data: BlogResponse = await res.json()

  return {
    props: data,
  }
}
