import React from "react";
import { useState, useEffect } from "react";
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
      <div className=" min-h-screen w-full flex flex-col justify-normal items-center gap-4 font-mono">
        <h1 className="text-center mt-10">Scorecard</h1>
        {score && (
          <BarChart width={370} height={300} data={score.subject}>
            <Tooltip />
            <Legend />
            <Bar dataKey="Marks" fill="blue" />

            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        )}
      
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
       
        <div>
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
       
        <div className="flex flex-col justify-normal items-center gap-7">
          <Link to={"/profile"}>
            <button className="btn btn-primary mt-10">Go to Profile</button>
          </Link>
          <Link to={"/gallery"}>
            <button className="btn btn-primary">Go to Gallery</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ScoreCard;
