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
    public ResponseEntity<Page<Question>> showHomeAnswered(@AuthenticationPrincipal PrincipalDetails loginUser, Model model, RedirectAttributes redirectAttributes, @PathVariable int page) {
        Long userId = loginUser.getUser().getId();
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(true, false);

        System.out.println("page==" + page);

//        PageRequest pageRequest1 = PageRequest.of(page, 5, Sort.by("id").ascending());
        PageRequest pageRequest = PageRequest.of(page, 5, Sort.by("uploadTime").descending());
//        PageRequest pageRequest3 = PageRequest.of(page, 5);

//        Page<Question> questions =questionService.findAll(userId, questionSearchCond, pageable);
        Page<Question> questions =questionService.findAll(userId, questionSearchCond, pageRequest);


        redirectAttributes.addAttribute("page", page);
//        redirectAttributes.addAttribute("size", size);

        model.addAttribute("questions", questions);

        System.out.println("questions==" + questions);
        return ResponseEntity.ok(questions);
    }
}