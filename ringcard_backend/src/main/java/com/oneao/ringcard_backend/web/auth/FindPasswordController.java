package com.oneao.ringcard_backend.web.auth;

import com.oneao.ringcard_backend.domain.user.FindPasswordDto;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class FindPasswordController {

    private final UserService userService;

    @GetMapping("/findPassword")
    public ResponseEntity<Model> getFindPassword(Model model) {
        model.addAttribute("voidModel", "hi");

        return ResponseEntity.ok(model);
    }

    @PostMapping("/findPassword")
    public ResponseEntity<HashMap<String, Boolean>> sendEmail(@Valid @RequestBody HashMap<String, String> requestBody, Model model, BindingResult bindingResult){
        HashMap<String, Boolean> response=new HashMap<>(2){{
            put("bindingResultHasErrors",false);
            put("noEmailLikeThat",false);
        }};
        try {
            Boolean hasErrorFlag = false;

            if (bindingResult.hasErrors()) {
                System.out.println("bindingResult.hasErrors()");
                response.put("bindingResultHasErrors",true);
                hasErrorFlag = true;
            }
            String userEmail = requestBody.get("userEmail");
            System.out.println("userEmail = " + userEmail);
            if (userService.findByUserEmail(userEmail).isEmpty()) {
                System.out.println("noEmailLikeThat");
                response.put("noEmailLikeThat",true);
                hasErrorFlag = true;
            }
            if (hasErrorFlag){
                return ResponseEntity.ok(response);
            }

            Optional<User> optionalUser = userService.findByUserEmail(userEmail);
            System.out.println("memberEmail = " + userEmail);
            System.out.println("optionalUser = " + optionalUser);
            if (optionalUser.isPresent()) {
                FindPasswordDto dto = userService.createMailAndChangePassword(userEmail);
                userService.mailSend(dto);
            }

        } catch (Exception err) {
            System.out.println("err = " + err);
        }
        return ResponseEntity.ok(response);
    }
}
