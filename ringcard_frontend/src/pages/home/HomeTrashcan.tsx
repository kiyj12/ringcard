import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/home.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useSearchParams } from "react-router-dom";

function HomeUnanswered() {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page');
	const [questionList, setQuestionList] = useState<any[]>([]);
	const [totalPages, setTotalPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState(0);
	const pageAddress = "trashcan";

	useEffect(() => {
		axios
			.get("/home/"+pageAddress+"?page="+page)
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
			<Navigation page={page} pageAddress={pageAddress} totalPages={totalPages} pageNumber={pageNumber} />

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
