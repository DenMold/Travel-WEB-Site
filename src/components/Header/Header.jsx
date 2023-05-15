import "../Header/Header.css";
import headerLogo from "../../img/odigo-Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={headerLogo} className="header__logo_svg" alt="logo"></img>
      </div>
      <nav className="header__navagation-menu">
        <ul>
          <li className="header__list">
            <a href="/articles" className="header__item">
              Articles
            </a>
          </li>
          <li className="header__list">
            <a href="/locations" className="header__item">
              Locations
            </a>
          </li>
          <li className="header__list">
            <a href="/videos" className="header__item">
              Videos
            </a>
          </li>
          <li className="header__list">
            <a href="/sign-in" className="header__item">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
