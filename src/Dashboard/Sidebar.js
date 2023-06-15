import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed h-screen bg-[#0B3366] flex flex-col justify-between w-[300px] ">
      <div className="p-4">
        <div className="flex justify-center items-center pt-4">
          <img
            src="./image/logo.png"
            alt="not found"
            className="w-[150px] h-[60px]"
          />
        </div>
        <div className="py-12 ml-10 space-y-4">
          <NavItem
            icon="./image/dashboard 1.png"
            text="Dashboard"
          />
          <NavItem
            icon="./image/campaign 1.png"
            text="Campaigns"
          />
          <NavItem
            icon="./image/command 1.png"
            text="Commands"
          />
          <NavItem
            icon="./image/Zone.png"
            text="Zones"
          />
          <NavItem
            icon="./image/channels1 1.png"
            text="Channels"
          />
          <NavItem
            icon="./image/devices1 1.png"
            text="Devices"
          />
          <NavItem
            icon="./image/media library 1.png"
            text="Media Library"
          />
          <NavItem
            icon="./image/history 5.png"
            text="History"
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 px-2 py-2">
      <img src={icon} alt="not found" className="h-5 w-5 sm:h-6 sm:w-6" />
      <Link className="text-white text-base sm:text-lg leading-loose">
        {text}
      </Link>
    </div>
  );
};

export default Sidebar;
