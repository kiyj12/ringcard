import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import AnswerFormQuestionNote from "../../components/AnswerFormQuestionNote";
import Header from "../../components/Header";
import QuestionList from "../../components/QuestionNoteList";
import "../../styles/layout/layout.css";
import "../../styles/question-page.css";

function QuestionUnanswered() {
	const params = useParams();
	const paramsQuestionId = params.questionId;

	const [questionList, setQuestionList] = useState<any[]>([]);
	const [question, setQuestion] = useState<any>([]);

	useEffect(() => {
		axios
			.get("/question/" + paramsQuestionId + "/unanswered/user")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.questions);
				setQuestion(res.data.question);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [paramsQuestionId]);

	return (
		<div className="container">
			<Header />
			<div className="contents-container">
				<div className="questionPage-the-question-container">
					<AnswerFormQuestionNote question={question} />
				</div>
				<div className="questionPage-container-body">
					<QuestionList questionList={questionList} />
				</div>
			</div>
		</div>
	);
}

export default QuestionUnanswered;
