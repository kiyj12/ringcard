import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import Question from "./Question";

function QuestionListTemplate() {
	// Paging
	const [page, setPage] = useState(1);
	const [totalCnt, setTotalCnt] = useState(0);

	const [questionList, setQuestionList] = useState([]);

	const changePage = () => {
		setPage(page);
		getQuestionList(page);
	};
	console.log("hello");

	const getQuestionList = async (page: number) => {
		await axios
			.get(`/home/unanswered`, {
				params: { page: page },
			})
			.then((res) => {
				console.log("[rcSeq.tsx] getQuestionList() success :D");
				console.log(res.data);

				setQuestionList(res.data.questionList);
				setTotalCnt(res.data.pageCnt);
			})
			.catch((err) => {
				console.log("[rcSeq.tsx] getQuestionList() error :<");
				console.log(err);
			});
	};

	useEffect(() => {
		getQuestionList(1);
	}, []);

	return (
		<>
			<Pagination
				activePage={page}
				itemsCountPerPage={5}
				totalItemsCount={totalCnt}
				pageRangeDisplayed={5}
				prevPageText={"<"}
				nextPageText={">"}
				onChange={changePage}
			/>
			{questionList.map(function(question, idx) {
				return (
					<div key={idx}>
						<Question obj={question} key={idx} />
					</div>
				);
			})}
		</>
	);
}

export default QuestionListTemplate;
