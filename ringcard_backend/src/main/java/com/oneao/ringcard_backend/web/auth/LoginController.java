package com.oneao.ringcard_backend.web.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

@Slf4j
@RestController
public class LoginController {
    @GetMapping(value = {"/loginForm", "", "/"})
    public void loginForm(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("LoginController.loginForm");
//        System.out.println("requestBody = " + requestBody);
    }

//    @GetMapping("/logout")
//    public void
}
