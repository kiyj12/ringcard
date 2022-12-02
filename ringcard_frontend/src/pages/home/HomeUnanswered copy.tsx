import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";

const HomeUnanswered = () => {
	// const [questionList, setQuestionList] = useState<any[]>([]);
	// const getQuestionList = (questionList:any) => {setQuestionList(questionList);};
	// const [totalPages, setTotalPages] = useState<number>();
	// const getTotalPages = (totalPages:any) => {
  //   setTotalPages(totalPages);
  // };
	// const [pageNumber, setPageNumber] = useState(0);
	// const getPageNumber = (pageNumber:any) => {
  //   setPageNumber(pageNumber);
  // };
	// const pageAddress = "unanswered";

	// useEffect(() => {
	// 	axios
	// 		.get("/home/unanswered/"+pageNumber)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			setQuestionList(res.data.content);
	// 			setTotalPages(res.data.totalPages);
	// 			setPageNumber(res.data.number);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);
	

	// return (
	// 	<div className="container">
	// 		{/* <PageLoad/> */}
	// 		<Header />
	// 		<Navigation pageAddress={pageAddress} totalPages={totalPages} getTotalPages={getTotalPages} pageNumber={pageNumber} getPageNumber={getPageNumber} questionList={questionList} getQuestionList={getQuestionList}/>
			
	// 		<div className="container-body">
	// 			<QuestionNoteList questionList={questionList} />
	// 		</div>
	// 	</div>
	// );
}

export default HomeUnanswered;
