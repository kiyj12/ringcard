package com.oneao.ringcard_backend.web.auth;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
public class LoginController {
    @GetMapping(value = {"/loginForm", "", "/"})
    public ResponseEntity loginForm(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("LoginController.loginForm");
//
//        response.setStatus(302);
//        response.setHeader("Location", "/loginForm");

        HttpHeaders headers = new HttpHeaders();
        headers.set("Location", "/loginForm");
        return ResponseEntity.ok(headers);
    }

//    @GetMapping("/logout")
//    public void
}
