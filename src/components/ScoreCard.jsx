import React from "react";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

function ScoreCard({ scoreCard, child1, score, setScore }) {
  let result = "";
  if (child1) {
    result = scoreCard && scoreCard.filter((i) => i.childId == child1.id);
    console.log(result);
  }

  useEffect(() => {
    if (result) {
      setScore(result[0]);
    }
  }, []);

  return (
    <>
      <div className="w-72">
        <h1 className="text-center">Scorecard</h1>
        {score && (
          <BarChart width={350} height={300} data={score.subject}>
            {/* <CartesianGrid strokeDasharray="1 1" /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="blue" />
            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        )}
      </div>
    </>
  );
}

export default ScoreCard;
