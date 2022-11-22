package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.answer.SpringDataJpaAnswerRepository;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.service.UserService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Objects;


@RestController
@RequiredArgsConstructor
@RequestMapping("mypage/delete/account")
public class DeleteAccountController {

    private final UserService userService;
    private final QuestionService questionService;
    private final SpringDataJpaAnswerRepository answerRepository;

    @GetMapping()
    public String deleteAccountForm() {
        return "mypage/deleteAccount";
    }



    @PostMapping()
    public ResponseEntity<HashMap<String, Boolean>> deleteAccount(@AuthenticationPrincipal PrincipalDetails loginUser, String password, RedirectAttributes redirectAttributes, HttpServletRequest request) {
        HashMap<String, Boolean> response=new HashMap<>(1){{
            put("passwordError",false);
        }};

        User user =  loginUser.getUser();
        Long userId = user.getId();
        if (Objects.equals(password, user.getPassword())) {
            for (Question question : questionService.findAllByUserId(userId)) {
                Long questionId = question.getId();
                answerRepository.deleteByQuestionIdLike(questionId);
                questionService.delete(questionId);
            }
            userService.deleteAccount(userId);
            response.put("passwordError", true);
            return ResponseEntity.ok(response);
        } else {
//            redirectAttributes.addAttribute("passwordFalse", true);
            return ResponseEntity.ok(response);
        }
    }
}
