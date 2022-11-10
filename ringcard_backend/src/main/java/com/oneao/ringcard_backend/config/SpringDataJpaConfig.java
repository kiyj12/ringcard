package com.oneao.ringcard_backend.config;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.oneao.ringcard_backend.config.auth.PrincipalDetailsService;
import com.oneao.ringcard_backend.domain.answer.AnswerRepository;
import com.oneao.ringcard_backend.domain.answer.JpaAnswerRepository;
import com.oneao.ringcard_backend.domain.answer.SpringDataJpaAnswerRepository;
import com.oneao.ringcard_backend.domain.user.JpaUserRepository;
import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.user.UserRepository;
import com.oneao.ringcard_backend.domain.user.SpringDataJpaUserRepository;
import com.oneao.ringcard_backend.domain.question.JpaQuestionRepository;
import com.oneao.ringcard_backend.domain.question.QuestionRepository;
import com.oneao.ringcard_backend.domain.question.SpringDataJpaQuestionRepository;
import com.oneao.ringcard_backend.service.AnswerService;
import com.oneao.ringcard_backend.service.UserService;
import com.oneao.ringcard_backend.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class SpringDataJpaConfig {

    private final SpringDataJpaUserRepository springDataJpaUserRepository;
    private final SpringDataJpaQuestionRepository springDataJpaQuestionRepository;
    private final SpringDataJpaAnswerRepository springDataJpaAnswerRepository;

    @Bean
    public UserService userService() {
        return new UserService(userRepository());
    }

    @Bean
    public UserRepository userRepository() {
        return new JpaUserRepository(springDataJpaUserRepository);
    }

    @Bean
    public QuestionService questionService() {
        return new QuestionService(questionRepository());
    }

    @Bean
    public QuestionRepository questionRepository() {
        return new JpaQuestionRepository(springDataJpaQuestionRepository, springDataJpaAnswerRepository);
    }

    @Bean
    public AnswerService answerService() {
        return new AnswerService(answerRepository());
    }

    @Bean
    public AnswerRepository answerRepository() {
        return new JpaAnswerRepository(springDataJpaAnswerRepository);
    }

    @Bean
    public PrincipalDetailsService principalDetailsService() {
        return new PrincipalDetailsService(userService());
    }

    private User user;
    @Bean
    public PrincipalDetails principalDetails() {
        return new PrincipalDetails(user);
    }


}
