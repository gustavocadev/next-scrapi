import React from "react";
import Guitar from "./Guitar";
import styles from "../styles/List.module.css";

interface StoreProps {
    id: number;
    attributes: any[];
}

export default function List({ guitars }: { guitars: StoreProps[] }) {
    // const { data } = guitars;
    console.log(guitars);
    return (
        <section className={styles.list}>
            {guitars.map((el) => {
                return <Guitar key={el.id} attributes={el.attributes} />;
            })}
        </section>
    );
}
