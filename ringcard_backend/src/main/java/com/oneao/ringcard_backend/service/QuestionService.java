package com.oneao.ringcard_backend.service;

import com.oneao.ringcard_backend.domain.question.Question;
import com.oneao.ringcard_backend.domain.question.QuestionRepository;
import com.oneao.ringcard_backend.domain.question.QuestionSearchCond;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    public Question save(Question question) {
        return questionRepository.save(question);
    }

    public Optional<Question> findById(Long id, Long userId) {
        return questionRepository.findById(id, userId);

    }

    
    public Optional<Question> findByIdNoAuth(Long id) {
        return questionRepository.findByIdNoAuth(id);
    }
    
    public Page<Question> findAll(Long userId, QuestionSearchCond cond, Pageable pageable) {
        return questionRepository.findAll(userId, cond, pageable);
    }

    
    public List<Question> findAllAnsweredNotInTrashNoAuth() {
        return questionRepository.findAllAnsweredNotInTrashNoAuth();
    }

    public List<Question> findAllInTrash(Long userId) {
        return questionRepository.findAllInTrash(userId);
    }

    public List<Question> findAllInCollection(Long userId) {
        return questionRepository.findAllInCollection(userId);
    }

    
    public List<Question> findAllByUserId(Long userId) {
        return questionRepository.findAllByUserId(userId);
    }

    
    public void delete(Long questionId) {
        questionRepository.delete(questionId);
    }

    public void updateInTrash(Long questionId) {
        questionRepository.updateInTrash(questionId);
    }

    
    public void updateToAnswered(Long questionId) {
        questionRepository.updateToAnswered(questionId);
    }

    public void updateToUnanswered(Long questionId) {
        questionRepository.updateToUnanswered(questionId);
    }

    
    public void updateInCollection(Long questionId) {
        questionRepository.updateInCollection(questionId);
    }

    
    public void clearTrashcan(Long userId) {
        questionRepository.clearTrashcan(userId);
    }


    
    public void clearStore() {
        questionRepository.clearStore();
    }

}
