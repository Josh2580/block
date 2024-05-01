import React, { useState, useEffect } from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Coins = ({ name, price, qty, balance }) => {
  return (
    <div
      className={`flex justify-between gap-2 text-left bg-gray-100 p-4 rounded-lg text-gray-700`}
    >
      <div className="flex flex-col ">
        <p className="text-lg font-bold">{name}</p>
        <p className="p-0 m-0 font-bold text-xs rounded-full">${price}</p>
      </div>
      <div className="flex flex-col text-right ">
        <p className="text-lg font-bold">{qty}</p>
        <p className=" p-0 m-0 font-bold text-xs rounded-full">${balance}</p>
      </div>
    </div>
  );
};

export default Coins;
