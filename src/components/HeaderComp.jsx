import React from "react";
import LogoImg from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const HeaderComp = ({ visible }) => {
  const navigate = useNavigate();
  const ClickHandler = (path) => {
    navigate(path);
  };

  return (
    <div className=" card-row ">
      <div className="flex gap-3">
        <h3
          onClick={() => ClickHandler("/")}
          className=" font-extrabold text-xl text-blue-950 "
        >
          BLOCKMECH
        </h3>
      </div>
      {/* <button
        className="primary-btn"
        onClick={() => ClickHandler("/connect-wallet")}
      >
        Connect Wallet
      </button> */}
    </div>
  );
};

export default HeaderComp;
