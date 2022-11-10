package com.oneao.ringcard_backend.domain.answer;

import lombok.Data;

@Data
public class AnswerEditDto {

    private String answerContents;

    public AnswerEditDto() {
    }

    public AnswerEditDto(String answerContents) {
        this.answerContents = answerContents;
    }
}

