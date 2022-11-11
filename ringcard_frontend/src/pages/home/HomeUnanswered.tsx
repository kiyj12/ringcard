import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "react-bootstrap";

const HomeUnanswered = () => {
  let [questionList, setQuestionList] = useState([]);

  const getData = async () => {
    await axios
      .get("/home/unanswered")
      .then((res) => {
        console.log(getData);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      haha
      <div></div>
    </div>
  );
};

export default HomeUnanswered;
