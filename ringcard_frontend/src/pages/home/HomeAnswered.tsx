import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionList from "../../components/QuestionList";

function HomeAnswered() {
	const [questionList, setQuestionList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get("/home/answered")
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
			<QuestionList
				questionList={questionList}
				homeTabName="HomeUnanswered"
			></QuestionList>
		</div>
	);
}

export default HomeAnswered;
