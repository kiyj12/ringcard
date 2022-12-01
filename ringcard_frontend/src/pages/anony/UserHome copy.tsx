import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import QuestionNoteList from "../../components/QuestionNoteList";
import SendQuestionForm from "../../components/SendQuestionForm";
import "../../styles/layout/layout.css";
import "../../styles/userHome.css";
import "../../styles/viewMore.css";
import { toast, ToastContainer, Zoom} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function UserHomeCopy() {
	const params = useParams();
	const userName = String(params.userName);
	const [user, setUser] = useState<any>([]);
	const [questionList, setQuestionList] = useState<any[]>([]);

	const [totalPages, setTotalPages] = useState<Number>(0);
	const [pageNumber, setPageNumber] = useState<Number>(0);
	const { page } = useParams();

	useEffect(() => {
		axios
			.get("/userHome/" + userName + "/"+ page)
			.then((res) => {
				console.log(res.data);
				setUser(res.data.user);
				setQuestionList(res.data.questions.content);
				setTotalPages(res.data.questions.totalPages);
				setPageNumber(res.data.questions.number+1);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function BtnToViewMore(){
		function handleClick(e: any){
			const newPage = pageNumber;
			if (totalPages === undefined){}
			else if (newPage>=totalPages){
			}else{
			axios
			.get("/userHome/" + userName + "/"+ newPage)
			.then((res) => {
				console.log(res.data);
				setUser(res.data.user);
				// setQuestionList1(res.data.questions.content);
				setQuestionList([...questionList, ...res.data.questions.content]);
				setTotalPages(res.data.questions.totalPages);
				setPageNumber(res.data.questions.number+1);
			})
			.catch((err) => {
				console.log(err);
			});
			}
		}
		return (
		<div className="view-more-btn-section">
		{totalPages === pageNumber ? undefined : (<button className="view-more-btn" onClick={handleClick}>+ 더보기</button>)}
		</div>
		);
	}

	return (
		<div className="container">
			<HeaderNoProfile />
			<div className="contents-container">
				<div className="UserHome-profile-box">
					<img src="/profile.png" alt="" />
					<div className="UserHome-profile-username">
						{user.userRingcardName}
					</div>
				</div>
				<SendQuestionForm userName={userName} />

				<div className="UserHome-questionlist-box ">
					<div className="UserHome-down-background-img">
						<QuestionNoteList questionList={questionList} />
						<BtnToViewMore/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserHomeCopy;
