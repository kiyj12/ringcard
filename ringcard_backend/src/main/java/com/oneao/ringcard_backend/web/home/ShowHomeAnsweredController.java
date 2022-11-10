package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class ShowHomeAnsweredController {
    private final QuestionService questionService;
    private final AnswerService answerService;

    @GetMapping("/home/answered")
    public String showHomeAnswered(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        Long userId = loginUser.getUser().getId();
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(true, false);
        List<Question> questions = questionService.findAll(userId, questionSearchCond);
        model.addAttribute("questions", questions);
        return "home/answered";
    }
}