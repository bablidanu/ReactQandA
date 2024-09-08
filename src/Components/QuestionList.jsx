import React from "react";
import Question from "./Question";
import data from "../assets/data";

const QuestionList = () => {
  console.log(data);
  return (
    <h1
      className="h-auto p-1
     min-h-screen bg-black"
    >
      {data.map((item, index) => (
        <Question key={index} item={item} />
      ))}
    </h1>
  );
};

export default QuestionList;
