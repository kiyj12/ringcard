package com.oneao.ringcard_backend.web.answer;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.answer.Answer;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
        model.addAttribute("question", question);
        
        System.out.println("model = " + model);
//        return "redirect:/{questionId}/completed";
//        return "question/unanswered";
        return ResponseEntity.ok(model);
    }

    @GetMapping("/completed/user")
    public ResponseEntity<Model> answerCompleted(@PathVariable Long questionId, @AuthenticationPrincipal PrincipalDetails loginUser, Model model) {
        System.out.println("check complete user");
        Long userId = loginUser.getUser().getId();
        Question question = questionService.findById(questionId, userId).get();

        Long answerId = answerService.findByQuestionId(questionId).get().getId();
        Answer answer = answerService.findById(answerId).get();

        // 미응답 질문 리스트에서 본인 제외
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(false, false);

        PageRequest pageRequest = PageRequest.of(0, 5);
        Page<Question> questions =questionService.findAll(userId, questionSearchCond, pageRequest);

//        questions.remove(question);

        model.addAttribute("question", question);
        model.addAttribute("answer", answer);
        model.addAttribute("questions", questions);
        System.out.println("model = " + model);

        return ResponseEntity.ok(model);
    }

}
