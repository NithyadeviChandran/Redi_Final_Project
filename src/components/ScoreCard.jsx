import React from 'react'
import {useEffect} from 'react'
import {  BarChart, Bar, XAxis, YAxis} from "recharts";

function ScoreCard({scoreCard,child1,score,setScore}) {
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
  
    // const data = [
    //     { subjects: 'English', marks: 80 },
    //     { subjects: 'German', marks: 70 },
    //     { subjects: 'Science', marks: 90 },
    //     { subjects: 'Math', marks: 100 }
    // ];
  return (
    <>
      <h1>Scorecard</h1>
            {score && score.subject.map((i)=> 
            <div>
            <p>{`subject: ${i.name}`}</p>
            <p>{`marks: ${i.value}`}</p>
            </div>)}

            
      <BarChart width={350} height={300} data={score}>
            <Bar dataKey="" fill="green" />
            <XAxis dataKey="" />
            <YAxis />
    </BarChart>    
</>
  )
}

export default ScoreCard