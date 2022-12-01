import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useParams } from "react-router-dom";

function HomeCollection() {
	const [questionList, setQuestionList] = useState<any[]>([]);

	const [totalPages, setTotalPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>();
	const pageAddress = "collection";
	const { page } = useParams();

	useEffect(() => {
		axios
			.get(`/home/collection/${page}`)
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.content);
				setTotalPages(res.data.totalPages);
				setPageNumber(res.data.number+1);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
			<Header />
			<Navigation pageAddress={pageAddress} totalPages={totalPages} pageNumber={pageNumber} page={page}/>
			<div className="container-body">
				<QuestionNoteList questionList={questionList} />
			</div>
		</div>
	);
}

export default HomeCollection;
