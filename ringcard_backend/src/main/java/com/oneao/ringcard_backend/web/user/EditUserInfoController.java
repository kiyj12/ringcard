package com.oneao.ringcard_backend.web.user;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.user.UserEmailUpdateDto;
import com.oneao.ringcard_backend.domain.user.UserRingcardNameUpdateDto;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Objects;
import java.util.Optional;


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

    //username 수정하지 않는 버전
//    @PostMapping("/edit")
//    public ResponseEntity<HashMap<String, Boolean>> editUserInfo(@AuthenticationPrincipal PrincipalDetails loginUser, @Valid @RequestBody UserUpdateDto requestBody) {
////        System.out.println("editUserInfo1");
//        User user = loginUser.getUser();
////        System.out.println("editUserInfo2");
//        Long userId = user.getId();
////        System.out.println("editUserInfo3");
//
////        String newUsername = request.getParameter("loginName");
//        String username = user.getUsername();
////        System.out.println("editUserInfo4");
//
//        System.out.println(username);
////        System.out.println("editUserInfo5");
//
//        HashMap<String, Boolean> response=new HashMap<>(1){{
//            put("overlappedUsername", false);
//        }};
////        System.out.println("editUserInfo6");
//
//        // 만약에 고칠 아이디가 본인이거나 / null 이면 바뀜
//        // 고칠 아이디를 찾았는데, 다른 사람이면(아이디가 다르면) param False
////        Optional<User> findUser = userService.findByUsername(username);
////        System.out.println("editUserInfo7");
//
////            System.out.println("editUserInfo9");
//            System.out.println("userId = "+ userId);
//            userService.updateUserInfo(userId, requestBody);
//            return ResponseEntity.ok(response);
//
//
//    }

    @PostMapping("/edit/userRingcardName")
    public ResponseEntity<HashMap<String, Boolean>> editUserRingcardName(@AuthenticationPrincipal PrincipalDetails loginUser, @Valid @RequestBody UserRingcardNameUpdateDto requestBody) {
//        System.out.println("editUserInfo1");
        User user = loginUser.getUser();
//        System.out.println("editUserInfo2");
        Long userId = user.getId();
//        System.out.println("editUserInfo3");

//        String newUsername = request.getParameter("loginName");
        String username = user.getUsername();
//        System.out.println("editUserInfo4");

        System.out.println(username);
//        System.out.println("editUserInfo5");

        HashMap<String, Boolean> response=new HashMap<>(1){{
            put("overlappedUsername",false);
        }};

        System.out.println("userId = "+ userId);
        userService.updateUserRingcardName(userId, requestBody);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/edit/userEmail")
    public ResponseEntity<HashMap<String, Boolean>> editUserEmail(@AuthenticationPrincipal PrincipalDetails loginUser, @Valid @RequestBody UserEmailUpdateDto requestBody) {
//        System.out.println("editUserInfo1");
        User user = loginUser.getUser();
//        System.out.println("editUserInfo2");
        Long userId = user.getId();
//        System.out.println("editUserInfo3");

//        String newUsername = request.getParameter("loginName");
//        System.out.println("editUserInfo4");

//        System.out.println(username);
//        System.out.println("editUserInfo5");

        HashMap<String, Boolean> response=new HashMap<>(2){{
            put("sameUserEmail",false);
            put("overlappedUserEmail",false);
        }};

        String InputUserEmail = requestBody.getUserEmail();
        System.out.println("InputUserEmail = " + InputUserEmail);

        // 기존 이메일과 변경 할 이메일이 같을 때.
        if (Objects.equals(InputUserEmail, user.getUserEmail())){
            response.put("sameUserEmail",true);
            return ResponseEntity.ok(response);
        } else{
            // 기존 이메일과 변경 할 이메일이 같을 때 findByUserEmail에 Error 발생하기 때문에 else로 빼줌.
            Optional<User> findUserEmail = userService.findByUserEmail(InputUserEmail);
            System.out.println("findUserEmail = " + findUserEmail);

            if (findUserEmail.isPresent() && findUserEmail.get() == user){
                response.put("sameUserEmail",true);
                return ResponseEntity.ok(response);
            }
            else if (findUserEmail.isPresent() && findUserEmail.get() != user) {
//            System.out.println("editUserInfo8");
                response.put("overlappedUserEmail",true);
                return ResponseEntity.ok(response);
            } else {
//            System.out.println("editUserInfo9");
//            System.out.println("userId = "+ userId);
                userService.updateUserEmail(userId, requestBody);
                return ResponseEntity.ok(response);
            }
        }


//        System.out.println("editUserInfo6");

        // 만약에 고칠 아이디가 본인이거나 / null 이면 바뀜
        // 고칠 아이디를 찾았는데, 다른 사람이면(아이디가 다르면) param False
//        Optional<User> findUser = userService.findByUsername(username);
//        System.out.println("editUserInfo7");

//            System.out.println("editUserInfo9");
//        System.out.println("userId = "+ userId);
//        userService.updateUserEmail(userId, requestBody);
//        return ResponseEntity.ok(response);
    }

//    @PostMapping("/edit")
//    public ResponseEntity<HashMap<String, Boolean>> editUserInfo(@AuthenticationPrincipal PrincipalDetails loginUser, @Valid @RequestBody UserUpdateDto requestBody) {
//        System.out.println("editUserInfo1");
//        User user = loginUser.getUser();
//        System.out.println("editUserInfo2");
//        Long userId = user.getId();
//        System.out.println("editUserInfo3");
//
////        String newUsername = request.getParameter("loginName");
//        String newUsername = requestBody.getUsername();
//        System.out.println("editUserInfo4");
//
//        System.out.println(newUsername);
//        System.out.println("editUserInfo5");
//
//        HashMap<String, Boolean> response=new HashMap<>(1){{
//            put("overlappedUsername",false);
//        }};
//        System.out.println("editUserInfo6");
//
//        // 만약에 고칠 아이디가 본인이거나 / null 이면 바뀜
//        // 고칠 아이디를 찾았는데, 다른 사람이면(아이디가 다르면) param False
//        Optional<User> findUser = userService.findByUsername(newUsername);
//        System.out.println("editUserInfo7");
//
//        if (findUser.isPresent() && findUser.get() != user) {
//            System.out.println("editUserInfo8");
//            response.put("overlappedUsername",true);
//            return ResponseEntity.ok(response);
//        } else {
//            System.out.println("editUserInfo9");
//            System.out.println("userId = "+ userId);
//            userService.updateUserInfo(userId, requestBody);
//            return ResponseEntity.ok(response);
//        }
//
//    }

}