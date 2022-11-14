import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import { ThemeProvider } from "react-bootstrap";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

function HomeUnanswered() {
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
			<Header></Header>
			<Navigation></Navigation>
			<div>
				{questionList.map((question, idx) => (
					<div key={idx}>
						<h2>{question.questionContents}</h2>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomeUnanswered;
