package com.oneao.ringcard_backend.domain.answer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.Map;

@Data
public class AnswerSendDto {

    private String answerContents;
}
