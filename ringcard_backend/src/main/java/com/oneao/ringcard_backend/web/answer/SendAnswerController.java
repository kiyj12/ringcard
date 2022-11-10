package com.oneao.ringcard_backend.web.answer;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.answer.Answer;
import com.oneao.ringcard_backend.domain.answer.AnswerEditDto;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Optional;


@Controller
@RequiredArgsConstructor
public class SendAnswerController {
    private final AnswerService answerService;
    private final QuestionService questionService;
    @PostMapping("/question/{questionId}/unanswered/user")
    public String sendAnswer(@PathVariable Long questionId, @AuthenticationPrincipal PrincipalDetails loginUser, Answer answer, RedirectAttributes redirectAttributes) {
        // find Question by questionId
        Long userId = loginUser.getUser().getId();
        Optional<Question> AnsweredQuestion = questionService.findById(questionId, userId);
        // answer한 후 뒤로가기 해서, answer이 이미 DB에 들어간 상황 : edit
        if (AnsweredQuestion.isPresent() && AnsweredQuestion.get().isAnswered()){
            Long answerId = answerService.findByQuestionId(questionId).get().getId();
            if (answer.getAnswerContents() != null && answer.getAnswerContents() != "") {
                AnswerEditDto answerEditDto = new AnswerEditDto(answer.getAnswerContents());
                answerService.editAnswer(answerId, answerEditDto);
                redirectAttributes.addAttribute("questionId", questionId);
                redirectAttributes.addAttribute("answerId", answerId);
                redirectAttributes.addAttribute("status", true);
            }
        } else { // 정상적으로 처음 answer한 상황
            Answer savedAnswer = answerService.save(answer);
            questionService.updateToAnswered(questionId);
            redirectAttributes.addAttribute("questionId", questionId);
            redirectAttributes.addAttribute("answerId", savedAnswer.getId());
            redirectAttributes.addAttribute("status", true);
        }
        return "redirect:/question/{questionId}/completed/user";
    }
}
