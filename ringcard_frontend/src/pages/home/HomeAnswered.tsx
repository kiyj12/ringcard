import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useSearchParams } from "react-router-dom";

function HomeAnswered() {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page');
	const [questionList, setQuestionList] = useState<any[]>([]);
	const [totalPages, setTotalPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState(0);
	const pageAddress = "answered";

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
	
	return (
		<div className="container">
			<Header />
			<Navigation page={page} pageAddress={pageAddress} totalPages={totalPages} pageNumber={pageNumber} />
			<div className="container-body">
				<QuestionNoteList questionList={questionList} />
			</div>
		</div>
	);
}

export default HomeAnswered;
