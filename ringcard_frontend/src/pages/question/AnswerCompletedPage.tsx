import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AnsweredQuestionNote from "../../components/AnsweredQuestionNote";
import Header from "../../components/Header";
import QuestionNoteList from "../../components/QuestionNoteList";
import "../../styles/answerCompletedPage.css";

function AnswerCompletedPage() {
	const {questionId} = useParams();
	// const {params} = useParams();
	// const questionId = params.questionId;
	const [question, setQuestion] = useState<any>([]);
	const [answer, setAnswer] = useState<any>([]);
	const [questionList, setQuestionList] = useState<any[]>([]);

	const [totalPages, setTotalPages] = useState<Number>(0);
	const [pageNumber, setPageNumber] = useState<Number>(0);

	// const { page } = useParams();

	useEffect(() => {
		axios
			.get("/question/" + questionId + "/completed/user/0")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.questions.content);
				setQuestion(res.data.question);
				setAnswer(res.data.answer);
				setTotalPages(res.data.questions.totalPages);
				setPageNumber(res.data.questions.number + 2);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [questionId]);

	function BtnToViewMore() {
		function handleClick(e: any) {
			let newPage = pageNumber;
			console.log("newPage="+newPage);
			console.log("pageNumber="+pageNumber);
			console.log("totalPages="+totalPages);
			if (totalPages === undefined) {
			} else if (newPage >= totalPages) {
			} else {
				axios
					.get("/question/" + questionId + "/completed/user/" + newPage)
					.then((res) => {
						console.log(res.data);
						// setQuestionList1(res.data.questions.content);

						const a:any[]=res.data.questions.content;
						console.log("a="+res.data.questions.content);
						let mapTemp = [];
						if (questionList) {
							for (let idx = 0; idx < questionList.length; idx++) {
								mapTemp.push(questionList[idx]);
							}
						}
						if (a) {
							for (let idx = 0; idx < a.length; idx++) {
								mapTemp.push(a[idx]);
							}
						}
						if (mapTemp) {
							setQuestionList(mapTemp);
						}
						setTotalPages(res.data.questions.totalPages);
						setPageNumber(res.data.questions.number + 1);

					})
					.catch((err) => {
						console.log(err);
					});
			}
		}
		return (
			<div>
				{totalPages === pageNumber ? undefined : (
					<div className="UserHome-viewMore-btn-container">
						<div className="UserHome-viewMore-btn-section">
							<button className="UserHome-viewMore-btn" onClick={handleClick}>
								+ 더보기
							</button>
						</div>
					</div>
				)}
			</div>
		);
	}


	// function BtnToViewMore() {
	// 	function handleClick(e: any) {
	// 		if (page){setNewPage(page + 1);}
	// 		console.log("totalPages=" + totalPages);
	// 		console.log("newPage=" + newPage);
	// 		if (totalPages === undefined) {
	// 		} else if (newPage >= totalPages) {
	// 		} else {
	// 			axios
	// 				.get("/question/" + questionId + "/completed/user?page="+ newPage)
	// 				.then((res) => {
	// 					console.log(res.data);
	// 					// setQuestionList1(res.data.questions.content);
	// 					const a:any[]=res.data.questions.content;
	// 					let mapTemp = [];
	// 					if (questionList) {
	// 						for (let idx = 0; idx < questionList.length; idx++) {
	// 							mapTemp.push(questionList[idx]);
	// 						}
	// 					}
	// 					if (a) {
	// 						for (let idx = 0; idx < a.length; idx++) {
	// 							mapTemp.push(a[idx]);
	// 						}
	// 					}
	// 					if (mapTemp) {
	// 						setQuestionList(mapTemp);
	// 					}
	// 					setTotalPages(res.data.totalPages);
	// 				})
	// 			.catch((err) => {
	// 					console.log(err);
	// 				});
	// 		}
	// 	}
	// 	return (
	// 		<div>
	// 			{totalPages === newPage ? undefined : (
	// 				<div className="AnswerCompleted-viewMore-btn-container">
	// 				<div className="AnswerCompleted-viewMore-btn-section">
	// 					<button className="AnswerCompleted-viewMore-btn" onClick={handleClick}>
	// 						+ 더보기
	// 					</button>
	// 				</div>
	// 			</div>
	// 			)}
	// 		</div>
	// 	);
	// }

	return (
		<div className="container">
			<Header />
			<div className="contents-container">
				<div className="questionPage-the-question-container">
					<AnsweredQuestionNote question={question} answer={answer} />
				</div>
				<div className="QuestionPage-hr-box">
					<hr className="QuestionPage-hr" />

					<div className="QuestionPage-hr-text">미응답 질문들</div>
					<hr className="QuestionPage-hr" />
				</div>
				<div className="questionPage-container-body">
					<div>
						<QuestionNoteList questionList={questionList} />
					</div>

					<BtnToViewMore />
				</div>

			</div>
		</div>
	);
}

export default AnswerCompletedPage;
