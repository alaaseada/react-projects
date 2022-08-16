import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalAppContext } from "./context";

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useGlobalAppContext();

  return (
    <div className={`sidebar-wrapper ${showSidebar ? "show" : ""}`}>
      <aside className="sidebar">
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((sublink, index) => {
                    const { label, icon, url } = sublink;
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
