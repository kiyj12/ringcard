package com.oneao.ringcard_backend.domain.question;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;



@Data
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @NotEmpty
    private String questionContents;

    private String questionHyperlink;
    @NotNull
    private Long userId;
    @NotNull
    private boolean answered;
    @NotNull
    private boolean inTrash;
    @NotNull
    private boolean inCollection;
    private Timestamp uploadTime;

    public Question() {
    }

    public Question(String questionContents, String questionHyperlink, Long userId, boolean answered, boolean inTrash, boolean inCollection) {
        this.questionContents = questionContents;
        this.questionHyperlink = questionHyperlink;
        this.userId = userId;
        this.answered = answered;
        this.inTrash = inTrash;
        this.inCollection = inCollection;
    }
}