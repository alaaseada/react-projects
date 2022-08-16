import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalAppContext } from "./context";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalAppContext();

  return (
    <aside className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo"></img>
        <button className="close-btn" type="button" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons"></ul>
    </aside>
  );
};

export default Sidebar;
