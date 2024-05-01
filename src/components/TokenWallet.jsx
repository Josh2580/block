// import { useState } from "react";
// // import { useContract, useSigner } from "wagmi";
// // import TokenWalletAbi from "../abis/TokenWalletAbi.json"; // Ensure you have ABI file

// const tokenWalletAddress = "YOUR_CONTRACT_ADDRESS";

// export default function TokenWallet() {
//   const [amount, setAmount] = useState("");
//   const { data: signer } = useSigner();
//   const tokenWalletContract = useContract({
//     addressOrName: tokenWalletAddress,
//     contractInterface: TokenWalletAbi,
//     signerOrProvider: signer,
//   });

//   const handleDeposit = async () => {
//     if (!amount) return;
//     try {
//       const tx = await tokenWalletContract.deposit(amount);
//       await tx.wait();
//       alert("Deposit successful!");
//       setAmount("");
//     } catch (error) {
//       console.error("Deposit failed:", error);
//       alert("Deposit failed!");
//     }
//   };

//   const handleWithdraw = async () => {
//     if (!amount) return;
//     try {
//       const tx = await tokenWalletContract.withdraw(amount);
//       await tx.wait();
//       alert("Withdrawal successful!");
//       setAmount("");
//     } catch (error) {
//       console.error("Withdrawal failed:", error);
//       alert("Withdrawal failed!");
//     }
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Amount of Tokens"
//         className="input input-bordered w-full max-w-xs"
//       />
//       <button onClick={handleDeposit} className="btn btn-primary m-2">
//         Deposit
//       </button>
//       <button onClick={handleWithdraw} className="btn btn-secondary m-2">
//         Withdraw
//       </button>
//     </div>
//   );
// }
