import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router";

const QuestionUnanswered = () => {
  const { questionId } = useParams();

  try {
    const response = axios.get("question/:questionId/unanswered/user");

    console.log(response);
  } catch {}

  return (
    <>
      <div>quesiton 고유페이지입니다.</div>
    </>
  );
};

export default QuestionUnanswered;
