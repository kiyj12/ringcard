package com.oneao.ringcard_backend.web.answer;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.answer.Answer;
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

import java.util.List;


@Controller
@RequiredArgsConstructor
@RequestMapping("/question/{questionId}")
public class AddAnswerFormController {

    private final AnswerService answerService;
    private final QuestionService questionService;

    @GetMapping("/unanswered/user")
    public ResponseEntity<Model> answerForm(@PathVariable Long questionId, @AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        Long userId = loginUser.getUser().getId();

        Question question = questionService.findById(questionId, userId).get();
        // 미응답 질문 리스트에서 본인 제외
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(false, false);
        List<Question> questions = questionService.findAll(userId, questionSearchCond);
        questions.remove(question);
        model.addAttribute("questions", questions);
        System.out.println(questions);
        System.out.println(questions.size());
        model.addAttribute("question", question);
        System.out.println("model = " + model);
//        return "redirect:/{questionId}/completed";
//        return "question/unanswered";
        return ResponseEntity.ok(model);
    }

    @GetMapping("/completed/user")
    public ResponseEntity<Model> answerCompleted(@PathVariable Long questionId, @AuthenticationPrincipal PrincipalDetails loginUser, @RequestParam Long answerId, @RequestParam boolean status , Model model) {
        System.out.println("check complete user");
        Long userId = loginUser.getUser().getId();
        Question question = questionService.findById(questionId, userId).get();
        Answer answer = answerService.findById(answerId).get();
        model.addAttribute("question", question);
        model.addAttribute("answer", answer);
        System.out.println("model = " + model);

        return ResponseEntity.ok(model);
    }

}
