import styles from "../styles/Blog.module.css";
import Entry from "./Entry";
const ListBlog = ({ data }: { data: any }) => {
    return (
        <>
            <h2 className="heading">Blog</h2>

            <section className={styles.blog}>
                {data.map((el: any) => (
                    <Entry key={el.id} {...el} />
                ))}
            </section>
        </>
    );
};

export default ListBlog;
