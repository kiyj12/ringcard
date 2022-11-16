import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomeUnanswered from "./pages/home/HomeUnanswered";
import UserInfo from "./pages/mypage/UserInfo";
import EditUserInfo from "./pages/mypage/EditUserInfo";
import QuestionUnanswered from "./pages/question/QuestionUnanswered";
import Login from "./pages/login/Login";

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
          <Route path="/mypage/info/edit" element={<EditUserInfo />} />
          <Route path="/loginForm" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
