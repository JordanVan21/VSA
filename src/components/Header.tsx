import "../styles/Header.css";
import { Link } from "react-router-dom";
import Banner from "./Banner";

interface Props {
  onNavClick: (label: string) => void;
  activeLabel: string;
}

const Header = ({ onNavClick, activeLabel }: Props) => {
  return (
    <header className="header" id="header">
      <div className="logo-container">
        <img
          src="https://i.imgur.com/BnazLOj.png"
          alt="A VSA logo"
          className="logo"
          id="header-img"
        />
      </div>

      <div className="banner-container">
        <Banner message="Welcome to WWU VSA!" />
      </div>
      <nav className="main-nav" id="nav-bar">
        {["Home", "Products", "About", "Contact"].map((label) => (
          <Link
            key={label}
            to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
            className={`nav-link ${activeLabel === label ? "active" : ""}`}
            onClick={() => onNavClick(label)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
