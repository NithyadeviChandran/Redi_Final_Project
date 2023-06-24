import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Profile({ children, user, child, setChild, setChild1 }) {
  const navigate = useNavigate();
  let kidslist = "";
  if (user) {
    kidslist = children && children.filter((i) => i.parentId == user.id);
    console.log(kidslist);
  }
  useEffect(() => {
    if (kidslist) {
      setChild(kidslist);
    }
    if (child) {
      navigate("/childpage");
    }
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  function childSelect(e) {
    setChild1(e);
    navigate("/childpage");
  }
  return (
    <>
   
      <div className=" App min-h-screen flex flex-col justify-normal items-center gap-7">
      <h2 className="font-sans text-bold">{`Welcome ${user && user.name}`}</h2>
        {child &&
          child.map((i) => (
            <div className="avatar">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-info">
              <figure className="px-10 pt-10"   onClick={() => childSelect(i)}>
                <img src={i.photo} alt="photo" />
                <p className="text-white">{i.name}</p>
              </figure>
              </div>
            </div>
          ))}
                <button className="btn btn-primary " type="submit">
        + Add New Profile
      </button>
      </div>
      </>
  );
}

export default Profile;
