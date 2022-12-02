import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useSearchParams } from "react-router-dom";

const HomeUnanswered = () => {
	const [searchParams] = useSearchParams();
  const page = searchParams.get('page'); // test

		useEffect(() => {
		axios
			// .get("/home/unanswered?page="+page)
			.get("/home/unanswered?page="+page)
			.then((res) => {
				console.log(res.data);
				// setQuestionList(res.data.content);
				// setTotalPages(res.data.totalPages);
				// setPageNumber(res.data.number);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="container">
		<div>{page}</div>
		</div>
	);

	// const [searchParams] = useSearchParams();
  // const queryList = [...searchParams]; // [['key1', 'test1'], ['key2', 'test2']]

  // return (
  //   <h2>{query}<h2>
  // );

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

// 	useEffect(() => {
// 		axios
// 			.get("/home/unanswered/"+pageNumber)
// 			.then((res) => {
// 				console.log(res.data);
// 				setQuestionList(res.data.content);
// 				setTotalPages(res.data.totalPages);
// 				setPageNumber(res.data.number);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}, []);
	

// 	return (
// 		<div className="container">
// 			{/* <PageLoad/> */}
// 			<Header />
// 			<Navigation pageAddress={pageAddress} totalPages={totalPages} getTotalPages={getTotalPages} pageNumber={pageNumber} getPageNumber={getPageNumber} questionList={questionList} getQuestionList={getQuestionList}/>
			
// 			<div className="container-body">
// 				<QuestionNoteList questionList={questionList} />
// 			</div>
// 		</div>
// 	);
}

export default HomeUnanswered;
