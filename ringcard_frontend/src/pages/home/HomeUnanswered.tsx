import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout.scss";
import { ThemeProvider } from "react-bootstrap";

const HomeUnanswered = () => {
	const [questionList, setQuestionList] = useState<any[]>([]);

	// const getData = async () => {
	// 	await axios
	// 		.get("/home/unanswered")
	// 		.then((res) => {
	// 			console.log(res.data);

	//       const questions = res.data;
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

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
			{questionList.map((question, idx) => (
				<div key={idx}>
					<h2>{question.questionContents}</h2>
				</div>
			))}
		</div>
	);
};

export default HomeUnanswered;
