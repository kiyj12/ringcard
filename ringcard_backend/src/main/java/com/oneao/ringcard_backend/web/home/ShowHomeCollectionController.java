package com.oneao.ringcard_backend.web.home;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@Controller
@RequiredArgsConstructor
public class ShowHomeCollectionController {
    private final QuestionService questionService;

    @GetMapping("/home/collection")
    public ResponseEntity<Page<Question>> showHomeCollection(@AuthenticationPrincipal PrincipalDetails loginUser, @PageableDefault(size=5, sort="uploadTime", direction = Sort.Direction.DESC) Pageable pageable) {
        Long userId = loginUser.getUser().getId();
        Page<Question> questions = questionService.findAllInCollection(userId, pageable);
        return ResponseEntity.ok(questions);
    }
}