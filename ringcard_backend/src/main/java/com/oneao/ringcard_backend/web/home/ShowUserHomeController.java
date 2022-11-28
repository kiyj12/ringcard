package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.domain.answer.Answer;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.UserService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;


//멤버 홈 - 응답 질문
@Controller
@RequiredArgsConstructor
public class ShowUserHomeController {
    private final QuestionService questionService;
    private final AnswerService answerService;
    private final UserService userService;
    @GetMapping("userHome/{username}")
    public ResponseEntity<Model> showHomeAnswered(@PathVariable String username, Model model) {
        User user= userService.findByUsername(username).get();
        // Optional .orElseThrow()로 값 가져오기
        // https://minchul-son.tistory.com/472
        Long userId = user.getId();
        String userRingcardName = user.getUserRingcardName();
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(true, false);
        List<Question> questions = questionService.findAll(userId, questionSearchCond);
        List<Object> map = new ArrayList<>();
        for (Question question : questions) {
            Long qId = question.getId();
            Answer answer = answerService.findByQuestionId(qId).get();
            List<Object> innerMap = new ArrayList<>();
            innerMap.add(question);
            innerMap.add(answer);
            map.add(innerMap);
        }

        model.addAttribute("map", map);
        model.addAttribute("username", username);
        model.addAttribute("user", user);
        return ResponseEntity.ok(model);
    }
}