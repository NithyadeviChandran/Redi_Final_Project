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
    <div>
      <h1>
        <p>{`Welcome ${child1 && child1.name}`}</p>
      </h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={child1.photo} alt="photo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{child1.name}</h2>
          <p>{child1.age}</p>
          <div className="card-actions">
            <Link to={"/calendar"}>
              <button className="btn btn-primary">Calendar</button>
            </Link>
            <Link to={"/gallery"}>
              <button className="btn btn-primary">Gallery</button>
            </Link>
            <Link to={"/scorecard"}>
              <button className="btn btn-primary">Go to Scorecard</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Childpage;
