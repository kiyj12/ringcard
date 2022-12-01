package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.domain.answer.Answer;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.UserService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


//멤버 홈 - 응답 질문
@Controller
@RequiredArgsConstructor
public class ShowUserHomeController {
    private final QuestionService questionService;
    private final UserService userService;
    private final AnswerService answerService;
    @GetMapping("userHome/{username}/{page}")
    public ResponseEntity<Model> showHomeAnswered(@PathVariable String username, @PathVariable int page, Model model) {
        User user= userService.findByUsername(username).get();
        // Optional .orElseThrow()로 값 가져오기
        // https://minchul-son.tistory.com/472
        Long userId = user.getId();
        QuestionSearchCond questionSearchCond = new QuestionSearchCond(true, false);

        PageRequest pageRequest = PageRequest.of(page, 5, Sort.by("uploadTime").descending());
        Page<Question> questions =questionService.findAll(userId, questionSearchCond, pageRequest);

        List<Object> map = new ArrayList<>();
        for (Question question : questions.getContent()) {
            Long qId = question.getId();
            Answer answer = answerService.findByQuestionId(qId).get();
            List<Object> innerMap = new ArrayList<>();
            innerMap.add(question);
            innerMap.add(answer);
            map.add(innerMap);
        }
        HashMap<String, Integer> pageInfo = new HashMap<>(2){{
            put("totalPages", questions.getTotalPages());
            put("number", questions.getNumber());
        }};

        model.addAttribute("map", map);
        model.addAttribute("pageInfo", pageInfo);
        model.addAttribute("username", username);
        model.addAttribute("user", user);
        return ResponseEntity.ok(model);
    }

//    @GetMapping("userHome/{username}/{page}")
//    public ResponseEntity<Model> showHomeAnswered(@PathVariable String username, @PathVariable int page, Model model) {
//        User user= userService.findByUsername(username).get();
//        // Optional .orElseThrow()로 값 가져오기
//        // https://minchul-son.tistory.com/472
//        Long userId = user.getId();
//        String userRingcardName = user.getUserRingcardName();
//        QuestionSearchCond questionSearchCond = new QuestionSearchCond(true, false);
//
//        PageRequest pageRequest = PageRequest.of(page, 5, Sort.by("uploadTime").descending());
//        Page<Question> questions =questionService.findAll(userId, questionSearchCond, pageRequest);
////        List<Question> questions =questionService.findAll1(userId, questionSearchCond);
//
//        model.addAttribute("questions", questions);
//        model.addAttribute("username", username);
//        model.addAttribute("user", user);
//        return ResponseEntity.ok(model);
//    }
}