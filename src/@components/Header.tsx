/* import React from 'react' */
import { Link } from "react-router-dom";


export function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Trending</h1>
      <div className="header__sub-title">
        See what the GitHub community is most excited about today.
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/trending/developers">Developers</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
