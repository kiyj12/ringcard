package com.oneao.ringcard_backend.domain.question;

import java.util.List;
import java.util.Optional;


public interface QuestionRepository {

    Question save(Question question);

    Optional<Question> findById(Long id, Long userId);

    Optional<Question> findByIdNoAuth(Long id);
//    List<Question> findAll(Long userId);
    List<Question> findAll(Long userId, QuestionSearchCond cond);
//    List<Question> findAllAnsweredNotInTrash(Long userId);
    List<Question> findAllAnsweredNotInTrashNoAuth();
//    List<Question> findAllUnansweredInTrash(Long userId);
//    List<Question> findAllUnansweredNotInTrash(Long userId);

    List<Question> findAllInTrash(Long userId);
    List<Question> findAllInCollection(Long userId);

    List<Question> findAllByUserId(Long userId);

    void delete(Long questionId);

//    void throwInTrash(Long questionId, Long userId);

    void updateInTrash(Long questionId);

//    void restore(Long questionId, Long userId);

    void updateToAnswered(Long questionId);

    void updateToUnanswered(Long questionId);

    void updateInCollection(Long questionId);

    void clearTrashcan(Long userId);

    void clearStore();
}
