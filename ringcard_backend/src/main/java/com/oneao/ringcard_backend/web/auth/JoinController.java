package com.oneao.ringcard_backend.web.auth;

import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashMap;

@Slf4j
@RestController
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

//    @PostMapping("/joinForm")
//    public ResponseEntity<HashMap<String, Boolean>> join(@Valid @ModelAttribute() User user, BindingResult bindingResult, HttpServletRequest request, RedirectAttributes redirectAttributes) {
//        HashMap<String, Boolean> response=new HashMap<>(){{
//            put("bindingResultHasErrors",false);
//            put("overlapped",false);
//        }};
//
//        if (bindingResult.hasErrors()) {
//            System.out.println("bindingResult.hasErrors()");
//            response.put("bindingResultHasErrors", true);
//            return ResponseEntity.ok(response);
//        } else if (userService.findByUsername(request.getParameter("username")).isPresent()) {
//            redirectAttributes.addAttribute("overlappedUsername", true);
//            System.out.println();
//            response.put("overlapped", true);
//            return ResponseEntity.ok(response);
//        }
//
//        user.setRoles("ROLE_USER");
//        String rawPassword = user.getPassword();
//        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
//        user.setPassword(encPassword);
//        userService.save(user);
//        return ResponseEntity.ok(response);
//    }

    // return responseEntity
    @PostMapping("/joinForm")
    public ResponseEntity<HashMap<String, Boolean>> joinV4(@Valid @RequestBody User requestBody, BindingResult bindingResult) {
        HashMap<String, Boolean> response=new HashMap<>(2){{
            put("bindingResultHasErrors",false);
            put("overlappedUsername",false);
        }};

        Boolean hasErrorFlag = false;

        if (bindingResult.hasErrors()) {
            System.out.println("bindingResult.hasErrors()");
            response.put("bindingResultHasErrors",true);
            hasErrorFlag = true;
        }
        if (userService.findByUsername(requestBody.getUsername()).isPresent()) {
            System.out.println("overlappedUsername");
            response.put("overlappedUsername",true);
            hasErrorFlag = true;
        }
        if(hasErrorFlag){
            return ResponseEntity.ok(response);
        }

//        User user = new User();
        System.out.println("user = " + requestBody);

//        user.setUserRingcardName(requestBody.getUserRingcardName());
//        user.setUserEmail(requestBody.getUserEmail());
//        user.setUsername(requestBody.getUsername());
        String rawPassword = requestBody.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        requestBody.setPassword(encPassword);
        requestBody.setRoles("ROLE_USER");
        System.out.println(requestBody);
        userService.save(requestBody);
        return ResponseEntity.ok(response);
    }


// 성공한 버전
//    @PostMapping("/joinForm")
//    public void joinV3(@Valid @RequestBody User requestBody, BindingResult bindingResult) {
//        String password = requestBody.getPassword();
//        System.out.println(password);
//        if (bindingResult.hasErrors()) {
//            System.out.println("bindingResult.hasErrors()");
//            return;
//        }
//        else if (userService.findByUsername(requestBody.getUsername()).isPresent()) {
//            System.out.println("overlapped");
//            return;
//        }
//
////        User user = new User();
//        System.out.println("user = " + requestBody);
//
////        user.setUserRingcardName(requestBody.getUserRingcardName());
////        user.setUserEmail(requestBody.getUserEmail());
////        user.setUsername(requestBody.getUsername());
//        String rawPassword = requestBody.getPassword();
//        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
//        requestBody.setPassword(encPassword);
//        requestBody.setRoles("ROLE_USER");
//        System.out.println(requestBody);
//        userService.save(requestBody);
//    }


// 예전 버전 기록용. 221119 responseBody 적용 전.
//    @PostMapping("/joinForm")
//    public void joinV0(@Valid @RequestBody User requestBody, BindingResult bindingResult) {
//        String password = requestBody.getPassword();
//        System.out.println(password);
//        if (bindingResult.hasErrors()) {
//            System.out.println("bindingResult.hasErrors()");
//            return;
//        }
//        else if (userService.findByUsername(requestBody.getUsername()).isPresent()) {
//            redirectAttributes.addAttribute("overlappedUsername", true);
//            System.out.println("overlapped");
//            return;
//        }
//
//        User user = new User();
//        System.out.println("user = " + user);
//        user.setUserRingcardName(requestBody.getUserRingcardName());
//        user.setUserEmail(requestBody.getUserEmail());
//        user.setUsername(requestBody.getUsername());
//        String rawPassword = requestBody.getPassword();
//        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
//        user.setPassword(encPassword);
//        user.setRoles("ROLE_USER");
//        System.out.println(user);
//        userService.save(user);
//    }
}