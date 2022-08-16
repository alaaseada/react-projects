import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalAppContext } from "./context";

const Navbar = () => {
  const { toggleSidebar, activateSubmenu, deactivateSubmenu } =
    useGlobalAppContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      deactivateSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo"></img>
          <button
            type="button"
            className="btn toggle-btn"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            return (
              <li key={index}>
                <button
                  className="link-btn"
                  type="button"
                  onMouseOver={(e) => {
                    const buttonRect = e.target.getBoundingClientRect();
                    const coordinates = {
                      left: (buttonRect.left + buttonRect.right) / 2,
                      top: buttonRect.bottom - 3,
                    };
                    activateSubmenu(index, coordinates);
                  }}
                >
                  {link.page}
                </button>
              </li>
            );
          })}
        </ul>
        <button type="button" className="btn signin-btn">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
