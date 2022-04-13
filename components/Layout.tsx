import Head from "next/head"
import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GuitarsResponseDatum } from "../types/GuitarsReponse"

type Props = {
  children: ReactNode
  page: string
  guitar?: GuitarsResponseDatum
}

export default function Layout({ children, page, guitar }: Props) {
  return (
    <>
      <Head>
        <title>Guitar LA - {page}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header guitar={guitar} />
      {children}
      <Footer />
    </>
  )
}
