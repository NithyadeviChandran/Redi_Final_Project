import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Main({ user, setUser }) {
  const [date, setDate] = useState([]);
  const [name, setName] = useState([]);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);

  function changeHandler(e) {
    e.preventDefault();
    setDate(e.target.value);
    setData([...data, `Name:${e.target.value}`]);
  }
  function submitHandler(e) {
    e.preventDefault();
    setName(`Name:${e.target.text.value}`);
    setDesc(e.target.desc.value);
    setData([
      ...data,
      `Title:${e.target.text.value}`,
      `Description:${e.target.desc.value}`,
    ]);
    e.target.text.value = "";
    e.target.desc.value = "";
  }
  return (
    <>
      <div className="min-h-screen">
        <h4>Calendar</h4>
        <div className="calendar min-h-fit">
          <input
            type="date"
            name="calendar"
            id="calendar"
            onChange={changeHandler}
          />
          <form method="dialog" onSubmit={submitHandler}>
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="text"
              placeholder="Enter your Appointment here"
            />
            <input
              className="input input-bordered w-full max-w-xs"
              type="text"
              name="desc"
              id="desc"
              placeholder="Enter the description"
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-primary" type="submit">
              Back to Home
            </button>
          </Link>
        </div>
        <div className="calendar min-h-fit">
          <ul className="menu bg-base-200 w-56 rounded-box w-80">
            <li className="menu-title">Appointments</li>
            {/* {date.map((date,index)=> <li key={index}>Date:{date}</li>)}
        {name.map((name,index)=> <li key={index}>Title:{name}</li>)}
        {desc.map((desc,index)=> <li key={index}>Description:{desc}</li>)} */}
            {data.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
