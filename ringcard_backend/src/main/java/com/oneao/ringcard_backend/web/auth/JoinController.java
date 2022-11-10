package com.oneao.ringcard_backend.web.auth;

import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Slf4j
@Controller
@RequiredArgsConstructor
public class JoinController {

    @Autowired
    private final UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/joinForm")
    public String addForm() {
        return "users/joinForm";
    }

    @PostMapping("/join")
    public String join(@Valid @ModelAttribute() User user, BindingResult bindingResult, HttpServletRequest request, RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            System.out.println("bindingResult.hasErrors()");
            return "users/joinForm";
        }
        else {
            if (userService.findByUsername(request.getParameter("username")).isPresent()) {
                redirectAttributes.addAttribute("overlappedUsername", true);
                System.out.println("overlapped");
                return "redirect:" + request.getHeader("Referer");
            }
        }
        System.out.println("user = " + user);
        user.setRoles("ROLE_USER");
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        userService.save(user);

        return "redirect:/loginForm";
    }
}
