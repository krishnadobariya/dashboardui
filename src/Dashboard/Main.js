import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
};

export default Main;
