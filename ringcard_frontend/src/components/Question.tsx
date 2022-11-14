import React, { useState } from "react";

function Question(props: { obj: any; }) {
	const question = props.obj;

	const [show, setShow] = useState(false);

	const [content, setContent] = useState(question.content);

	function updateToggle() {
		setShow((show) => !show);
	}

	return (
		<>
			<div className="question-card"></div>
		</>
	);
}

export default Question;
