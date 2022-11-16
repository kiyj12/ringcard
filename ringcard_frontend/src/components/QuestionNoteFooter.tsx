import React, { useState } from "react";
import { IQuestion } from "./types";
import "../styles/question.css";
import { url } from "inspector";
import axios from "axios";

export interface FooterProps {
	question: IQuestion;
}

function FooterUnansweredQuestion(props: FooterProps) {
	const question = props.question;
	const referrer = document.referrer;

	const handleTrashcanClick = async () => {
		const questionId = String(question.id);
		await axios
			.get("/question/" + questionId + "/delete/question")
			.then((res) => {
				console.log(res.data);
				window.location.href = referrer;
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="note-footer">
				<div className="note-footer-leftside-btns-container">
					<button onClick={handleTrashcanClick}>
						{question.inTrash === false ? (
							<img
								className="note-trashcan"
								src="/buttons/note-trashcan-btn.svg"
								alt=""
							/>
						) : (
							<img
								className="note-trashcan"
								src="/buttons/restore-from-trashcan-button.svg"
								alt=""
							/>
						)}
					</button>
					<button>
						{question.inCollection === false ? (
							<img
								className="note-collection"
								src="/buttons/note-collection-btn.svg"
								alt=""
							/>
						) : (
							<img
								className="note-collection"
								src="/buttons/note-collection-active-btn.svg"
								alt=""
							/>
						)}
					</button>
				</div>
				<div className="note-footer-rightside-btns-container">
					{question.answered === false ? (
						<button>
							<img
								className="note-send-answer"
								src="/buttons/send-answer-btn.svg"
								alt=""
							/>
						</button>
					) : (
						<React.Fragment>
							<button>
								<img
									className="note-edit-answer"
									src="/buttons/edit-answer-btn.svg"
									alt=""
								/>
							</button>
							<button>
								<img
									className="note-delete-answer"
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
