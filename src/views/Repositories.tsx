import styles from "./Repositories.module.scss";

export function Repositories() {
  return (
    <section className={styles.repositories}>
      <div className={styles.repositories__box}>
        <div className={styles.repositories__box__left}>
          <a href="#" className={styles.repositories__box__left__name}>
            sindresorhus / awesome{" "}
          </a>
          <div className={styles.repositories__box__left__description}>
            Awesome lists about all kinds of interesting topics{" "}
          </div>
          <div className={styles.repositories__box__left__stats}>
            <div className={styles.repositories__box__left__stats__stars}>170,622</div>
            <div className={styles.repositories__box__left__stats__forks}>21,729 </div>
            <div className={styles.repositories__box__left__stats__built}>
              Built by
            </div>
          </div>
        </div>
        <div className={styles.repositories__box__right}>
          <button className={styles.repositories__box__right__sponsor}></button>
          <button className={styles.repositories__box__right__star}></button>
          <div className={styles.repositories__box__right__today}></div>
        </div>
      </div>
    </section>
  );
}
