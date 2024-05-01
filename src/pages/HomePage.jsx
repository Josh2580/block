import React, { useEffect, useState } from "react";
import HeaderComp from "./../components/HeaderComp";
// import WalletManager from "../components/WalletManager";
// import TokenWallet from "../components/TokenWallet";
import MyWallet from "../components/MyWallet";
import Coins from "../components/Coins";

import Footer2 from "../components/Footer2";

const HomePage = () => {
  const address = "0xadkf............aslfgl";
  const balance = "99,044";

  const coin = [
    { id: 1, name: "BTC", price: "55,000.00", qty: "4", balance: "220,000.00" },
    { id: 2, name: "ETH", price: "2,000.00", qty: "2", balance: "4000.00" },
    { id: 3, name: "SOLANA", price: "750.00", qty: "0", balance: "0.00" },
  ];

  return (
    <div className="h-svh flex flex-col gap-4 justify-between bg-white">
      <div className="m-3  flex gap-4 flex-col h-full ">
        <HeaderComp />

        <MyWallet address={address} balance={balance} />

        {coin.map((data, idx) => (
          <Coins
            key={idx}
            name={data.name}
            price={data.price}
            qty={data.price}
            balance={data.balance}
          />
        ))}
      </div>
      <Footer2 />
    </div>
  );
};

export default HomePage;
