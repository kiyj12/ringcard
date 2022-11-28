import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnsweredQuestionNote from "../../components/AnsweredQuestionNote";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import QuestionNoteListAnony from "../../components/QuestionNoteListAnony";
import SendQuestionForm from "../../components/SendQuestionForm";
import { IAnswer, IQuestion } from "../../components/types";

import "../../styles/questionAnony.css";

function QuestionAnony() {
	const params = useParams();
	const questionId = params.questionId;
	const userName = String(params.userName);
	const [user, setUser] = useState<any>([]);
	const [question, setQuestion] = useState<any>([]);
	const [answer, setAnswer] = useState<any>([]);

	const [map, setMap] = useState<[[IQuestion, IAnswer]]>();

	useEffect(() => {
		axios
			.get("/question/" + questionId + "/anony")
			.then((res) => {
				console.log(res.data);
				setUser(res.data.user);
				setQuestion(res.data.question);
				setAnswer(res.data.answer);
				setMap(res.data.map);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<HeaderNoProfile />
			<div className="QuestionAnony-profile-box">
				<img src="/profile.png" alt="" />
				<div className="UserHome-profile-username">{user.userRingcardName}</div>
			</div>
			<div className="QuestionAnony-for-not-overflowing">
				<img src="/background-img/background.png" alt="" />
			</div>
			<div className="contents-container QuestionAnony-container">
				<div className="QuestionAnony-the-question-container">
					<AnsweredQuestionNote question={question} answer={answer} />
				</div>
				<div className="QuestionAnony-SendQuestionForm-container">
					<SendQuestionForm userName={userName} />
				</div>

				{/* <div className="QuestionAnony-questionlist-box"> */}
				{/* <div className="QuestionAnony-down-background-img"> */}
				{map ? <QuestionNoteListAnony map={map} /> : undefined}
				{/* </div> */}
				{/* </div> */}
			</div>
		</div>
	);
}

export default QuestionAnony;
