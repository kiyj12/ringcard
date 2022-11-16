import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionList from "../../components/QuestionList";

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
			<Header></Header>
			<Navigation></Navigation>
			<div></div>
			<QuestionList questionList={questionList} />
		</div>
	);
}

export default HomeUnanswered;
