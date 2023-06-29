import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Childpage({ child1 }) {
  const navigate = useNavigate();
  // let result = "";
  // if (child) {
  //   console.log(child);
  //   result = child && child.filter((i) => i.id == child1.id);
  //   console.log(result);
  // }
  useEffect(()=>{

  },[])

  return (
    <div className="min-h-screen flex flex-col justify-normal items-center gap-3 w-screen">
      <h2 className="w-22 mt-10 font-semibold md:text-3xl font-mono"><ion-icon style={{color:'blue', fontSize:'1.2em'}}  className="text-blue" name="heart"></ion-icon>{child1.name}<ion-icon style={{color:'blue', fontSize:'1.2em'}} className="text-blue" name="heart"></ion-icon></h2>
      <div className="avatar">
        <div className="w-52 border-solid border-4 border-info rounded-xl my-16">
          <img src={child1 && child1.photo} alt="photo" />
        </div>
      </div>
      <Link to={"/calendar"}>
        <button className="btn btn-primary md:mx-40 mt-10 text-xl font-mono w-44">Calendar</button>
      </Link>
      <Link to={"/gallery"}>
        <button className="btn btn-primary md:mx-40 mt-10 text-xl font-mono w-44">Gallery</button>
      </Link>
      <Link to={"/scorecard"}>
        <button className="btn btn-primary md:mx-40 mt-10 text-xl font-mono w-44">Scorecard</button>
      </Link>
      <Link to={"/places"}>
        <button className="btn btn-primary md:mx-40 mt-10 text-xl font-mono w-44">PlacesVisited</button>
      </Link>
    </div>
  );
}

export default Childpage;
