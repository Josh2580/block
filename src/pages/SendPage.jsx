import React, { useState, useRef } from "react";
import HeaderComp from "./../components/HeaderComp";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer2 from "../components/Footer2";

const SendPage = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

  const modalRef = useRef(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const notify = () =>
    toast.success("🦄 Transaction successful", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //   transition: Bounce,
    });

  const ConfirmHandler = () => {
    setAddress("");
    setAmount("");
    notify();
    onCloseModal();
  };

  const sendHandler = (e) => {
    e.preventDefault();
    onOpenModal();
  };

  return (
    <div className="h-svh flex flex-col gap-4 justify-between bg-white">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="m-3  flex gap-4 flex-col h-full ">
        <HeaderComp visible={true} />
        <form
          onSubmit={sendHandler}
          className="flex flex-col justify-between h-full gap-5"
        >
          <div className="flex flex-col gap-5 mt-2">
            <p className="text-3xl font-bold text-gray-700">Where to send?</p>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              required
              placeholder="Paste or enter an address"
              className="border p-3 text-base rounded-lg bg-gray-200 outline-none border-gray-300"
            />
            <input
              type="number"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to send"
              className="border p-3 text-base rounded-lg bg-gray-200 outline-none border-gray-300"
            />
          </div>
          <div className="  flex justify-end">
            <button
              //   onClick={sendHandler}
              className="text-lg text-white p-1.5 rounded-lg w-24 font-bold bg-gray-700"
            >
              Send
            </button>
            <Modal
              open={open}
              onClose={onCloseModal}
              initialFocusRef={modalRef}
              center
            >
              <div className="flex flex-col gap-4 ">
                <h2 className="font-bold text-center text-xl  text-gray-700">
                  Approve Transaction
                </h2>
                <p className=" text-xl text-gray-700">
                  You are about to send {amount} of coin to {address}
                </p>

                <button
                  onClick={ConfirmHandler}
                  className=" rounded-lg text-white p-1 font-bold text-lg bg-gray-700"
                >
                  Confirm
                </button>
              </div>
            </Modal>
          </div>
        </form>
      </div>
      <Footer2 />
    </div>
  );
};

export default SendPage;
