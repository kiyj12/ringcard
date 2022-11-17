import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import QuestionList from "../../components/QuestionNoteList";

function QuestionUnanswered() {
	const params = useParams();
	const paramsQuestionId = params.questionId;

	const [questionList, setQuestionList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get("/question/" + paramsQuestionId + "/unanswered/user")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.questions);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [paramsQuestionId]);

	return (
		<div className="container">
			{/* <Header /> */}
			{/* <Navigation /> */}
			<div className="container-body">
				<QuestionList questionList={questionList} />
			</div>
		</div>
	);
}

export default QuestionUnanswered;
