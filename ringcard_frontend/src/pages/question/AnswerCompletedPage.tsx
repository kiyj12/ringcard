import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnsweredQuestionNote from "../../components/AnsweredQuestionNote";
import Header from "../../components/Header";
import QuestionNoteList from "../../components/QuestionNoteList";
import { IQuestion } from "../../components/types";

function AnswerCompletedPage() {
	const params = useParams();
	const questionId = params.questionId;

	const [question, setQuestion] = useState<any>([]);
	const [answer, setAnswer] = useState<any>([]);
	const [questionList, setQuestionList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get("/question/" + questionId + "/completed/user")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.questions);
				setQuestion(res.data.question);
				setAnswer(res.data.answer);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [questionId]);

	return (
		<div className="container">
			<Header />
			<div className="contents-container">
				<div className="questionPage-the-question-container">
					<AnsweredQuestionNote question={question} answer={answer} />
				</div>
				<div className="AnsweredQuestionNote-hr-box">
					<hr className="AnsweredQuestionNote-hr" />

					<div className="AnsweredQuestionNote-hr-text">미응답 질문들</div>
					<hr className="AnsweredQuestionNote-hr" />
				</div>
				<div className="questionPage-container-body">
					<QuestionNoteList questionList={questionList} />
				</div>
			</div>
		</div>
	);
}

export default AnswerCompletedPage;
