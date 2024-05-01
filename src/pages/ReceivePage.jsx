import React, { useEffect, useState } from "react";
import HeaderComp from "../components/HeaderComp";
import ReceiveComp from "../components/ReceiveComp";
import MyWallet from "../components/MyWallet";
import Footer2 from "../components/Footer2";

const ReceivePage = () => {
  const address = "0xadkf12j1u3rjwo4w8egs9t89oslgflg0q05tq0kaslfgl";
  const coin = "BTC";

  return (
    <div className="h-svh flex flex-col gap-4 justify-between bg-white">
      <div className="mt-3 ml-3">
        <HeaderComp visible={true} />
      </div>

      <div className="m-3  flex gap-4 flex-col h-full ">
        <ReceiveComp address={address} coin={coin} />

        <p>Receive page</p>
      </div>
      <Footer2 />
    </div>
  );
};

export default ReceivePage;
