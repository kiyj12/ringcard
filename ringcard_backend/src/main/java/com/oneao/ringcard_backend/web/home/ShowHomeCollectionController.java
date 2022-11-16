package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class ShowHomeCollectionController {
    private final QuestionService questionService;

    @GetMapping("/home/collection")
    public ResponseEntity<List<Question>> showHomeCollection(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        Long userId = loginUser.getUser().getId();
        List<Question> questions = questionService.findAllInCollection(userId);
        model.addAttribute("questions", questions);
        return ResponseEntity.ok(questions);
    }
}