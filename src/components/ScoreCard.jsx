import React from 'react'
import {useEffect} from 'react'
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

import datajson from '../data.json'

function ScoreCard({ scoreCard,child1,score,setScore}) {

 
    let result = "";
    if (child1) {
      result = scoreCard && scoreCard.filter((i) => i.childId == child1.id);
      console.log(result)
    }
  
    useEffect(() => {
      if (result) {
        setScore(result[0]);
      }
    }, []);
  
  return (
    <>
    <div className="App min-h-screen flex flex-col justify-normal items-center gap-10">
      <h1>Scorecard</h1>
    <BarChart width={350} height={300} data={score.subject}>
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
            <Bar dataKey="value" fill="cornflowerblue" />
            <XAxis dataKey="name" />
            <YAxis />
    </BarChart>
    </div>
</>
  )
}

export default ScoreCard