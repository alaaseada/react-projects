import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [page, setPage] = useState({ links: [], page: "" });
  const [location, setLocation] = useState({ left: 0, top: 0 });

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  function closeSidebar() {
    setShowSidebar(false);
  }

  function activateSubmenu(index, coordinates) {
    setShowSubmenu(true);
    const selectedPage = sublinks[index];
    setPage({ links: selectedPage.links, page: selectedPage.page });
    setLocation(coordinates);
  }

  function deactivateSubmenu() {
    setShowSubmenu(false);
  }

  return (
    <AppContext.Provider
      value={{
        showSubmenu,
        page,
        location,
        setLocation,
        showSidebar,
        toggleSidebar,
        closeSidebar,
        activateSubmenu,
        deactivateSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
