import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";

function HomeUnanswered() {
	const [questionList, setQuestionList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get("/home/unanswered")
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="container">
			<Header />
			<Navigation />
			<div className="container-body">
				<QuestionNoteList questionList={questionList} />
			</div>
		</div>
	);
}

export default HomeUnanswered;
