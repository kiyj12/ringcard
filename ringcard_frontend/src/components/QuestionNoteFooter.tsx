import React from "react";
import { IQuestion } from "./types";
import "../styles/question.css";
import axios from "axios";

export interface FooterProps {
	question: IQuestion;
}

function FooterUnansweredQuestion(props: FooterProps) {
	const question = props.question;

	const handleTrashcanClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/delete/question")
			.then((res) => {
				console.log(
					"Successfully enter handleTrashcanClick in QuestionNoteFooter :D"
				);
				console.log(res.data);
				window.history.go(0); // referrer로 이전 페이지를 받아오면 안 된다. 현재 페이지를 해야됨!!!
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleRestoreClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/restore/question")
			.then((res) => {
				console.log(
					"Successfully enter handleRestoreClick in QuestionNoteFooter :D"
				);
				console.log(res.data);

				window.history.go(0);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCollectionClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/inCollection")
			.then((res) => {
				console.log(
					"Successfully enter handleCollectionClick in QuestionNoteFooter :D"
				);
				console.log(res.data);
				window.history.go(0);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSendAnswerClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/unanswered/user")
			.then((res) => {
				console.log(
					"Successfully enter handleSendAnswerClick in QuestionNoteFooter :D"
				);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleEditAnswerClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/edit/user")
			.then((res) => {
				console.log(
					"Successfully enter handleEditAnswerClick in QuestionNoteFooter :D"
				);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDeleteAnswerClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/deleteAnswer")
			.then((res) => {
				console.log(
					"Successfully enter handleDeleteAnswerClick in QuestionNoteFooter :D"
				);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="note-footer">
				<div className="note-footer-leftside-btns-container">
					{question.inTrash === false ? (
						<button onClick={handleTrashcanClick}>
							<img
								className="note-trashcan-btn"
								src="/buttons/note-trashcan-btn.svg"
								alt=""
							/>
						</button>
					) : (
						<button onClick={handleRestoreClick}>
							<img
								className="note-trashcan-btn"
								src="/buttons/restore-from-trashcan-button.svg"
								alt=""
							/>
						</button>
					)}

					<button onClick={handleCollectionClick}>
						{question.inCollection === false ? (
							<img
								className="note-collection-btn"
								src="/buttons/note-collection-btn.svg"
								alt=""
							/>
						) : (
							<img
								className="note-collection-btn"
								src="/buttons/note-collection-active-btn.svg"
								alt=""
							/>
						)}
					</button>
				</div>
				<div className="note-footer-rightside-btns-container">
					{question.answered === false ? (
						<button onClick={handleSendAnswerClick}>
							<img
								className="note-send-answer-btn"
								src="/buttons/send-answer-btn.svg"
								alt=""
							/>
						</button>
					) : (
						<React.Fragment>
							<button onClick={handleEditAnswerClick}>
								<img
									className="note-edit-answer-btn"
									src="/buttons/edit-answer-btn.svg"
									alt=""
								/>
							</button>
							<button onClick={handleDeleteAnswerClick}>
								<img
									className="note-delete-answer-btn"
									src="/buttons/delete-answer-btn.svg"
									alt=""
								/>
							</button>
						</React.Fragment>
					)}
				</div>
			</div>
		</>
	);
}

export default FooterUnansweredQuestion;
