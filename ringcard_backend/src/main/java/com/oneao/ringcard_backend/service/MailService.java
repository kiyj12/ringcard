package com.oneao.ringcard_backend.service;

import com.oneao.ringcard_backend.domain.DTO.SendMailDto;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailService {
    private final JavaMailSender mailSender;

    public SendMailDto sendNewQuestionMail(String userEmail) {
        SendMailDto dto = new SendMailDto();
        dto.setAddress(userEmail);
        dto.setTitle("링카에 새로운 질문카드가 도착했습니다!");
        dto.setMessage("링카에 새로운 질문카드가 도착했습니다! 얼른 가서 답변해보세요!");
        return dto;
    }
    public void mailSend(SendMailDto mailDto) {
        System.out.println("전송 완료!");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(mailDto.getAddress());
        message.setSubject(mailDto.getTitle());
        message.setText(mailDto.getMessage());
        message.setFrom("ringcard94@gmail.com");
        message.setReplyTo("ringcard94@gmail.com");
        System.out.println("message"+message);
        mailSender.send(message);
    }

}
