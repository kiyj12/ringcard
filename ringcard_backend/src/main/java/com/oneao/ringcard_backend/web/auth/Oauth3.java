package com.oneao.ringcard_backend.web.auth;

import com.twitter.clientlib.ApiException;
import com.twitter.clientlib.TwitterCredentialsOAuth2;
import com.twitter.clientlib.api.TwitterApi;
import com.twitter.clientlib.model.Get2TweetsIdResponse;
import com.twitter.clientlib.model.ResourceUnauthorizedProblem;
import io.github.redouane59.twitter.TwitterClient;
import io.github.redouane59.twitter.dto.endpoints.AdditionalParameters;
import io.github.redouane59.twitter.dto.tweet.TweetList;
import io.github.redouane59.twitter.dto.tweet.TweetV2;
import io.github.redouane59.twitter.dto.user.UserV2;
import io.github.redouane59.twitter.signature.TwitterCredentials;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Controller
@RequiredArgsConstructor
@RequestMapping("oauth3")
public class Oauth3 {
//    TwitterApi apiInstance = new TwitterApi(new TwitterCredentialsOAuth2(
//            System.getenv("TWITTER_OAUTH2_CLIENT_ID"),
//            System.getenv("TWITTER_OAUTH2_CLIENT_SECRET"),
//            System.getenv("TWITTER_OAUTH2_ACCESS_TOKEN"),
//            System.getenv("TWITTER_OAUTH2_REFRESH_TOKEN")));

    // 출처 : https://ayasetaka.tistory.com/12
    // https://github.com/redouane59/twittered

    @GetMapping("/{id}")
    public void oauth2(@PathVariable String id) throws ApiException {
        // 트위터 등록정보
        TwitterClient twitterClient = new TwitterClient(TwitterCredentials.builder()
                .accessToken("1516353113430851586-Qhjz3YpRRL1yFqSa5PYcyjf5gmJhU1")
                .accessTokenSecret("dPvdajDmTYtMybqbj9mOMnTIvbE9SnOuJY8h9uRQjRxln")
                .apiKey("S0FVySANFNnlISMw5D1vSE8P0")
                .apiSecretKey("KCu23eNrVftMqQeefWJTIei5Klju341e78BypImTVfw338Mm0X")
                .build());

            LocalDateTime endLocalDateTime = LocalDateTime.now();
            LocalDateTime startLocalDateTime = endLocalDateTime.minusDays(7);
            // 파라메터 설정
            AdditionalParameters additionalParameters = AdditionalParameters.builder()
                    .startTime(startLocalDateTime)
                    .endTime(endLocalDateTime)
                    .build();

            UserV2 userV2 = twitterClient.getUserFromUserName(id);
            System.out.println("아이디 로딩 체크");
            System.out.println("아이디 : " + userV2.getId());

            TweetList tweetList =
                    twitterClient.getUserTimeline(userV2.getId(), additionalParameters);
            System.out.println("트윗 로딩 체크");
            System.out.println("가져온 트윗 수 : " + tweetList.getData().size());
            for(TweetV2.TweetData tweet : tweetList.getData()) {
                System.out.println("Id : " + tweet.getId());
                System.out.println("text : " + tweet.getText());
                System.out.println("==============================");
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
}