package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


@Controller
@RequiredArgsConstructor
public class GetUserInfoController {

    private final UserService userService;

//    @GetMapping("/{userId}")
//    public String showUserInfo(@PathVariable Long userId, Model model) {
//        User user = userService.findById(userId);
//        model.addAttribute("user", user);
//        model.addAttribute("userId", userId);
//        return "mypage/userInfo";
//    }
    @GetMapping("mypage/info")
    public ResponseEntity<List<User>> showUserInfo(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {

        User user = loginUser.getUser();
        List<User> userList = Arrays.asList(user);

//        List<User> userList = Collections.emptyList();
    //        Long userId = user.getId();
    //        model.addAttribute("user", user);
    //        model.addAttribute("userId", userId);
        return ResponseEntity.ok(userList);
    }
}
