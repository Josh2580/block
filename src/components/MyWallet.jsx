import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { LuArrowDownUp } from "react-icons/lu";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { PiCopy } from "react-icons/pi";

const MyWallet = ({ address, balance }) => {
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
            {balance ? `$${balance}` : `$0.0`}
          </span>
        </div>
        <div className=" flex justify-center">
          <span className="p-0 m-0 text-base font-bold flex gap-1 items-center text-gray-700">
            {address ? `${address}` : `Connect Account`}
            {address && <PiCopy size={18} onClick={handleCopy} />}
            {copied && "Copied!"}
          </span>
        </div>
      </div>
      <div className=" flex justify-between">
        <span
          onClick={() => NavHandler("/send")}
          className="p-0 m-0  flex flex-col items-center gap-1 "
        >
          <CgArrowUp
            size={40}
            className="bg-gray-300 text-gray-900 rounded-full p-1.5"
          />
          <p className="text-xs font-bold text-gray-700">Send</p>
        </span>
        <span className="p-0 m-0  flex flex-col items-center gap-1 ">
          <CgArrowDown
            size={40}
            className="bg-gray-300 text-gray-900 rounded-full p-1.5 "
          />
          <p className="text-xs font-bold text-gray-700">Receive</p>
        </span>
        <span className="p-0 m-0  flex flex-col items-center gap-1 ">
          <LuArrowDownUp
            size={40}
            className="bg-gray-300 text-gray-900 rounded-full p-2"
          />
          <p className="text-xs font-bold text-gray-700">Swap</p>
        </span>
      </div>
    </div>
  );
};

export default MyWallet;
