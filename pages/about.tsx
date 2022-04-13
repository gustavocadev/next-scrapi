import React from "react"
import Layout from "../components/Layout"
import Image from "next/image"
import styles from "../styles/About.module.css"

export default function About() {
  return (
    <Layout page="About">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div>
          <div className={styles.content}>
            <Image
              src="/img/nosotros.jpg"
              width={600}
              height={450}
              alt="Imagen de nosotros"
              layout="responsive"
            />
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                incidunt sed quod doloremque illo cupiditate vitae similique
                quae illum sunt quisquam, fuga beatae est culpa aliquam quasi
                debitis voluptas, animi eius quos labore aliquid consectetur
                consequatur? Et quisquam obcaecati, eius, distinctio possimus
                amet perferendis, rem sint quos error maxime architecto?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                incidunt sed quod doloremque illo cupiditate vitae similique
                quae illum sunt quisquam, fuga beatae est culpa aliquam quasi
                debitis voluptas, animi eius quos labore aliquid consectetur
                consequatur? Et quisquam obcaecati, eius, distinctio possimus
                amet perferendis, rem sint quos error maxime architecto?
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
