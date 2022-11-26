package com.oneao.ringcard_backend.domain.user;

import lombok.Data;

@Data
public class RegisterUserDto {
    private String username;
    private String password;
    private String userRingcardName;
    private String userEmail;
//    private String twitterId;
//    private String userPicture;

    public RegisterUserDto() {
    }


    public RegisterUserDto(String username, String password, String userRingcardName, String userEmail) {
        this.username = username;
        this.password = password;
        this.userRingcardName = userRingcardName;
        this.userEmail = userEmail;
//        this.twitterId = twitterId;
//        this.userPicture = userPicture;
    }
}
