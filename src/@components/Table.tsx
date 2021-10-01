import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Repositories } from "views/Repositories";
import { Developers } from "views/Developers";

import styles from "./Table.module.scss";

export function Table() {
  return (
    <Router>
      <section className={styles.table}>
        <div className={styles.table__header}>
          <div className={styles.table__header__links}>
            <Link className={styles.table__header__links__link} to="/trending">
              Repositories
            </Link>
            <Link
              className={styles.table__header__links__link}
              to="/trending/developers"
            >
              Developers
            </Link>
          </div>
          <div className={styles.table__header__selection}>
            <div className={styles.table__header__selection__selected}>
              Spoken Language: Any
            </div>
            <div className={styles.table__header__selection__dropdown}>
              {/* <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </ul> */}
            </div>
          </div>
          <div className={styles.table__header__selection}>
            <div className={styles.table__header__selection__selected}>
              Language: Any
            </div>
            <div className={styles.table__header__selection__dropdown}>
              {/* <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </ul> */}
            </div>
          </div>
          <div className={styles.table__header__selection}>
            <div className={styles.table__header__selection__selected}>
              Date range: Today
            </div>
            <div className={styles.table__header__selection__dropdown}>
              {/* <ul>
                <li>one</li>
                <li>one</li>
                <li>one</li>
                <li>one</li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className={styles.table__body}>
          <Switch>
            <Route exact path="/trending" component={Repositories} />
            <Route exact path="/trending/developers" component={Developers} />
          </Switch>
        </div>
      </section>
    </Router>
  );
}
