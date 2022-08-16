import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalAppContext } from "./context";

const Home = () => {
  const { openModal, openSidebar } = useGlobalAppContext();

  return (
    <main>
      <button className="sidebar-toggle" type="button" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" type="button" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
