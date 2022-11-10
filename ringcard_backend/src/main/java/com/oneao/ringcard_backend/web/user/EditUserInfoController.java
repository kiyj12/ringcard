package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.user.UserUpdateDto;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;


@Controller
@RequiredArgsConstructor
@RequestMapping("mypage/info")
public class EditUserInfoController {

    private final UserService userService;

    @GetMapping("/edit")
    public String editUserInfoForm(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {

        User user = loginUser.getUser();
        Long userId = user.getId();
        model.addAttribute("user", user);
        model.addAttribute("userId", userId);
        return "mypage/editUserInfoForm";
    }

    @PostMapping("/edit")
    public String editUserInfo(@AuthenticationPrincipal PrincipalDetails loginUser, @ModelAttribute UserUpdateDto updateParam, RedirectAttributes redirectAttributes, HttpServletRequest request) {
        User user = loginUser.getUser();
        Long userId = user.getId();
        String newUsername = request.getParameter("loginName");


        // 만약에 고칠 아이디가 본인이거나 / null 이면 바뀜
        // 고칠 아이디를 찾았는데, 다른 사람이면(아이디가 다르면) param False
        Optional<User> findUser = userService.findByUsername(newUsername);
        if (findUser.isPresent() && findUser.get() != user) {
            redirectAttributes.addAttribute("overlappedUsername", true);
            return "redirect:" + request.getHeader("Referer");


        } else {
            userService.updateUserInfo(userId, updateParam);
            return "redirect:/mypage/info";
        }



    }
    
}