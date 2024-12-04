import AnswerForm from "./AnswerForm";
import { IQuestion } from "../types";
import "../../styles/question.css";
import "../../styles/answerQuestionNote.css";
// import "../../styles/question.css";
import NowDate from "../utils/NowDate";
import HyperlinkBox from "../atoms/HyperlinkBox";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useForm } from "react-hook-form";

export interface Props {
	question: IQuestion;
}

function AnswerFormQuestionNote(props: Props) {
	const question = props.question;

	const tapePositionList = [
		"width: 130px; height: 28px; margin: 0 auto; margin-top: -8px;",
		"width: 130px; height: 28px; margin: 0 auto 0 auto; margin-top: -2.5px; transform: rotate(6deg);",
		"width: 120px; height: 28px; transform: rotate(-30deg); margin: 7px auto -15px -13px;",
		"width: 130px; height: 28px; transform: rotate(-18deg); margin: 3px auto -30px -8px;",
		"width: 130px; height: 28px; transform: rotate(20deg); margin: 6px -9px -10px auto;",
		"width: 100px; height: 28px; transform: rotate(36deg); margin: 8px -11px -10px auto;",
	];
	const chosenPosition = tapePositionList[question.tapePosition - 1];

	const qIdStr = String(question.id);
	const tapeTypeStr = String(question.tapeType);
	const tapeUrl = String("/masking-tapes/tape" + tapeTypeStr + ".svg");

	const eachNote = document.getElementById(qIdStr);
	eachNote?.setAttribute("style", chosenPosition);

	const qNoteType = String(question.noteType);

	const [submitted, setSubmitted] = useState(false);

  const printRef = useRef<HTMLInputElement>(null);


	// AnswerForm start
	const [answerContents, setAnswerContents] = useState();
	const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

	const onSubmit = async (data: any) => {
		await new Promise((r) => setTimeout(r, 100));

		// alert(JSON.stringify(data));
		console.log(data);
		// 섭밋할 때의 data.answerContents : 트위터에 텍스트로 들어갈 답변 내용.
		
		console.log(question.questionContents);

		await axios
			.post("/question/" + question.id + "/unanswered/user", data)
			.then(async(res) => {
				console.log("posthere");
				console.log(data.answerContents);
				setAnswerContents(data.answerContents);

				if(checked){
					const tweetData = {
						text: "질문 : " + question.questionContents + "\n답변 : " + data.answerContents + " https://m.place.naver.com/restaurant/1720673456/home?entry=ple"
					};

				await axios({
						method: 'post',
						url: 'https://ringca.herokuapp.com/https://api.twitter.com/2/tweets',
						data: tweetData,
						headers: {
							'Authorization': `Bearer ${cookies.accessToken.accessToken}`,
						}
					}).then(async(res) => {
						console.log(res);
						// alert("생성이 완료되었습니다.");
						});
				}
				// capture img start
				setSubmitted(true);
				const element:any = printRef.current;
				const canvas = await html2canvas(element, {
					backgroundColor: "none",
					logging: true,
					useCORS: true //to enable cross origin perms
				});

				const dataImg = canvas.toDataURL("image/jpg");
				const link = document.createElement("a");

				if (typeof link.download === "string") {
					link.href = dataImg;
					console.log("");
					link.download = "image.jpg";

					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
				} else {
					window.open(dataImg);
				}
				// setSubmitted(false);

				// capture img fin
				window.location.href = "/question/" + question.id + "/completed/user";

			})
			.catch(function (error) {
				console.log(error.config);
			});
	};

	const {
		register,
		handleSubmit,
		// formState: { isSubmitting, isDirty, errors },
	} = useForm();

	// 유저 입력 값을 넣을 변수
	const [checkItemContent, setCheckItemContent] = useState("");

	// 줄 수를 계산해서 저장할 변수
	const [textareaHeight, setTextareaHeight] = useState(0);

	// 사용자 입력 값이 변경될 때마다 checkItemContent에 저장하고
	// 엔터('\n') 개수를 세서 textareaHeight에 저장
	const checkItemChangeHandler = (event: any) => {
		setTextareaHeight(event.target.value.split("\n").length - 1);
		setCheckItemContent(event.target.value);
	};

	function checkLengthHandler(event: any) {
		var text = event.target.value;
		var test_length = text.length;

		//최대 글자수
		var max_length = 5000;

		if (test_length > max_length) {
			alert(max_length + "자 이상 작성할 수 없습니다.");
			text = text.substr(0, max_length);
			event.target.value = text;
			event.target.focus();
		}
	}

	// checkBox Start
	const [checked, setChecked] = useState(false);

	const checkHandler = (event:any) => {
		if(checked){
			setChecked(false);
		}else if(checked === false){
			setChecked(true);
		}
	};

	const CheckToSendTwitter = () => {
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={(e) => checkHandler(e)} />
    </div>
  	);
	};
	// checkBox Fin.
	// AnswerForm fin

	return (
		<>
			<div className="each-question-note-box">
				<div className="QuestionNote-maskingTape-box">
					<img
						className="QuestionNote-maskingTape-img"
						id={qIdStr}
						src={tapeUrl}
						alt=""
					/>
				</div>
				{/* <div ref={printRef}> */}
				<div
					className="each-question-note-header-edge-img-box"
					style={{
						backgroundImage: `url("/notes/note${qNoteType}-top-edge.png")`,
					}}
				></div>
				<div
					className="each-question-note-body"
					style={{
						backgroundImage: `url("/notes/note${qNoteType}-body.png")`,
					}}
				>
					<div className="each-note-header">
						<div className="note-profile-pic">
							<img src="/profile-imgs/oring_2.png" alt="" />
						</div>
						<NowDate questionUploadTime={question.uploadTime} />
					</div>
					<div className="each-note-content-box">
						<div className="each-note-content">{question.questionContents}</div>
					</div>
					{question.questionHyperlink == null ||
					question.questionHyperlink === "" ? undefined : (
						<div className="QuestionNote-note-hyperlink-box">
							<HyperlinkBox hyperlinkContent={question.questionHyperlink} />
						</div>
					)}

					<hr className="note-hr" />
					{/* <button type="button" className="img-download-btn">
						Download as Image
					</button> */}
					<div className="each-note-answer-form-box">

						{/* AnswerForm에서 가져온 코드*/}
						<form className="answerForm-answer-form" onSubmit={handleSubmit(onSubmit)}>
							<div className="answerForm-text-box checkItem">
								<span className="cursur-bar">|</span>
								<textarea
									id="answerAdd"
									className="answerForm-textarea"
									value={checkItemContent}
									onInput={checkItemChangeHandler}
									onKeyUp={checkLengthHandler}
									style={{
										height: (textareaHeight + 1) * 27 + "px",
										whiteSpace: "pre-wrap",
									}}
									placeholder="답변을 적어주세요"
									{...register("answerContents", {
										required: "답변이 입력되지 않았습니다.",
									})}
								></textarea>
							</div>

							<div className="answerForm-btn-box">
								<button type="submit">
									<img
										className="note-send-answer-btn"
										src="/buttons/send-answer-btn.svg"
										alt=""
									/>
								</button>
							</div>
							<div>
								{/* <BtnToCreateTweet/> */}
								<p>Post Tweet?</p>
								<CheckToSendTwitter/>
							</div>
						</form>


					</div>
				</div>
				{/* </div> */}
				{/* printRef fin */}
				<div
					className="each-question-note-footer-edge-img-box"
					style={{
						backgroundImage: `url("/notes/note${qNoteType}-bottom-edge.png")`,
					}}
				></div>
				
				
				{/* <AnswerForm questionId={question.id} questionContents={question.questionContents} /> */}
				{/* <div>
					<img src="/background-img/twitter-share-note.png" style={{width:"400px"}} alt="" />
					<div className="each-note-content-box">
						<div className="each-note-content">{question.questionContents}</div>
					</div>
				</div> */}

			{/* <div
				style={{
					width: "400px",
					height: "300px",
					backgroundImage: `url("/background-img/twitter-share-note.png")`,
          display: "flex"
				}}
			>
        <div style={{margin: "auto auto"}}>{question.questionContents}</div>
      </div> */}
			</div>
			
			<div ref={printRef} style={{
				zIndex:"-1", 
				position:"absolute"}}>
				<div
					style={{
						// width: "400px",
						// textAlign: "center",
						// height: "300px"
					}}
				>
					
					<div className="answerForm-twitter-preview-box" style={{ margin: "auto auto", display: "absolute", top: "50%" }}>
						{/* <div className="each-note-content-box">
							<div className="each-note-content">{question.questionContents}</div>
						</div> */}
						<div className="answerForm-note-content-box">
							<div className="answerForm-note-content">{question.questionContents}</div>
						</div>
					<img src="/background-img/twitter-share-note.png" className="answerForm-twitter-preview-background-img" style={{
						width: "400px"}} alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default AnswerFormQuestionNote;
