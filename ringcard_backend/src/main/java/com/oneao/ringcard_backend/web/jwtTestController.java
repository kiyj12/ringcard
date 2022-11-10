package com.oneao.ringcard_backend.web;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class jwtTestController {

    private final UserService userService;

    @GetMapping("/jwtTest")
    public String getCurrentUser(@AuthenticationPrincipal PrincipalDetails loginUser) {
        User user = userService.findByUsername(loginUser.getUsername()).get();
        return "<h1> it's me </h1>";
    }
}
