package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class ShowHomeUnansweredController {
    private final QuestionService questionService;

    @GetMapping("home/unanswered")
    public ResponseEntity<List<Question>> showHomeAnswered(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        System.out.println("loginUser = " + loginUser);
        Long userId = loginUser.getUser().getId();
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(false, false);
        List<Question> questions = questionService.findAll(userId, questionSearchCond);

//        System.out.println(questions);
        model.addAttribute("questions", questions);

        return ResponseEntity.ok(questions);
    }
}
