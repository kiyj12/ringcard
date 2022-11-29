import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import qs from 'qs';


const HomeUnanswered = () => {


	// const location = useLocation();
	
	// interface MatchProps {
	// username: 'velopert' | 'gildong';
	// }
	// const {page} = useParams();

	// const query = qs.parse(location.search, {
  //   ignoreQueryPrefix: true
  // });
  // const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열입니다.

	// const [searchParams] = useSearchParams();
	// const details = searchParams.get('page') === 'true';
	// console.log(details);


	const [questionList, setQuestionList] = useState<any[]>([]);
	
	// const [searchParams] = useSearchParams();
	// const detail = searchParams.get('detail') === 'true';
	// console.log(searchParams);
	// console.log(detail);
	const [page, setPage] = useState(0);





	
	// const onSubmit = async (data: any) => {
	// 	await new Promise((r) => setTimeout(r, 100));

	// 	// alert(JSON.stringify(data));
	// 	console.log(data);

	// 	await axios
	// 		.post("/home/unanswered", data)
	// 		.then((res) => {
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error.config);
	// 		});
	// };

	// function ButtonToPageUp(){
	// 	function handleClick(e: any){
	// 		axios
	// 			.post("/home/unanswered")
	// 			.then((res) => {
	// 				console.log(res.data);
	// 				// setQuestionList(res.data);
	// 				setQuestionList(res.data.content);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			});
	// 	}

		function ButtonToPageUp(){
		function handleClick(e: any){
			setPage(page+1);

		}
		return (null);
	}
  //   return(
  //         <button className="user-btn editPassword-btn-cancel" onClick={handleClick}>
	// 				  <div className="user-btn-text editPassword-btn-text-cancel">페이지 업</div>
	// 				</button>)
  // }

	// function PageLoad(){
		useEffect(() => {
		axios
			.get("/home/unanswered")
			.then((res) => {
				console.log(res.data);
				// setQuestionList(res.data);
				// setPage(res.data.number);
				setQuestionList(res.data.content);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	// 	return(null);
	// }
	
	
	return (
	// <form onSubmit={handleSubmit(onSubmit)}>

		<div className="container">
			{/* <PageLoad/> */}
			<Header />
			<Navigation />
			
			<div className="container-body">
				<p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {page && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
				<QuestionNoteList questionList={questionList} />
				<ButtonToPageUp/>
			</div>
		</div>
		
	// </form>
	);
}

export default HomeUnanswered;
