package com.oneao.ringcard_backend.web.question;

import com.oneao.ringcard_backend.domain.answer.Answer;

import com.oneao.ringcard_backend.domain.question.Question;

import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class AddQuestionFormController {
    private final QuestionService questionService;
    private final AnswerService answerService;

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

    @GetMapping("question/{questionId}/anony")
    public String addFormV3(@PathVariable Long questionId, Model model){
        Question question = questionService.findByIdNoAuth(questionId).get();
        Answer answer = answerService.findByQuestionId(questionId).get();
        // 해당 질문 제외한 다른 응답 질문 리스트
        List<Question> questions = questionService.findAllAnsweredNotInTrashNoAuth();
        questions.remove(question);
        model.addAttribute("questions", questions);
        model.addAttribute("question", question);
        model.addAttribute("answer", answer);
        return "question/answeredAnony";
    }
}