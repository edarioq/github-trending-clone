import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Trending</h1>
      <div className={styles.header__heading}>
        See what the GitHub community is most excited about today.
      </div>
    </header>
  );
}
