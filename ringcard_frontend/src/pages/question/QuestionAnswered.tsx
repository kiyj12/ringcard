import axios from "axios";
import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import EditAnswerFormQuestionNote from "../../components/EditAnswerFormQuestionNote";
import Header from "../../components/Header";
import QuestionNoteList from "../../components/QuestionNoteList";
import "../../styles/layout/layout.css";
import "../../styles/question-page.css";

function QuestionAnswered() {
	const params = useParams();
	const paramsQuestionId = params.questionId;

	const [questionList, setQuestionList] = useState<any[]>([]);
	const [question, setQuestion] = useState<any>([]);
	const [oldAnswer, setOldAnswer] = useState<any>([]);

	useEffect(() => {
		axios
			.get("/question/" + paramsQuestionId + "/edit/user")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.questions);
				setQuestion(res.data.question);
				setOldAnswer(res.data.oldAnswer);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [paramsQuestionId]);

	return (
		<div className="container">
			<Header />
			<div className="contents-container">
				<div className="down-background-img">
					<div className="questionPage-the-question-container">
						<EditAnswerFormQuestionNote
							question={question}
							oldAnswer={oldAnswer}
						/>
					</div>
					<div className="QuestionPage-hr-box">
						<hr className="QuestionPage-hr" />

						<div className="QuestionPage-hr-text">미응답 질문들</div>
						<hr className="QuestionPage-hr" />
					</div>
					<div className="questionPage-container-body">
						<QuestionNoteList questionList={questionList} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionAnswered;
