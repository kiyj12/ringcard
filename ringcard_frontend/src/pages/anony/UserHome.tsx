import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNoProfile from "../../components/HeaderNoProfile";
import QuestionNoteList from "../../components/QuestionNoteList";
import SendQuestionForm from "../../components/SendQuestionForm";
import "../../styles/layout/layout.css";
import "../../styles/userHome.css";

function UserHome() {
	const params = useParams();
	const userName = String(params.userName);
	const [user, setUser] = useState<any>([]);
	const [questionList, setQuestionList] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get("/userHome/" + userName)
			.then((res) => {
				console.log(res.data);
				setQuestionList(res.data.questions);
				setUser(res.data.user);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className="container">
			<HeaderNoProfile />
			<div className="down-background-img">
				<div className="contents-container">
					<div className="UserHome-profile-box">
						<img src="/profile.png" alt="" />
						<div className="UserHome-profile-username">
							{user.userRingcardName}
						</div>
					</div>
					<SendQuestionForm userName={userName} />
					<QuestionNoteList questionList={questionList} />
				</div>
			</div>
		</div>
	);
}

export default UserHome;
