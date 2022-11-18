package com.oneao.ringcard_backend.config;

import com.oneao.ringcard_backend.config.filter.LoginRedirectHomeFilter;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.session.DisableEncodeUrlFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
@Configuration
@EnableWebSecurity(debug = true) // 스프링 시큐리티 필터(이 파일)가  스프링 필터체인에 등록이 됩니다.
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private final CorsConfig corsConfig;

    private final UserService userService;

    private final AuthenticationFailureHandler customFailureHandler;



    // 해당 메소드는 리턴되는 오브젝트를 IoC로 등록해준다.
    @Bean
    public BCryptPasswordEncoder encodePwd() {
        return new BCryptPasswordEncoder();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.cors().and()
                .authorizeRequests()
                .antMatchers("/home/**", "/mypage/**", "/**/user")
                .authenticated()
                .anyRequest().permitAll();
        http.formLogin()
                .successForwardUrl("/home/unanswered")
                .loginPage("/loginForm")
                .loginProcessingUrl("/login")

                .failureHandler(customFailureHandler) // 로그인 실패 핸들러
            .and()
                .addFilter(corsConfig.corsFilter())
                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), userService))
                .addFilterBefore(new LoginRedirectHomeFilter(), DisableEncodeUrlFilter.class);
        http.logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/")
                .deleteCookies(JwtProperties.COOKIE_NAME)
                .invalidateHttpSession(true);
    }

    /* CORS */
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:8080"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "OPTIONS", "PATCH", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
