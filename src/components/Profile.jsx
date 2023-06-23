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
    <div>
      <h1>
        <p className="font-sans text-bold text-blue">{`Welcome ${user && user.name}`}</p>
      </h1>
      <div>
        {child &&
          child.map((i) => (
            <div className="card h-72 w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={i.photo} alt="photo" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{i.name}</h2>
                <div className="card-actions">
                  <button
                    onClick={() => childSelect(i)}
                    className="btn btn-primary py-2 px-4"
                  >
                    Go to page
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <button className="btn btn-primary" type="submit">
        + Add Profile
      </button>
    </div>
  );
}

export default Profile;
