import React from "react";
import "./Header.scss";



const Header = () => {
    return (
        <header>
          <div className="header-h2">
              <h2>Spokane County Court Corruption</h2>
          </div>
          <nav>
            <a className="header-a" >Link 1</a>
            <a className="header-a" >Link 2</a>
            <a className="header-a" >Contact</a>
          </nav>
      </header>
    )
}

export default Header;