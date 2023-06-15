import React from "react";
import General from "./General";
import Live from "./Live";
import Map from './Map';

const Card = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-20">
      <div className="py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-md  py-4 px-2">
            <General />
          </div>
          <div className="flex flex-col justify-between rounded-md  py-4 px-2">
            <Live />
          </div>
          <div className="flex flex-col justify-between rounded-md  py-4 px-2">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
