import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Profile({ children, user, child, setChild, setChild1 }) {
  const navigate = useNavigate();
  let kidslist;
  useEffect(() => {
    if (user) {
      kidslist = children && children.filter((i) => i.parentId == user.id);
      setChild(kidslist);
    }
    else {
      navigate("/");
    }
  }, []);

  function childSelect(e) {
    setChild1(e);
    navigate("/childpage");
  }
  return (
    <>
      <div className="min-h-screen  w-screen flex flex-col justify-normal items-center gap-10 md:flex justify-center items-center gap-10 w-screen">
        <h2 className="font-sans text-bold md:text-5xl mt-4 font-mono">
          <span style={{ color: "blue" }}>{`W`}</span>
          {`elcome ${user && user.name}`}
        </h2>
        {child &&
          child.map((i) => (
            <div className="avatar" onClick={() => childSelect(i)}>
              <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-info">
                <figure className="px-10 pt-10 md:text-3xl">
                  {" "}
                  {i.name}
                  <img className="image" src={i.photo} alt="photo" />
                </figure>
              </div>
            </div>
          ))}
          <Link to ="/NewProfile">
        <button
          className="btn btn-primary md:mx-40 mt-24 text-xl"
          type="submit"
        >
          + New Profile
        </button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
