package com.oneao.ringcard_backend.web.question;

import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.servlet.http.HttpServletRequest;


@Controller
@RequiredArgsConstructor
public class CollectQuestionController {
    private final QuestionService questionService;

    @GetMapping("/question/{questionId}/inCollection")
    public String collectQuestion(@PathVariable Long questionId, HttpServletRequest request) {
        questionService.updateInCollection(questionId);
        return "redirect:" + request.getHeader("Referer");
    }
}
