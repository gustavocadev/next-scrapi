import Link from "next/link"
import React from "react"
import styles from "../styles/Course.module.css"
import { CoursesResponse } from "../types/CoursesResponse"

type Props = {
  courses: CoursesResponse
}

const Course = ({ courses }: Props) => {
  const { data } = courses
  const { attributes } = data

  const { imagen, titulo, contenido } = attributes

  const { data: dataImage } = imagen

  const { attributes: attributesImage } = dataImage

  const { url: urlImage } = attributesImage
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.text}>{contenido}</p>

          <Link href="#">
            <a className={styles.link}>Más información</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          section {
            // background-color: red;
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0/ 0.7)
              ),
              url(${urlImage});
            background-position: 50%;
          }
        `}
      </style>
    </section>
  )
}

export default Course
