import { IQuestion } from "./types";
import QuestionFooter from "./QuestionNoteFooter";
import "../styles/question.css";

export interface Props {
	idx: number;
	question: IQuestion;
}

function QuestionNote(props: Props) {
	const idx = props.idx;
	const question = props.question;

		const questionUploadTime = new Date(question.uploadTime);

	const detailDate = (a:any) => {
		const year = questionUploadTime.getFullYear() - 2000;
		const month = questionUploadTime.getMonth()+1;
		const date = questionUploadTime.getDate();
		const questionUploadDate = `${year}년 ${month}월 ${date}일`

		const milliSeconds = Date.now() - a;
		const seconds = milliSeconds / 1000;
		if (seconds<86400){
			if (seconds < 60) return `방금 전`;
			const minutes = seconds / 60;
			if (minutes < 60) return `${Math.floor(minutes)}분 전`;
			const hours = minutes / 60;
			if (hours < 24) return `${Math.floor(hours)}시간 전`;
		} else {
			return questionUploadDate;
		}
		// const days = hours / 24;
		// if (days < 7) return `${Math.floor(days)}일 전`;
		// const weeks = days / 7;
		// if (weeks < 5) return `${Math.floor(weeks)}주 전`;
		// const months = days / 30;
		// if (months < 12) return `${Math.floor(months)}개월 전`;
		// const years = days / 365;
		// return `${Math.floor(years)}년 전`;
		// https://velog.io/@4775614/React-날짜-시간-계산-방금전-몇분전-몇시간전-몇일전-몇주전-몇개월전
	};
	
	const nowDate = detailDate(new Date(questionUploadTime));

	return (
		<div
			className="question-note"
			key={idx}
			style={{
				backgroundImage: `url("/notes/yellow-note.png")`,
			}}
		>
			<div className="note-header">
				<div className="note-profile-pic">
					<img src="/test-anony-profile-pic.jpg" alt="" />
				</div>
				<div className="note-time">{nowDate}</div>
			</div>
			<div className="note-content-box">
				<div className="note-content">{question.questionContents}</div>
			</div>
			<hr className="note-hr" />
			<QuestionFooter question={question} />
		</div>
	);
}

export default QuestionNote;
