import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomeUnanswered from "./pages/home/HomeUnanswered";
import UserInfo from "./pages/mypage/UserInfo";
import UserInfoEdit from "./pages/mypage/UserInfoEdit";
import QuestionUnanswered from "./pages/question/QuestionUnanswered";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/home/unanswered" element={<HomeUnanswered />} />
          <Route
            path="/questoin/:questionId/unanswered/user"
            element={<QuestionUnanswered />}
          />
          <Route path="/mypage/info" element={<UserInfo />} />
          <Route path="/mypage/info/edit" element={<UserInfoEdit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
