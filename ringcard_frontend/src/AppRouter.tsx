import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomeUnanswered from "./pages/home/HomeUnanswered";
import UserInfo from "./pages/mypage/UserInfo";
import EditUserInfo from "./pages/mypage/EditUserInfo";
import HomeAnswered from "./pages/home/HomeAnswered";
import HomeCollection from "./pages/home/HomeCollection";
import HomeTrashcan from "./pages/home/HomeTrashcan";

import QuestionUnanswered from "./pages/question/QuestionUnanswered";
import Login from "./pages/login/Login";
import Join from "./pages/login/Join";
import EditPassword from "./pages/mypage/EditPassword";
import AnswerCompletedPage from "./pages/question/AnswerCompletedPage";
import QuestionAnswered from "./pages/question/QuestionAnswered";
import UserHome from "./pages/anony/UserHome";
import DeleteAccount from "./pages/mypage/DeleteAccount";
import QuestionAnony from "./pages/anony/QuestionAnony";

const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigation />} />
					<Route path="/home/unanswered/:page" element={<HomeUnanswered />} />
					<Route path="/home/answered/:page" element={<HomeAnswered />} />
					<Route path="/home/trashcan/:page" element={<HomeTrashcan />} />
					<Route path="/home/collection/:page" element={<HomeCollection />} />
					<Route
						path="/question/:questionId/unanswered/user"
						element={<QuestionUnanswered />}
					/>
					<Route
						path="/question/:questionId/edit/user"
						element={<QuestionAnswered />}
					/>
					<Route
						path="/question/:questionId/completed/user/:page"
						element={<AnswerCompletedPage />}
					/>
					<Route
						path="/question/:questionId/anony/:page"
						element={<QuestionAnony />}
					/>
					<Route path="/userHome/:userName/:page" element={<UserHome />} />
					<Route path="/mypage/info" element={<UserInfo />} />
					<Route path="/mypage/info/edit" element={<EditUserInfo />} />

					<Route path="" element={<Login />} />
					<Route path="/" element={<Login />} />
					<Route path="/loginForm" element={<Login />} />
					<Route path="/joinForm" element={<Join />} />
					<Route path="/mypage/edit/password" element={<EditPassword />} />
					<Route path="/mypage/delete/account" element={<DeleteAccount />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default AppRouter;
