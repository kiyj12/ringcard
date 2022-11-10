package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.answer.SpringDataJpaAnswerRepository;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.service.UserService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;


@Controller
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
    public String deleteAccount(@AuthenticationPrincipal PrincipalDetails loginUser, String password, RedirectAttributes redirectAttributes, HttpServletRequest request) {
        User user =  loginUser.getUser();
        Long userId = user.getId();
        if (Objects.equals(password, user.getPassword())) {
            for (Question question : questionService.findAllByUserId(userId)) {
                Long questionId = question.getId();
                answerRepository.deleteByQuestionIdLike(questionId);
                questionService.delete(questionId);
            }
            userService.deleteAccount(userId);
            return "redirect:/login";
        } else {
            redirectAttributes.addAttribute("passwordFalse", true);
            // 비밀번호 재입력하라고 띄워주기. 어떻게 하냐? url에 param 넣어서 이 값 false로 바꾼다음에 thymleaf로 표시되도록 해야하나?
            return "redirect:" + request.getHeader("Referer");
        }
    }
}
