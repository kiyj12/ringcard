package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
@RequiredArgsConstructor
public class emptyTrashcanController {
    private final QuestionService questionService;
    private final AnswerService answerService;

    @GetMapping("home/trashcan/emptyTrashcan")
    public String emptyTrashcan(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        Long userId = loginUser.getUser().getId();
        questionService.emptyTrashcan(userId);

        return "redirect:/home/trashcan";
    }

}
