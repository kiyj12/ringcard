package com.oneao.ringcard_backend.web.question;

import com.oneao.ringcard_backend.domain.answer.Answer;

import com.oneao.ringcard_backend.domain.question.Question;

import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import com.oneao.ringcard_backend.service.UserService;
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


@Controller
@RequiredArgsConstructor
public class AddQuestionFormController {
    private final QuestionService questionService;
    private final AnswerService answerService;

    private final UserService userService;

//    //@GetMapping("question/{questionId}/anony")
//    public String addFormV1(@PathVariable Long questionId, Model model){
//        Question question = questionService.findById(questionId).get();
//        model.addAttribute("question", question);
//        return "question/answeredAnony";
//    }
//
//    //@GetMapping("question/{questionId}/anony")
//    // 이거 하면 안되는 이유: html에 questio 객체 이용해야 질문, 답변 정보 넣을 수 있다.
//    public String addFormV2(){
//        return "question/answeredAnony";
//    }

    @GetMapping("question/{questionId}/anony/{page}")
    public ResponseEntity<Model> addFormV3(@PathVariable Long questionId, Model model, @PathVariable int page){
        Question question = questionService.findByIdNoAuth(questionId).get();
        Answer answer = answerService.findByQuestionId(questionId).get();

        // user도 모델에 보내기
        User user = userService.findById(question.getUserId()).get();

        // 해당 질문 제외한 다른 응답 질문 리스트
        PageRequest pageRequest = PageRequest.of(page, 5, Sort.by("uploadTime").descending());
        Page<Question> questions = questionService.findAllAnsweredNotInTrashNoAuth(pageRequest);
//        questions.remove(question);

        List<Object> map = new ArrayList<>();
        for (Question q : questions) {
            Long qId = q.getId();
            Answer a = answerService.findByQuestionId(qId).get();
            List<Object> innerMap = new ArrayList<>();
            innerMap.add(q);
            innerMap.add(a);
            map.add(innerMap);
        }

        HashMap<String, Integer> pageInfo = new HashMap<>(2){{
            put("totalPages", questions.getTotalPages());
            put("number", questions.getNumber());
        }};

        model.addAttribute("map", map);
        model.addAttribute("pageInfo", pageInfo);
        model.addAttribute("question", question);
        model.addAttribute("answer", answer);
        model.addAttribute("user", user);
        return ResponseEntity.ok(model);
    }
}