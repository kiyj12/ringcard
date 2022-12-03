package com.oneao.ringcard_backend.web.question;

import com.oneao.ringcard_backend.domain.question.QuestionSendDto;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.UserService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;

import java.sql.Array;
import java.util.List;

import static java.sql.Types.NULL;


@Controller
@RequiredArgsConstructor
@RestController
public class SendQuestionController {

    private final QuestionService questionService;
    private final AnswerService answerService;
    private final UserService userService;

    @PostMapping({"question/{questionId}/anony"})
    public void addQuestion(@PathVariable Long questionId, RedirectAttributes redirectAttributes, HttpServletRequest request,@RequestBody QuestionSendDto requestBody) {

        // 이미 띄워져있는 question의 정보
        Question beforeQuestion= questionService.findByIdNoAuth(questionId).get();
        Long userId = beforeQuestion.getUserId();

    // new Question 시작
        String questionContents = requestBody.getQuestionContents();
        String questionHyperlink = requestBody.getQuestionHyperlink();
        Integer questionNoteType = requestBody.getNoteType();
        Integer questionTapeType = requestBody.getTapeType();


        Integer[] noteList = { 1, 2, 3, 4 };
        Integer[] tapeList = { 1, 2, 3, 4, 5 };

        if (questionNoteType == null) {
            int noteIdx = (int) (Math.random() * noteList.length);
            questionNoteType = noteList[noteIdx];
        }
        if (questionTapeType == null) {
            int tapeIdx = (int) (Math.random() * tapeList.length);
            questionTapeType = tapeList[tapeIdx];
        }

        Question question = new Question(questionContents, questionHyperlink, userId, false, false, false, questionNoteType, questionTapeType);

        System.out.println("question = " + question);
        Question savedQuestion = questionService.save(question);

//        redirectAttributes.addAttribute("questionId", beforeQuestion.getId());
//        redirectAttributes.addAttribute("status",true);
//
//        return "redirect:/question/{questionId}/anony/{page}";
    }

    @PostMapping({"userHome/{username}/{page}"})
    public void addQuestion2(@PathVariable String username, HttpServletRequest request, @RequestBody QuestionSendDto requestBody, @PathVariable int page) {
        User user = userService.findByUsername(username).get();

        String questionContents = requestBody.getQuestionContents();
        String questionHyperlink = requestBody.getQuestionHyperlink();
        Integer questionNoteType = requestBody.getNoteType();
        Integer questionTapeType = requestBody.getTapeType();

        Integer[] noteList = { 1, 2, 3, 4 };
        Integer[] tapeList = { 1, 2, 3, 4, 5 };

        if (questionNoteType == null) {
            int noteIdx = (int) (Math.random() * noteList.length);
            questionNoteType = noteList[noteIdx];
        }
        if (questionTapeType == null) {
            int tapeIdx = (int) (Math.random() * tapeList.length);
            questionTapeType = tapeList[tapeIdx];
        }

        Long userId = user.getId();
        Question question = new Question(questionContents, questionHyperlink, userId, false, false, false, questionNoteType, questionTapeType);

        System.out.println("question = " + question);
        Question savedQuestion = questionService.save(question);
        System.out.println(savedQuestion);
        System.out.println(user);

    }
}
