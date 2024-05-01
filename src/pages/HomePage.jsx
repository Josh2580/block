import React, { useEffect, useState } from "react";
import HeaderComp from "./../components/HeaderComp";
// import WalletManager from "../components/WalletManager";
// import TokenWallet from "../components/TokenWallet";
import MyWallet from "../components/MyWallet";

import Footer2 from "../components/Footer2";

const HomePage = () => {
  const address = "0xadkf............aslfgl";
  const balance = "99,044";

  return (
    <div className="h-svh flex flex-col gap-4 justify-between bg-white">
      <div className="m-3 mx-6 flex gap-4 flex-col h-full ">
        <HeaderComp />

        <MyWallet address={address} balance={balance} />
      </div>
      <Footer2 />
    </div>
  );
};

export default HomePage;
