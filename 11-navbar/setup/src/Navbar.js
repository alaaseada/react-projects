import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const linksContainerRef = useRef(null);
  const linksULRef = useRef(null);

  function toggleDropdownMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const linksULHeight = linksULRef.current.getBoundingClientRect().height;
    linksContainerRef.current.style.height = showMenu
      ? `${linksULHeight}px`
      : "0px";
  }, [showMenu]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo"></img>
          <button
            className="nav-toggle"
            type="button"
            onClick={toggleDropdownMenu}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksULRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
