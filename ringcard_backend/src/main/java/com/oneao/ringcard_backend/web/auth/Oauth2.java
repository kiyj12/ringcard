package com.oneao.ringcard_backend.web.auth;

import java.util.HashSet;
import java.util.Set;

import com.oneao.ringcard_backend.config.auth.PrincipalDetails;
import com.twitter.clientlib.TwitterCredentialsBearer;
import com.twitter.clientlib.TwitterCredentialsOAuth2;
import com.twitter.clientlib.ApiException;
import com.twitter.clientlib.api.TwitterApi;
import com.twitter.clientlib.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequiredArgsConstructor
@RequestMapping()
public class Oauth2 {
//    TwitterApi apiInstance = new TwitterApi(new TwitterCredentialsOAuth2(
//            System.getenv("TWITTER_OAUTH2_CLIENT_ID"),
//            System.getenv("TWITTER_OAUTH2_CLIENT_SECRET"),
//            System.getenv("TWITTER_OAUTH2_ACCESS_TOKEN"),
//            System.getenv("TWITTER_OAUTH2_REFRESH_TOKEN")));


    @GetMapping("/2/users/me")
    public void oauth54536(){

//        try {
//            SingleUserLookupResponse result = apiInstance.users().findMyUser(null, null, null);
//            System.out.println(result);
//        } catch (ApiException e) {
//            System.err.println("Exception when calling UsersApi#findMyUser");
//            System.err.println("Status code: " + e.getCode());
//            System.err.println("Reason: " + e.getResponseBody());
//            System.err.println("Response headers: " + e.getResponseHeaders());
//            e.printStackTrace();
//        }
    }
    @GetMapping("/lo")
    public String oauth5456(){
        return "oauth";
    }

    @GetMapping("/test/login")
    public @ResponseBody String testLogin(Authentication authentication){
        System.out.println("/test/login================");
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        System.out.println("authentication: " + principalDetails.getUser());
        return "세션 정보 확인";
    }
    @GetMapping("/2/tweets/{id}")
    public void oauth2(@PathVariable String id) throws ApiException {
        TwitterApi apiInstance = new TwitterApi(new TwitterCredentialsOAuth2(
                "OHZuVXNLOU9Yd2xEZTM1Q3pSTl86MTpjaQ",
                "R5LrpInanUZYCRH8l9aq5oUGBoxfAHNQTPjs8vhqB2zGjKI29m",
                "1516353113430851586-Qhjz3YpRRL1yFqSa5PYcyjf5gmJhU1",
                "", false));

        Set<String> tweetFields = new HashSet<>();
        tweetFields.add("author_id");
        tweetFields.add("id");
        tweetFields.add("created_at");

        try {
            // findTweetById
            Get2TweetsIdResponse result = apiInstance.tweets().findTweetById(id)
                    .tweetFields(tweetFields)
                    .execute();
            if(result.getErrors() != null && result.getErrors().size() > 0) {
                System.out.println("Error:");

                result.getErrors().forEach(e -> {
                    System.out.println(e.toString());
                    if (e instanceof ResourceUnauthorizedProblem) {
                        System.out.println(((ResourceUnauthorizedProblem) e).getTitle() + " " + ((ResourceUnauthorizedProblem) e).getDetail());
                    }
                });
            } else {
                System.out.println("findTweetById - Tweet Text: " + result.toString());
            }
        } catch(ApiException e) {
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }






//        // http://localhost:8080/2/tweets/1460323737035677698
//        // https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
//        // 성공
//
//        TwitterApi apiInstance = new TwitterApi(new TwitterCredentialsBearer("AAAAAAAAAAAAAAAAAAAAAOWsiwEAAAAADbR%2FLCPhXEE5vHgf%2BCli0CgKOjk%3DMjxq0SR9yVxDzuVCiN5sjmeiG26QYTSrIu6BM2sQozQY3ViVtd"));
//
//        Set<String> tweetFields = new HashSet<>();
//        tweetFields.add("author_id");
//        tweetFields.add("id");
//        tweetFields.add("created_at");
//
//        try {
//            // findTweetById
//            Get2TweetsIdResponse result = apiInstance.tweets().findTweetById(id)
//                    .tweetFields(tweetFields)
//                    .execute();
//            if (result.getErrors() != null && result.getErrors().size() > 0) {
//                System.out.println("Error:");
//
//                result.getErrors().forEach(e -> {
//                    System.out.println(e.toString());
//                    if (e instanceof ResourceUnauthorizedProblem) {
//                        System.out.println(((ResourceUnauthorizedProblem) e).getTitle() + " " + ((ResourceUnauthorizedProblem) e).getDetail());
//                    }
//                });
//            } else {
//                System.out.println("findTweetById - Tweet Text: " + result.toString());
//            }
//        } catch (ApiException e) {
//            System.err.println("Status code: " + e.getCode());
//            System.err.println("Reason: " + e.getResponseBody());
//            System.err.println("Response headers: " + e.getResponseHeaders());
//            e.printStackTrace();
//        }


//    try {
//        // findTweetById
//        Get2TweetsIdResponse result = apiInstance.tweets().findTweetById("20")
//                .tweetFields(tweetFields)
//                .execute();
//        if(result.getErrors() != null && result.getErrors().size() > 0) {
//            System.out.println("Error:");
//
//            result.getErrors().forEach(e -> {
//                System.out.println(e.toString());
//                if (e instanceof ResourceUnauthorizedProblem) {
//                    System.out.println(((ResourceUnauthorizedProblem) e).getTitle() + " " + ((ResourceUnauthorizedProblem) e).getDetail());
//                }
//            });
//        } else {
//            System.out.println("findTweetById - Tweet Text: " + result.toString());
//        }
//    } catch(ApiException e) {
//        System.err.println("Status code: " + e.getCode());
//        System.err.println("Reason: " + e.getResponseBody());
//        System.err.println("Response headers: " + e.getResponseHeaders());
//        e.printStackTrace();
//    }
    }
