import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Main({ Calendar, child1, event, setEvent }) {
  const navigate = useNavigate();
  const [date, setDate] = useState([]);
  const [name, setName] = useState([]);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);

  let result = "";
  if (child1) {
    console.log(child1);
    result = Calendar && Calendar.filter((i) => i.childId == child1.id);
    console.log(result);
  }

  useEffect(() => {
    if (result) {
      setEvent(result);
    }
  }, []);

  function changeHandler(e) {
    e.preventDefault();
    setDate(e.target.value);
    setData([...data, `Date:${e.target.value}`]);
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
    axios.post('https://nithya-render.onrender.com/calendar', {name:e.target.text.value,Date:e.target.calendar.value.slice(8),Month:e.target.calendar.value.slice(5,7),Year:e.target.calendar.value.slice(0,4),description:e.target.desc.value}).then(i=> console.log(i))
    e.target.text.value = "";
    e.target.desc.value = "";
  }
  return (
    <>
    <div className="App min-h-screen flex flex-col justify-normal items-center gap-4">
      <h2 className="card-title">{` ${child1 && child1.name}'s Calendar`}</h2>

      {event &&
        event.map((i) => (
          <div className="card w-72 bg-primary shadow-xl mx-8">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Booked Appointments</h2>
              <p >{`Date:${i.date}.${i.month}.${i.year}`}</p>
              <p>{`Title:${i.name}`}</p>
              <p>{`Description:${i.description}`}</p>
            </div>
          </div>
        ))}
          <h2 className="card-title">Book New Appointments</h2>
          <form className="mx-8" method="dialog" onSubmit={submitHandler}>
         <input
            className="input input-bordered input-primary w-full max-w-xs border-2 border-info"
            type="date"
            name="calendar"
            id="calendar"
            onChange={changeHandler}
          />
            <input
              className="input input-bordered input-primary w-full max-w-xs border-2 border-info"
              type="text"
              name="text"
              placeholder="Enter your Appointment here"
            />
            <input
              className="input input-bordered input-primary  w-full max-w-xs border-2 border-info"
              type="text"
              name="desc"
              id="desc"
              placeholder="Enter the description"
            />
            <button className="btn btn-primary mx-18" type="submit">
              Submit
            </button>
          </form>
        <div className="calendar min-h-fit  ">
          <ul className="menu bg-info rounded-box w-52 ">
            <li className="card-title"> New Appointments</li>
            {data.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      <Link to={"/childpage"}>
        <button className="btn btn-primary">Go to Profile</button>
      </Link>
      <Link to={"/gallery"}>
        <button className="btn btn-primary">Go to Gallery</button>
      </Link>
      </div>
    </>
  );
}

export default Main;
