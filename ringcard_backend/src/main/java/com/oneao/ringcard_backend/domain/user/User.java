package com.oneao.ringcard_backend.domain.user;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Data
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @NotNull
    private String username;
    @NotEmpty
    private String password;
    @NotEmpty
    private String userRingcardName;
    @Email
    @NotEmpty
    private String userEmail;
    private String twitterId;
    private String userPicture;

    private String roles;

    public List<String> getRoleList() {
        if (this.roles.length() > 0) {
            return Arrays.asList(this.roles.split(","));
        }
        return new ArrayList<>();
    }

    public User() {

    }


    public User(String username, String password, String userRingcardName, String userEmail, String twitterId, String userPicture) {
        this.username = username;
        this.password = password;
        this.username = userRingcardName;
        this.userEmail = userEmail;
        this.twitterId = twitterId;
        this.userPicture = userPicture;
    }
}