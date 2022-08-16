import React from "react";
import { useGlobalAppContext } from "./context";

const Submenu = () => {
  const { page, showSubmenu, location } = useGlobalAppContext();

  return (
    <aside className={`submenu ${showSubmenu ? "show" : ""}`} style={location}>
      <h4>{page.page}</h4>
      <div
        className={`submenu-center col-${
          page.links.length > 0 ? page.links.length : 2
        }`}
      >
        {page.links.map((link, index) => {
          const { url, icon, label } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
