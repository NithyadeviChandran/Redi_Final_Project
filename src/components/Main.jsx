import React from "react";
import { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

function Main({ Calendar, child1, event, setEvent}) {
  const navigate=useNavigate()
  const [date, setDate] = useState([]);
  const [name, setName] = useState([]);
  const [desc, setDesc] = useState([]);
  const [data, setData] = useState([]);
  
  let result=''
  if (child1) {   
    console.log(child1)
    result = Calendar && Calendar.filter((i) => i.childId == child1.id);
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
    e.target.text.value = "";
    e.target.desc.value = "";
  }
  return (
    <>
      <h2 className="card-title">
        {`Welcome ${child1 && child1.name}`}
      </h2>
    
      {event &&
          event.map((i) => (
            <div className="card w-72 bg-primary shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Booked Appointments</h2>
                <p >{`Date:${i.date}.${i.month}.${i.year}`}</p>
                <p >{`Title:${i.name}`}</p>
                <p>{`Appt details:${i.description}`}</p>
              </div>
            </div>
          ))}
      <div className="min-h-screen">
        <h2 className="card-title">Book New Appointments</h2>
        <div className="calendar min-h-fit">
          <input className="input input-bordered input-primary w-full max-w-xs" 
            type="date"
            name="calendar"
            id="calendar"
            onChange={changeHandler}
          />
          <form method="dialog" onSubmit={submitHandler}>
            <input
              className="input input-bordered input-primary w-full max-w-xs"
              type="text"
              name="text"
              placeholder="Enter your Appointment here"
            />
            <input
              className="input input-bordered input-primary  w-full max-w-xs"
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
        <div className="calendar min-h-fit  ">
          <ul className="menu bg-secondary w-72 rounded-box w-80">
            <li className="card-title" > New Appointments</li>
            {data.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link to ={"/childpage"}> 
                  <button className="btn btn-primary">Go to Profile</button>
    </Link>
    <Link to ={"/gallery"}> 
                  <button className="btn btn-primary">Go to Gallery</button>
    </Link>
    </>
  );
}

export default Main;
