import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomeUnanswered from "./pages/home/HomeUnanswered";
import HomeAnswered from "./pages/home/HomeAnswered";
import HomeTrashcan from "./pages/home/HomeTrashcan";
import QuestionUnanswered from "./pages/question/QuestionUnanswered";

const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigation />} />
					<Route path="/home/unanswered" element={<HomeUnanswered />} />
					<Route path="/home/answered" element={<HomeAnswered />} />
					<Route path="/home/trashcan" element={<HomeTrashcan />} />
					<Route
						path="/questoin/:questionId/unanswered/user"
						element={<QuestionUnanswered />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default AppRouter;
