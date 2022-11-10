package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Objects;


@Controller
@RequiredArgsConstructor
@RequestMapping("mypage/edit/password")
public class EditPasswordController {

    private final UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping()
    public String editPasswordForm() {
        return "mypage/editPassword";
    }

    @PostMapping()
    public String editPassword(@AuthenticationPrincipal PrincipalDetails loginUser, String pastPassword, String newPassword, String newPasswordConfirm, RedirectAttributes redirectAttributes, HttpServletRequest request) {
        User user = loginUser.getUser();
        Long userId = user.getId();
        // 주기능 : 현재 비번 인증 끝나면 새로운 비번으로 업데이트

        if (pastPassword.isEmpty() || pastPassword.isBlank() ) {
            System.out.println(pastPassword);
            redirectAttributes.addAttribute("pastPasswordBlank", true);
            return "redirect:" + request.getHeader("Referer");
        }
        bCryptPasswordEncoder.matches(pastPassword, user.getPassword());
        if (bCryptPasswordEncoder.matches(pastPassword, user.getPassword())) {
            // 새로운 비번 없음
            if (newPassword.isEmpty() || newPassword.isBlank()){
                redirectAttributes.addAttribute("newPasswordBlank", true);
                return "redirect:" + request.getHeader("Referer");
            }
            else if (Objects.equals(newPassword, newPasswordConfirm)) {
                String encNewPassword = bCryptPasswordEncoder.encode(newPassword);
                userService.updateUserPassword(userId, encNewPassword);
                return "redirect:/mypage/info/edit";
                // TODO: 알림으로 비밀번호 변경되었습니다.
            } else {
                // 현재 비번 인증 안되면, '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.' 알람
                redirectAttributes.addAttribute("newPasswordFalse", true);
                return "redirect:" + request.getHeader("Referer");
            }
        } else {
            // 현재 비번 인증 안되면, '현재 비밀번호를 정확히 입력해주세요' 알람
            redirectAttributes.addAttribute("pastPasswordFalse", true);
            return "redirect:" + request.getHeader("Referer");
        }
    }
}
