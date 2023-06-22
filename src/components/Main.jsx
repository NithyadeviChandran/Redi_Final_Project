import React from "react";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";

function Main({ Calendar, child, event, setEvent}) {
  const [date, setDate] = useState([]);
  const [name, setName] = useState([]);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);
  
  let result=''
  if (child) {   
    console.log(child)
    result = Calendar && Calendar.filter((i) => i.childId == child.id);
    console.log(result)
  }

  useEffect(()=>{
    if(result){
      setEvent(result)
    }
  },[])

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
      <h1>
        <p>{`Welcome ${child && child.name}`}</p>
      </h1>
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
