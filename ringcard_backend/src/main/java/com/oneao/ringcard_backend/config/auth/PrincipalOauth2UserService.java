package com.oneao.ringcard_backend.config.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PrincipalOauth2UserService extends DefaultOAuth2UserService {
//public class PrincipalOauth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

//    @Autowired
//    private final UserService userService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        System.out.println("userRequest: "+userRequest);
        System.out.println("getClientRegistration(): " + userRequest.getClientRegistration());
        System.out.println("getAccessToken(): " + userRequest.getAccessToken());
        System.out.println("getAttributes: "+super.loadUser(userRequest).getAttributes());

        OAuth2User oauth2User = super.loadUser(userRequest);
        return super.loadUser(userRequest);
    }
//    @SneakyThrows
//    @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//
//        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
//        OAuth2User oAuth2User = delegate.loadUser(userRequest);
//
//        System.out.println(new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(userRequest));
//        System.out.println(new ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(oAuth2User));
//        return oAuth2User;
//    }
}
