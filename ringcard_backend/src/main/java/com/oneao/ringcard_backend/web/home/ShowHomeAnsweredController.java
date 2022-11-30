package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class ShowHomeAnsweredController {
    private final QuestionService questionService;
    private final AnswerService answerService;

    @GetMapping("/home/answered/{page}")
    public ResponseEntity<Page<Question>> showHomeAnswered(@AuthenticationPrincipal PrincipalDetails loginUser, @PathVariable int page) {
        Long userId = loginUser.getUser().getId();
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(true, false);

        PageRequest pageRequest = PageRequest.of(page, 5, Sort.by("uploadTime").descending());
        Page<Question> questions =questionService.findAll(userId, questionSearchCond, pageRequest);

        return ResponseEntity.ok(questions);
    }
}