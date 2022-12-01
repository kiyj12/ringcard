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

    @NotNull
    private Integer noteType;
    @NotNull
    private Integer tapeType;

    public Question() {
    }

    public Question(String questionContents, String questionHyperlink, Long userId, boolean answered, boolean inTrash, boolean inCollection, Integer noteType, Integer tape_type) {
        this.questionContents = questionContents;
        this.questionHyperlink = questionHyperlink;
        this.userId = userId;
        this.answered = answered;
        this.inTrash = inTrash;
        this.inCollection = inCollection;
        this.noteType = noteType;
        this.tapeType = tapeType;
    }
}
