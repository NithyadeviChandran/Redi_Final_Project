import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Main({ Calendar, child1, event, setEvent, update }) {
  const navigate = useNavigate();
  // const [date, setDate] = useState([]);
  // const [name, setName] = useState([]);
  // const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0)

  // let result = "";
  // if (child1) {
  //   console.log(child1);
  //   result = Calendar && Calendar.filter((i) => i.childId == child1.id);
  //   console.log(result);
  // }

  useEffect(() => {
    // console.log("runing");
    setTimeout(() => {
      axios(`https://nithya-render.onrender.com/calendar/?childId=${child1.id}`).then(i => setEvent(i.data)).catch(i => console.log(i))

    },2000)
    
  }, [count]);

  function updateEvent () {
    // axios(`https://nithya-render.onrender.com/calendar/?childId=${child1.id}`).then(i => setEvent(i.data)).catch(i => console.log(i))
    
  }

  // function changeHandler(e) {
  //   e.preventDefault();
  //   setDate(e.target.value);
  //   setData([...data, `Date:${e.target.value}`]);
  // }
  function submitHandler(e) {
    e.preventDefault();
    // setName(`Name:${e.target.title.value}`);
    // setDesc(e.target.desc.value);
    setData([
      ...data,
      `Title:${e.target.title.value}`,
      `Description:${e.target.desc.value}`,
      `Date: ${e.target.calendar.value}`,
    ]);
    axios
      .post("https://nithya-render.onrender.com/calendar", {
        childId: child1.id,
        name: e.target.title.value,
        // date:`${e.target.calendar.value.slice(8)}.${e.target.calendar.value.slice(5, 7)}.${e.target.calendar.value.slice(0, 4)}`,
        date: e.target.calendar.value.slice(8),
        month: e.target.calendar.value.slice(5, 7),
        year: e.target.calendar.value.slice(0, 4),
        description: e.target.desc.value
      })
      .then((i) => console.log(i));
      setCount(i => i + 1)
    e.target.title.value = "";
    e.target.desc.value = "";
    e.target.calendar.value = "";
    update();
    // updateEvent()
  }
  return (
    <>
      <div className="App min-h-screen flex flex-col justify-normal items-center gap-4 w-screen">
        <h2 className="card-title md:text-2xl font-mono">
          {` ${child1 && child1.name}'s Calendar`}
        </h2>
        <div className="md:flex flex-wrap gap-2">
        {event &&
          event.map((i) => (
            <div className="card md:w-72 bg-primary shadow-xl mx-8">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Booked Appointments</h2>
                <p>{`Date:${i.date}.${i.month}.${i.year}`}</p>
                <p>{`Title:${i.name}`}</p>
                <p>{`Description:${i.description}`}</p>
              </div>
            </div>
          ))}
          </div>
        <div className="md:flex  gap-2">
          <form
            className="mx-8 md:flex flex-col gap-2"
            method="dialog"
            onSubmit={submitHandler}
          >
            <h2 className="card-title mt-10">Book New Appointments</h2>
            <input
              className="input input-bordered input-primary w-full max-w-xs border-2 border-info"
              type="date"
              name="calendar"
              id="calendar"
              // onChange={changeHandler}
            />
            <input
              className="input input-bordered input-primary w-full max-w-xs border-2 border-info"
              type="text"
              name="title"
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
          <div className="calendar min-h-fit mt-10 ">
            <ul className="menu bg-info rounded-box card w-72 shadow-xl mx-8 mt-8">
              <li className="card-title "> New Appointments</li>
              {data.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:flex justify-evenly items-center mb-12">
          <Link to={"/profile"}>
            <button className="btn btn-primary md:mx-40 mt-24 w-32 text-lg">
              Profile
            </button>
          </Link>
          <Link to={"/gallery"}>
            <button className="btn btn-primary md:mx-40 mt-24 w-32 text-lg">
              Gallery
            </button>
          </Link>
          <Link to={"/scorecard"}>
            <button className="btn btn-primary md:mx-40 mt-24 w-32 text-lg">
              ScoreCard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
