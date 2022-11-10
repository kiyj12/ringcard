package com.oneao.ringcard_backend.web.question;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Controller
@RequiredArgsConstructor
public class RestoreQuestionController {
    private final QuestionService questionService;

    @GetMapping("question/{questionId}/restore/question")
    public String restoreQuestionController(@PathVariable Long questionId, @AuthenticationPrincipal PrincipalDetails loginUser){
        questionService.updateInTrash(questionId);
        return "redirect:/home/trashcan";
    }
}