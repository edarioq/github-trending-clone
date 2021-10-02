import { Header } from "@components";
import { Table } from "@components";
import styles from "./Trending.module.scss";

export function Trending() {
  return (
    <div className={styles.trending}>
      <Header />
      <main className={styles.trending__main}>
        <Table />
      </main>

    </div>
  );
}
