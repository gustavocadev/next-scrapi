import React from "react"
import Guitar from "./Guitar"
import styles from "../styles/List.module.css"
import { GuitarsResponseDatum } from "../types/GuitarsReponse"

type Props = {
  guitars: GuitarsResponseDatum[]
}

export default function List({ guitars }: Props) {
  // const { data } = guitars;
  console.log(guitars)
  return (
    <section className={styles.list}>
      {guitars.map((el) => {
        return <Guitar key={el.id} attributes={el.attributes} />
      })}
    </section>
  )
}
