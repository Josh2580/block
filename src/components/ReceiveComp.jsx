import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { LuArrowDownUp } from "react-icons/lu";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { PiCopy } from "react-icons/pi";

const ReceiveComp = ({ address, coin }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const NavHandler = (to) => {
    navigate(to);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className=" flex flex-col gap-5 bg-gray-100 p-6 rounded-lg">
      <div>
        <div className=" flex justify-center">
          <span className="p-0 m-0 text-2xl font-bold text-gray-700">
            {coin ? `$${coin} coin` : `coin`}
          </span>
        </div>
        <div className=" flex justify-center">
          <span className="p-0 m-0 text-base font-bold flex gap-1 items-center text-gray-700">
            {address ? `${address}` : `Connect Account`}
            <br />
            {copied && "Copied!"}
          </span>
        </div>
      </div>
      <div className=" flex justify-center">
        <span
          onClick={() => NavHandler("/receive")}
          className="p-0 m-0  flex flex-col items-center gap-1 "
        >
          <PiCopy
            onClick={handleCopy}
            size={40}
            className="bg-gray-300 text-gray-900 rounded-full p-1.5 "
          />
          <p className="text-xs font-bold text-gray-700">Copy</p>
        </span>
      </div>
    </div>
  );
};

export default ReceiveComp;
