// import { useConnect, useAccount, useDisconnect } from "wagmi";
// import { InjectedConnector } from "wagmi/connectors/injected";

// function WalletManager() {
//   const { connect } = useConnect({
//     connector: new InjectedConnector(),
//   });
//   const { data: account } = useAccount();
//   const { disconnect } = useDisconnect();

//   return (
//     <div className="p-4">
//       {account ? (
//         <div>
//           <p>Connected as {account.address}</p>
//           <button
//             onClick={disconnect}
//             className="bg-red-500 text-white p-2 rounded"
//           >
//             Disconnect
//           </button>
//         </div>
//       ) : (
//         <button
//           onClick={connect}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Connect Wallet
//         </button>
//       )}
//     </div>
//   );
// }

// export default WalletManager;
