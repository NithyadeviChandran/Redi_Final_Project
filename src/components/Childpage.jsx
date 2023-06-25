import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Childpage({ child, child1 }) {
  const navigate = useNavigate();
  let result = "";
  if (child) {
    console.log(child);
    result = child && child.filter((i) => i.id == child1.id);
    console.log(result);
    navigate("/calendar");
  }

  return (
    <div className="min-h-screen flex flex-col justify-normal items-center gap-3">
      <h2 className="w-22 mt-10 font-semibold"><ion-icon className="text-blue" name="heart"></ion-icon>{child1.name}<ion-icon className="text-blue" name="heart"></ion-icon></h2>
      <div className="avatar">
        <div className="w-52 border-solid border-4 border-info rounded-xl my-16">
          <img src={child1.photo} alt="photo" />
        </div>
      </div>
      <Link to={"/calendar"}>
        <button className="btn btn-primary">Calendar</button>
      </Link>
      <Link to={"/gallery"}>
        <button className="btn btn-primary">Gallery</button>
      </Link>
      <Link to={"/scorecard"}>
        <button className="btn btn-primary">Scorecard</button>
      </Link>
    </div>
  );
}

export default Childpage;
