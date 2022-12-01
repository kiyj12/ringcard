import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnsweredQuestionNote from "../../components/AnsweredQuestionNote";
import Header from "../../components/Header";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import QuestionNoteListAnony from "../../components/QuestionNoteListAnony";
import SendQuestionForm from "../../components/SendQuestionFormQuestionAnony";
import { IAnswer, IQuestion } from "../../components/types";

import "../../styles/questionAnony.css";

function QuestionAnony() {
	const params = useParams();
	const questionId = params.questionId;
	const userName = String(params.userName);
	const [user, setUser] = useState<any>([]);
	const [question, setQuestion] = useState<any>([]);
	const [answer, setAnswer] = useState<any>([]);

	const [map, setMap] = useState<[IQuestion, IAnswer][]>();

	const [totalPages, setTotalPages] = useState<Number>(0);
	const [pageNumber, setPageNumber] = useState<Number>(0);
	const { page } = useParams();

	useEffect(() => {
		axios
			.get("/question/" + questionId + "/anony/0")
			.then((res) => {
				console.log(res.data);
				setUser(res.data.user);
				setQuestion(res.data.question);
				setAnswer(res.data.answer);
				setMap(res.data.map);
				setTotalPages(res.data.pageInfo.totalPages);
				setPageNumber(res.data.pageInfo.number + 1);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function BtnToViewMore() {
		function handleClick(e: any) {
			const newPage = pageNumber;
			if (totalPages === undefined) {
			} else if (newPage >= totalPages) {
			} else {
				axios
					.get("/question/" + questionId + "/anony/" + newPage)
					.then((res) => {
						console.log(res.data);
						setUser(res.data.user);
						// setQuestionList1(res.data.questions.content);
						console.log("a");
						const b: [[IQuestion, IAnswer]] = res.data.map;
						// [IQuestion, IAnswer]
						// 새로운 맵에 넣고, 그 맵을 다시 setMap 하자.
						let mapTemp = [];
						if (map) {
							for (let idx = 0; idx < map.length; idx++) {
								mapTemp.push(map[idx]);
							}
						}
						if (b) {
							for (let idx = 0; idx < b.length; idx++) {
								mapTemp.push(b[idx]);
							}
						}
						console.log("cc");
						console.log(mapTemp);
						if (mapTemp) {
							setMap(mapTemp);
						}

						setTotalPages(res.data.pageInfo.totalPages);
						setPageNumber(res.data.pageInfo.number + 1);
					})
				.catch((err) => {
						console.log(err);
					});
			}
		}
		return (
			<div>
				{totalPages === pageNumber ? undefined : (
				<div className="Question-viewMore-btn-container">
					<div className="QuestionAnony-viewMore-btn-section">
						<button className="QuestionAnony-viewMore-btn" onClick={handleClick}>
							+ 더보기
						</button>
					</div>
				</div>
				)}
			</div>
		);
	}

	return (
		<div className="container">
			{/* <HeaderNoProfile /> */}
			<Header />
			{/* <div className="QuestionAnony-profile-box">
				<img src="/profile.png" alt="" />
				<div className="UserHome-profile-username">{user.userRingcardName}</div>
			</div> */}
			<div className="QuestionAnony-for-not-overflowing">
				<img src="/background-img/background.png" alt="" />
			</div>
			<div className="contents-container QuestionAnony-container">
				<div className="QuestionAnony-the-question-container">
					<AnsweredQuestionNote question={question} answer={answer} />
				</div>
				<div className="QuestionAnony-SendQuestionForm-container">
					<SendQuestionForm />
				</div>
				{map ? <QuestionNoteListAnony map={map} /> : undefined}
					<BtnToViewMore/>
			</div>
		</div>
	);
}

export default QuestionAnony;
