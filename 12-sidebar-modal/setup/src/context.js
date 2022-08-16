import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        showSidebar,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
