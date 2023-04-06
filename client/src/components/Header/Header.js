import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-h2">
        <h2>Spokane County Court Corruption</h2>
      </div>
      <nav>
        <Link className="header-a" to="/">
          Home
        </Link>
        <Link className="header-a" to="/complaint">
          DOJ Complaint
        </Link>
        <Link className="header-a" to="/media">
          Media
        </Link>
        <Link className="header-a" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
