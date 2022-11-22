package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.user.EditPasswordDto;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.user.UserUpdateDto;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.*;


@Controller
@RequiredArgsConstructor
@RequestMapping("mypage/info")
public class EditUserInfoController {

    private final UserService userService;

    @GetMapping("/edit")
    public ResponseEntity<User> editUserInfoForm(@AuthenticationPrincipal PrincipalDetails loginUser, Model model) {

        User user = loginUser.getUser();
//        List<User> userList = Arrays.asList(user);

//        List<User> userList = Collections.emptyList();
        //        Long userId = user.getId();
        //        model.addAttribute("user", user);
        //        model.addAttribute("userId", userId);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/edit")
    public ResponseEntity<HashMap<String, Boolean>> editUserInfo(@AuthenticationPrincipal PrincipalDetails loginUser, @Valid @RequestBody UserUpdateDto requestBody) {
        System.out.println("editUserInfo1");
        User user = loginUser.getUser();
        System.out.println("editUserInfo2");
        Long userId = user.getId();
        System.out.println("editUserInfo3");

//        String newUsername = request.getParameter("loginName");
        String newUsername = requestBody.getUsername();
        System.out.println("editUserInfo4");

        System.out.println(newUsername);
        System.out.println("editUserInfo5");

        HashMap<String, Boolean> response=new HashMap<>(1){{
            put("overlappedUsername",false);
        }};
        System.out.println("editUserInfo6");

        // 만약에 고칠 아이디가 본인이거나 / null 이면 바뀜
        // 고칠 아이디를 찾았는데, 다른 사람이면(아이디가 다르면) param False
        Optional<User> findUser = userService.findByUsername(newUsername);
        System.out.println("editUserInfo7");

        if (findUser.isPresent() && findUser.get() != user) {
            System.out.println("editUserInfo8");
            response.put("overlappedUsername",true);
            return ResponseEntity.ok(response);
        } else {
            System.out.println("editUserInfo9");
            System.out.println("userId = "+ userId);
            userService.updateUserInfo(userId, requestBody);
            return ResponseEntity.ok(response);
        }

    }
    
}