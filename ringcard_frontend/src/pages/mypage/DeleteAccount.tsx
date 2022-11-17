import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/layout/layout.css";
import "../../styles/layout/header.css";
import "../../styles/user/inputBox.css";
import "../../styles/deleteAccount.css";
import HeaderUser from "../../components/HeaderUser";


const DeleteAccount = () => {
	
	function ButtonToUserInfo(){
		function handleClick(e: any){
				window.location.href="/mypage/info"
		}
			return(
				<button className="deleteAccount-button-cancel" onClick={handleClick}>
						<div className="deleteAccount-button-tag-cancel">비밀번호 변경 취소하기</div>
				</button>

			)
	}
	
	return (
		<div className="container">
			<HeaderUser></HeaderUser>
			<div>
				<div className="input-box">
					{/* width 줄여도 글자 밑에 박스랑 다른 글자 침범하지 않도록! */}
					<div className="input-box-in" style={{height:'120px'}}>
						<div className="input-tag deleteAccount-tag">탈퇴하실 경우, 회원님의 링카 계정과 그동안 쌓인 질문과 답변들이 전부 즉시 사라집니다.
						탈퇴하시겠습니까? 링카드는 울어요ㅠㅠ
						</div>
					</div>
					<div className="input-box-in">
						<div className="input-tag deleteAccount-tag">탈퇴를 원하시면 비밀번호를 입력해주세요. </div>
						<input className="input deleteAccount-input" placeholder="비밀번호를 입력해주세요"></input>
					</div>
					{/* <i if="${param.overlappedUsername}" text="'이미 존재하는 아이디입니다.'"></i> */}

					{/* <div className="input-box-in">
						<div className="input-tag deleteAccount-tag">새 비밀번호</div>
						<input className="input deleteAccount-input" placeholder="새 비밀번호"></input>
					</div>

					<div className="input-box-in">
						<div className="input-tag deleteAccount-tag">새 비밀번호 확인</div>
						<input className="input deleteAccount-input" placeholder="새 비밀번호 확인"></input>
					</div> */}

					<div className="input-box-in">
						<button className="deleteAccount-button">
						<div className="deleteAccount-button-tag">비밀번호 변경하기</div>
						</button>
					</div>

					<div className="input-box-in">
						<ButtonToUserInfo/>
					</div>
				</div>
			</div>
			{/* 여기에 비밀번호 찾기?? */}
			{/* <div className="deleteAccount-delete-box">
				<div className="deleteAccount-delete">
					<a className="deleteAccount-delete-tag" href="/">링카 계정을 완전히 지우고 싶어요</a>
				</div>
			</div> */}
		</div>
	);
};

export default DeleteAccount;