import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

function ScoreCard({ scoreCard, child1, score, setScore }) { 
  const [data, setData] = useState([]);
 

  // let result = "";
  // if (child1) {
  //   result = scoreCard && scoreCard.filter((i) => i.childId == child1.id);
  //   console.log(result);
  // }

  useEffect(() => {
    // if (result) {
      const result = scoreCard && scoreCard.filter((i) => i.childId == child1.id);
      setScore(result[0]);
    // }
  }, []);

  const submitHandler=(e)=> {
    e.preventDefault();
    setData([...data, { subject: e.target.subject1.value, marks: e.target.marks1.value}, { subject: e.target.subject2.value, marks: e.target.marks2.value}, { subject: e.target.subject3.value, marks: e.target.marks3.value}]);
  };


  return (
    <>
      <div className=" min-h-screen w-screen flex flex-col justify-normal items-center gap-4 font-mono">
      <h2 className="card-title md:text-2xl font-mono mt-10">
          {` ${child1 && child1.name}'s Scorecard`}
    </h2>
    <div>
        {score && (
          <BarChart width={550} height={300} data={score.subject}>
            <Tooltip />
            <Legend />
            <Bar dataKey="Marks" fill="blue" />

            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        )}
      </div>
        <div className="md:flex gap-1 mt-10">
        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-1">
          <input className="input input-bordered input-primary  w-48 max-w-xs border-2 border-info md: mx-24"
            type="text"
            name="subject1"
            id="subject"
            placeholder="Enter the subject"
          />
          <input className="input input-bordered input-primary   w-48 max-w-xs border-2 border-info md: mx-24"
            type="number"
            name="marks1"
            id="marks"
            placeholder="Enter the marks"
          />
           <input className="input input-bordered input-primary  w-48 max-w-xs border-2 border-info md: mx-24"
            type="text"
            name="subject2"
            id="subject"
            placeholder="Enter the subject"
          />
          <input className="input input-bordered input-primary   w-48 max-w-xs border-2 border-info md: mx-24"
            type="number"
            name="marks2"
            id="marks"
            placeholder="Enter the marks"
          />
           <input className="input input-bordered input-primary   w-48 max-w-xs border-2 border-info md: mx-24"
            type="text"
            name="subject3"
            id="subject"
            placeholder="Enter the subject"
          />
          <input className="input input-bordered input-primary   w-48 max-w-xs border-2 border-info md: mx-24"
            type="number"
            name="marks3"
            id="marks"
            placeholder="Enter the marks"
          />
          <button className="btn btn-primary    md: mx-28" type="submit">Generate Chart</button>
          </div>
          </form>
       
        <div className="bar-chart-container">
          <BarChart width={350} height={300} data={data}>
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="marks" fill="blue" 
            />
          </BarChart>
        </div>
        </div>
       
        <div className="md:flex justify-normal items-center gap-40">
          <Link to={"/profile"}>
            <button className="btn btn-primary mt-10 mb-4">Go to Profile</button>
          </Link>
          <Link to={"/gallery"}>
            <button className="btn btn-primary mt-10 mb-4">Go to Gallery</button>
          </Link>
          <Link to={"/calendar"}>
            <button className="btn btn-primary mt-10 mb-4">Go to Calendar</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ScoreCard;
