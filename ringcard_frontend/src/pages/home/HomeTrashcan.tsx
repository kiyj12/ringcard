import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/home.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useParams } from "react-router-dom";

function HomeUnanswered() {
	const [questionList, setQuestionList] = useState<any[]>([]);
	const getQuestionList = (questionList:any) => {setQuestionList(questionList);};
	const [totalPages, setTotalPages] = useState<number>();
	const getTotalPages = (totalPages:any) => {
    setTotalPages(totalPages);
  };
	const [pageNumber, setPageNumber] = useState(0);
	const getPageNumber = (pageNumber:number) => {
    setPageNumber(pageNumber);
  };
	const pageAddress = "trashcan";

	useEffect(() => {
		axios
			.get("/home/trashcan/0")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.content);
				setTotalPages(res.data.totalPages);
				setPageNumber(res.data.number);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleClearTrashcanClick = async () => {
		await axios
			.get("/home/trashcan/clearTrashcan")
			.then((res) => {
				console.log(
					"Successfully enter handleClearTrashcanClick in HomeTrashcan :D"
				);
				console.log(res.data);
				window.history.go(0);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container">
			<Header />
			<Navigation pageAddress={pageAddress} totalPages={totalPages} getTotalPages={getTotalPages} pageNumber={pageNumber} getPageNumber={getPageNumber} questionList={questionList} getQuestionList={getQuestionList}/>

			<div className="container-body">
				<QuestionNoteList questionList={questionList} />
			</div>
			<div className="clear-trashcan">
				<img
					src="/buttons/home-trashcan-tab-active-button.svg"
					onClick={handleClearTrashcanClick}
					alt=""
				/>
				<div className="clear-trashcan-text">비우기</div>
			</div>
		</div>
	);
}

export default HomeUnanswered;
