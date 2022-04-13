import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import List from "../components/List"
import { GetServerSideProps } from "next"
import Course from "../components/Course"
import ListBlog from "../components/ListBlog"
import { CoursesResponse } from "../types/CoursesResponse"
import { BlogResponse } from "../types/BlogResponse"
import { GuitarsResponse } from "../types/GuitarsReponse"

type Props = {
  courses: CoursesResponse
  blog: BlogResponse
  guitars: GuitarsResponse
}

export default function Home({ guitars, courses, blog }: Props) {
  const { data } = blog

  const { data: dataGuitars } = guitars

  return (
    <Layout page="Home" guitar={dataGuitars[3]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra colección</h1>
        <List guitars={dataGuitars} />
      </main>
      <Course courses={courses} />
      <section className="contenedor">
        <ListBlog data={data} />
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const urls = [
    `${process.env.API_URL}/api/guitarras?populate=*`,
    `${process.env.API_URL}/api/curso?populate=*`,
    `${process.env.API_URL}/api/blogs?populate=*`,
  ]

  const results = await Promise.all(
    urls.map(async (url) => {
      const res = await fetch(url)
      const data = await res.json()
      return data
    })
  )

  return {
    props: {
      ...results,
    },
  }
}
