import React from "react";
import Adidas from "../components/Adidas";
import Card from "../components/Card";

const Navbar = () => {
  return (
    <div className="bg-gray-100 h-[100vh] ml-[300px]">
      <div className="bg-white shadow">
        <div className="flex flex-row-reverse items-center gap-10 p-4 mr-10">
          <img src="./image/person.png" alt="not found" className="w-6 h-6" />
          <img
            src="./image/notification (2) 1.png"
            alt="not found"
            className="w-6 h-6"
          />
          <img src="./image/asd.png" alt="not found" className="w-6 h-6" />
        </div>
      </div>
      <div className="px-4 pt-10 pb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-gray-800 text-xl font-medium ml-20">Project</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mr-14">
            + Add Project
          </button>
        </div>
      </div>
      <div className="px-4">
        <Adidas />
      </div>
      <div className="px-4">
        <Card />
      </div>
    </div>
  );
};

export default Navbar;
