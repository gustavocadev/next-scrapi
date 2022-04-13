import styles from "../styles/Blog.module.css"
import { Datum } from "../types/BlogResponse"
import Entry from "./Entry"

type Props = {
  data: Datum[]
}

const ListBlog = ({ data }: Props) => {
  return (
    <>
      <h2 className="heading">Blog</h2>

      <section className={styles.blog}>
        {data.map((el: any) => (
          <Entry key={el.id} {...el} />
        ))}
      </section>
    </>
  )
}

export default ListBlog
