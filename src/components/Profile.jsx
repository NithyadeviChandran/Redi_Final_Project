import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
// import data from "../data.json";

function Profile({ users,setUsers, children, setChildren}) {
  const navigate = useNavigate();
  if (users) {
    const kids = children && children.filter((i) => i.parentId == users.id);
    console.log(kids)

    if (kids) {
      children=kids
      // setChildren(kids);
      // navigate("/calendar");
    }
  }
  useEffect(() => {
    if (!users) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    if (!children) {
      // navigate("/");
    }
  }, []);
  return (
    <div>
      <h1>
        <p>{`Welcome ${users && users.name}`}</p>
      </h1>
      {/* {data.users.map((i=> <p>{i.name}</p>))} */}
      <div>
        {children &&
          children.map((i) => (
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
