import React, { useState } from "react";
import { IQuestion } from "./types";
import "../styles/question.css";

export interface FooterProps {
	question: IQuestion;
}

function FooterAnsweredQuestion(props: FooterProps) {
	const question = props.question;

	return (
		<>
			<div className="note-footer">
				{question.answered === false}

				<div className="note-footer-leftside-btns-container">
					<img
						className="note-trashcan"
						src="/buttons/trashcan-btn.svg"
						alt=""
					/>
					<img
						className="note-collection"
						src="/buttons/collection-btn.svg"
						alt=""
					/>
				</div>
				<div className="note-footer-rightside-btns-container">
					<img
						className="note-collection"
						src="/buttons/collection-btn.svg"
						alt=""
					/>
				</div>
			</div>
		</>
	);
}

export default FooterAnsweredQuestion;
