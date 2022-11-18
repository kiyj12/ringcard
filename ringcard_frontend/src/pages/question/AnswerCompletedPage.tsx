import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function AnswerCompletedPage() {
	const params = useParams();
	const questionId = params.questionId;

	useEffect(() => {
		axios
			.get("/question/" + questionId + "/completed/user")
			.then((res) => {
				console.log(res.data);
				// setQuestionList(res.data.questions);
				// setQuestion(res.data.question);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [questionId]);

	return <></>;
}

export default AnswerCompletedPage;
