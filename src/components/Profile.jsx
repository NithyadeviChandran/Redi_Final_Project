import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

function Profile({user,setUser,kids,setKids}) {
  const navigate = useNavigate();
  if(user){
    const setKids = data.children.filter(i => i.parentId == user.id)
    console.log(setKids)
  
  if(setKids){
      // console.log(setKids[0].name)
      // console.log(setKids[1].name)
      kids=setKids
    }
    } 
  
  useEffect(() => {
    if (!user) {
     navigate('/')
    }
  }, []);
  return (
    <div>
      <h1>
        Welcome <p>{user&&user.name}</p>
      </h1>
        {/* {data.users.map((i=> <p>{i.name}</p>))} */}
    <div>
      {kids && kids.map((i)=> <div className="w-24 rounded">
        <a href=""><img src={i.photo}alt="" /></a>
      <p>{`Name:${i.name}`}</p>
      <p>{`Age:${i.age}`}</p></div>)}
    </div>
        <button className="btn btn-primary" type="submit">+ Add Profile </button>
    </div>
  );
}

export default Profile;
