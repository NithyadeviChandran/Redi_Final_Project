import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import data from "../data.json";

function Profile({ user, setUser, kids, setKids }) {
  const navigate = useNavigate();
  if (user) {
    const children = data.children.filter((i) => i.parentId == user.id);
    if (children) {
      console.log(children);
      kids = children;
      navigate("/calendar");
    }
  }
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (!kids) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h1>
        <p>{`Welcome ${user && user.name}`}</p>
      </h1>
      {/* {data.users.map((i=> <p>{i.name}</p>))} */}
      <div>
        {kids &&
          kids.map((i) => (
            <div className="w-24 rounded">
              <Link to="/calendar">
                <img src={i.photo} alt="" />
              </Link>
              <p className="italic">{`Name:${i.name}`}</p>
              <p className="italic">{`Age:${i.age}`}</p>
            </div>
          ))}
      </div>
      <button className="btn btn-primary" type="submit">
        + Add Profile{" "}
      </button>
    </div>
  );
}

export default Profile;
