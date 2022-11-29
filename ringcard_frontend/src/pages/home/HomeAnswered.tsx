import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import QuestionNoteList from "../../components/QuestionNoteList";
import { useParams } from "react-router-dom";

function HomeAnswered(props:any) {
	const [questionList, setQuestionList] = useState<any[]>([]);

	const [totalPages, setTotalPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>();
	const { page } = useParams();

	useEffect(() => {
		axios
			.get(`/home/answered/${page}`)
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.content);
				setTotalPages(res.data.totalPages)
				setPageNumber(res.data.number+1);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	
	function BtnToPageUp(){
		function handleClick(e: any){
			const pageNumber = Number(page);
			const newPage = pageNumber + 1;
			if (totalPages === undefined){}
			else if (newPage>=totalPages){
			}else{
				window.location.href=`/home/answered/${newPage}`
			}
		}
		return (<button onClick={handleClick}>Up</button>);
	}

	function BtnToPageDown(){
		function handleClick(e: any){
			const pageNumber = Number(page);
			const newPage = pageNumber - 1;
			if (newPage<0){
			}else{
				window.location.href=`/home/answered/${newPage}`
			}
		}
		return (<button onClick={handleClick}>Down</button>);
	}

	return (
		<div className="container">
			<Header />
			<Navigation />
			<div className="container-body">

				<BtnToPageUp/>
				<p>{pageNumber}/{totalPages}</p>
				<BtnToPageDown/>

				<QuestionNoteList questionList={questionList} />
			</div>
		</div>
	);
}

export default HomeAnswered;
