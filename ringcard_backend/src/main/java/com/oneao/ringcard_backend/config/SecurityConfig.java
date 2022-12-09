package com.oneao.ringcard_backend.config;

import com.oneao.ringcard_backend.config.auth.PrincipalOauth2UserService;
import com.oneao.ringcard_backend.config.filter.LoginRedirectHomeFilter;
import com.oneao.ringcard_backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.session.DisableEncodeUrlFilter;

@RequiredArgsConstructor
@Slf4j
//@Configuration
@EnableWebSecurity(debug = true) // 스프링 시큐리티 필터(이 파일)가  스프링 필터체인에 등록이 됩니다.
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private final CorsConfig corsConfig;

    @Autowired
    private final PrincipalOauth2UserService principalOauth2UserService;

    private final UserService userService;

//    private final AuthenticationFailureHandler customFailureHandler;

    // 해당 메소드는 리턴되는 오브젝트를 IoC로 등록해준다.
    @Bean
    public BCryptPasswordEncoder encodePwd() {
        return new BCryptPasswordEncoder();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                .mvcMatchers(HttpMethod.OPTIONS, "/**").permitAll() // Preflight Request 허용해주기
//                .antMatchers("/home/**", "/mypage/**", "/**/user")
                .antMatchers( "/loginForm", "/login/**", "/logout", "/userHome/**", "/**/anony/**", "/lo", "/test/**", "http://localhost:3000/oauth2").permitAll()
                .anyRequest().authenticated()
//        http.formLogin()
//                .successForwardUrl("/home/unanswered")
//                .defaultSuccessUrl("/home/unanswered")
//                .loginPage("/loginForm")
//                .loginProcessingUrl("/login")
////                .failureHandler(customFailureHandler) // 로그인 실패 핸들러
//                .and()
//                .addFilter(corsConfig.corsFilter())
//                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
//                .addFilter(new JwtAuthorizationFilter(authenticationManager(), userService))
//                .addFilterBefore(new LoginRedirectHomeFilter(), DisableEncodeUrlFilter.class);
//        http.logout()
//                .logoutUrl("/logout")
////                .logoutSuccessUrl("/loginForm").permitAll()
//                .deleteCookies(JwtProperties.COOKIE_NAME)
//                .invalidateHttpSession(true)
//                .logoutSuccessHandler(new CustomLogoutSuccessHandler())
        .and()
                .oauth2Login()
//                .loginPage("/loginForm")
//                 구글 로그인이 완료된 뒤의 후처리가 필요함. 1. 코드받기(인증) 2. 엑세스 토큰(권한) 3. 사용자 프로필 정보를 가져오고 4. 그 정보를 토대로 회원가입을 자동으로 진행시킴.
                .userInfoEndpoint()
                .userService(principalOauth2UserService);



// 참고.
//        http
//                .authorizeRequests()
//                .antMatchers("/userHome/**").permitAll() // login URL에는 누구나 접근 가능하게 합니다.
//                .anyRequest().authenticated() // 그 이외에는 인증된 사용자만 접근 가능하게 합니다.
//                .and()
//                .oauth2Login() // oauth2Login 설정 시작
//                .userInfoEndpoint() // oauth2Login 성공 이후의 설정을 시작
//                .userService(principalOauth2UserService); // customOAuth2UserService에서 처리하겠다.
    }
}
