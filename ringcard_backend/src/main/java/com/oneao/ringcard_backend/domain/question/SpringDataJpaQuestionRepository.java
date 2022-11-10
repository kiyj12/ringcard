package com.oneao.ringcard_backend.domain.question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface SpringDataJpaQuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findByUserIdLike(Long userId);

    List<Question> findByUserIdLikeAndAnsweredLikeAndInTrashLike(Long userId, boolean answered, boolean inTrash);

    List<Question> findByAnsweredLikeAndInTrashLike(boolean isAnswered, boolean inTrash);

    List<Question> findByUserIdLikeAndInTrashLike(Long userId, boolean inTrash);
    List<Question> findByUserIdLikeAndInCollectionLike(Long userId, boolean inCollection);

    List<Question> findAllByUserIdLikeAndInTrashLike(Long userId, boolean inTrash);
    @Transactional
    void deleteByUserIdLikeAndInTrashLike(Long userId, boolean inTrash);

}
