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

	const [question, setQuestion] = useState<any>([]);

	useEffect(() => {
		axios
			.get("/question/" + paramsQuestionId + "/unanswered/user")
			.then((res) => {
				console.log(res.data);
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
				{/* 퀘스쳔리스트 삭제^^ */}
				{/* <div className="QuestionPage-hr-box">
					<hr className="QuestionPage-hr" />

					<div className="QuestionPage-hr-text">미응답 질문들</div>
					<hr className="QuestionPage-hr" />
				</div>
				<div className="questionPage-container-body">
					<div className="QuestionPage-down-background-img">
						<QuestionList questionList={questionList} />
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default QuestionUnanswered;
