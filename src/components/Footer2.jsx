import React from "react";
import { LuArrowDownUp } from "react-icons/lu";
import { CgArrowUp, CgArrowDown } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const Footer2 = () => {
  const navigate = useNavigate();
  const NavHandler = (to) => {
    // console.log(`${to}`);
    navigate(to);
  };

  return (
    <div className="card-row h-max gap-2 bg-gray-200 p-2  ">
      <div
        onClick={() => NavHandler("/")}
        className="card-col bg-transparent  gap-0 p-0 "
      >
        <IoMdHome size={25} className="text-gray-900" />
        <p className="text-xs font-bold text-gray-700">Home</p>
      </div>
      <div
        onClick={() => NavHandler("/send")}
        className="card-col bg-transparent  gap-0 p-0 "
      >
        <CgArrowUp size={25} className="text-gray-900" />
        <p className="text-xs font-bold text-gray-700">Send</p>
      </div>
      <div
        onClick={() => NavHandler("/")}
        className="card-col bg-transparent  gap-0 p-0 "
      >
        <CgArrowDown size={25} className="text-gray-900" />
        <p className="text-xs font-bold text-gray-700">Receive</p>
      </div>
      <div
        onClick={() => NavHandler("/")}
        className="card-col bg-transparent  gap-0 p-0 "
      >
        <LuArrowDownUp size={25} className="text-gray-900" />
        <p className="text-xs font-bold text-gray-700">Swap</p>
      </div>
    </div>
  );
};

export default Footer2;
