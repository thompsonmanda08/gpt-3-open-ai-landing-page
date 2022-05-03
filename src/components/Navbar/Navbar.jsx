import React, { useState } from "react";
import "./navbar.css";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <a href="#home" className="nav-link">
      Home
    </a>
    <a href="#what-gpt3" className="nav-link">
      What is GPT-3
    </a>
    <a href="#possibility" className="nav-link">
      Open AI
    </a>
    <a href="#features" className="nav-link">
      Case Studeis
    </a>
    <a href="#blog" className="nav-link">
      Library
    </a>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
          <div className="gpt3__navbar-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          <div className="gpt3__navbar-menu">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>

          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
