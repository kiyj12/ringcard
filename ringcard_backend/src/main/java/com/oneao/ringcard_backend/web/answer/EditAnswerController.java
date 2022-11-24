package com.oneao.ringcard_backend.web.answer;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.answer.Answer;
import com.oneao.ringcard_backend.domain.answer.AnswerEditDto;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;


@Controller
@RequiredArgsConstructor
@RequestMapping("/question/{questionId}")
@RestController
public class EditAnswerController {
    private final AnswerService answerService;
    private final QuestionService questionService;

    @GetMapping("/edit/user")
    public ResponseEntity<Model> editAnswerForm(@PathVariable Long questionId, @AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        Long userId = loginUser.getUser().getId();
        Question question = questionService.findById(questionId, userId).get();
        Answer oldAnswer = answerService.findByQuestionId(questionId).get();
        String oldAnswerContents = oldAnswer.getAnswerContents();

        QuestionSearchCond questionSearchCond = new QuestionSearchCond(false, false);
        List<Question> questions = questionService.findAll(userId, questionSearchCond);
        model.addAttribute("questions", questions);
        model.addAttribute("question", question);
        model.addAttribute("oldAnswer", oldAnswerContents);

        return ResponseEntity.ok(model);
    }

    @PostMapping("/edit/user")
    public void editAnswer (@PathVariable Long questionId, RedirectAttributes redirectAttributes, @RequestBody HashMap<String, String> requestBody, HttpServletRequest request) throws IOException {
        Long answerId = answerService.findByQuestionId(questionId).get().getId();
        System.out.println("requestBody = " + requestBody);
        String newAnswerContents = requestBody.get("answerContents");
        if (requestBody != null) {
            if (newAnswerContents != null && newAnswerContents != "") {
                AnswerEditDto answerEditDto = new AnswerEditDto(newAnswerContents);
                answerService.editAnswer(answerId, answerEditDto);
//                redirectAttributes.addAttribute("questionId", questionId);
//                redirectAttributes.addAttribute("answerId", answerId);
//                redirectAttributes.addAttribute("status", true);
//
//                return "redirect:/question/{questionId}/completed/user";
            }
//                return "redirect:" + request.getHeader("Referer");
            }
         // TODO: else로 에러 던지기 얘는 지금 임시방편

    }
}
