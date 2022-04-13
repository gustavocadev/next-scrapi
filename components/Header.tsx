import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/Header.module.css"
import { GuitarsResponseDatum } from "../types/GuitarsReponse"

type Props = {
  guitar?: GuitarsResponseDatum
}

export default function Header({ guitar }: Props) {
  const { pathname } = useRouter()
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.bar}>
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/img/logo.svg"
                  width={300}
                  height={100}
                  alt="Imagen logo"
                />
              </a>
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Tienda</Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h1>Modelo {guitar.attributes.nombre}</h1>
            <p>{guitar.attributes.descripcion}</p>
            <p className={styles.price}>${guitar.attributes.precio}</p>

            <Link href={`/guitars/${guitar.attributes.url}`}>
              <a className={styles.link}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>

      {pathname === "/" && (
        <div className={styles.guitar}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="imagen de guitarra"
          />
        </div>
      )}
    </header>
  )
}
