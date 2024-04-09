import React, { useEffect, useState } from "react";
import HomeImg from "../assets/home1.png";
import CheckImg from "../assets/home3.png";
import IconImg from "../assets/homeBoost.png";
import ArrowImg from "../assets/arrow3.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useGetToyCoinByIdQuery } from "../api/toyCoinApi";
import MyTimer from "./MyTimer";
import { useParams } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { telegram_id } = useParams();

  const [id, set_id] = useState();
  console.log(id);

  const { data, isError, error, isLoading, isSuccess } =
    useGetToyCoinByIdQuery(id);
  // const time = new Date(data.launch_date);

  const [myData, setMyData] = useState();
  const [time, setTime] = useState();

  // let date = isSuccess && new Date(data.launch_date);

  // isSuccess && console.log(data.launch_date);
  // isError && console.log(error);

  const ClaimHandler = () => {
    navigate("/claim");
  };

  // isSuccess && console.log(time);

  useEffect(() => {
    isSuccess && setMyData(data);
    isSuccess && setTime(new Date(data.launch_date));
    let a = localStorage.getItem("telegram-id");
    set_id(a);
    id && console.log(id);
  }, [data, id]);

  return (
    <div className="bg-yellow-100 px-4 py-2 rounded-2xl">
      <div className="card-row ">
        <div className=" flex p-0 m-0 flex-col gap-0 ">
          <span className="p-0 m-0">Total Claimed</span>
          <span className="p-0 m-0">
            {" "}
            {isSuccess ? data.quantity_mined : 0.0} TOY
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <img src={IconImg} alt="check icon image" className="icon-img" />
          {/* <img src={ArrowImg} alt="check icon image" className="arrow-img " /> */}
          <IoIosArrowForward size={20} />
        </div>
      </div>
      <div className="card-row">
        <img src={HomeImg} className=" profile-img" alt="icon" />
        <button onClick={() => ClaimHandler()} className="primary-btn">
          Play for TOY
        </button>
      </div>
      <div className="card-row">
        <p>Launch Date</p>
        <p>Count Down</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className=" w-max">
          <img src={CheckImg} alt="check icon image" className="icon-img" />
        </div>
        <div className="flex flex-1 flex-col  w-max ">01-Aug-2024</div>
        <div className="flex flex-1 flex-col  w-max  items-end">
          {isSuccess && myData && <MyTimer expiryTimestamp={time} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
