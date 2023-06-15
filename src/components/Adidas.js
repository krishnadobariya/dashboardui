import React from "react";

const Adidas = () => {
  return (
    <div className="mx-4 md:mx-20 pb-4 md:pb-10">
  <div className="bg-[#FFFF] rounded-[3px] px-4 py-5 pt-10">
    <div className="flex flex-col md:flex-row justify-around items-center md:items-start">
      <div>
        <p className="text-[#000] font-normal">Adidas Mobile</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-[#C6C6C6]">Campaigns</p>
        <p className="pt-2">8</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-[#C6C6C6]">Channels</p>
        <p className="pt-2">9/10</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-[#C6C6C6]">Last Edited by</p>
        <p className="pt-2">varun</p>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-[#C6C6C6]">Last Edited on</p>
        <p className="pt-2">5 hours ago</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Adidas;
