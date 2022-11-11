package com.oneao.ringcard_backend.domain.question;

import com.oneao.ringcard_backend.domain.answer.SpringDataJpaAnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
@Transactional
@RequiredArgsConstructor
public class JpaQuestionRepository implements QuestionRepository {

    private final SpringDataJpaQuestionRepository repository;
    private final SpringDataJpaAnswerRepository answerRepository;

    @Override
    public Question save(Question question) {
        question.setUploadTime(Timestamp.valueOf(LocalDateTime.now()));
        return repository.save(question);
    }

    @Override
    public Optional<Question> findById(Long id, Long userId) {
        Optional<Question> question = repository.findById(id);
        if (Objects.equals(userId, question.get().getUserId())) {
            return question;
        }
        else {
            return Optional.empty();
        }

    }

    @Override
    public Optional<Question> findByIdNoAuth(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<Question> findAll(Long userId, QuestionSearchCond cond) {
        boolean answered = cond.isAnswered();
        boolean inTrash = cond.isInTrash();

        return repository.findByUserIdLikeAndAnsweredLikeAndInTrashLike(userId, answered, inTrash);
    }


    @Override
    public List<Question> findAllAnsweredNotInTrashNoAuth() {

        return repository.findByAnsweredLikeAndInTrashLike(true, false);
    }

    @Override
    public List<Question> findAllInTrash(Long userId) {
        return repository.findByUserIdLikeAndInTrashLike(userId, true);
    }

    @Override
    public List<Question> findAllInCollection(Long userId) {
        return repository.findByUserIdLikeAndInCollectionLike(userId, true);
    }

    @Override
    public List<Question> findAllByUserId(Long userId) {
        return repository.findByUserIdLike(userId);
    }

    @Override
    public void delete(Long questionId) {
        repository.delete(repository.findById(questionId).get());
    }


    // TODO: 현재 상태의 반대로 가게 해놨는데, 이걸로 불충분한 것같으면 Dto 만들기
    @Override
    public void updateInTrash(Long questionId) {
        Question findQuestion = repository.findById(questionId).orElseThrow();
        findQuestion.setInTrash(!findQuestion.isInTrash());
    }

    @Override
    public void updateToAnswered(Long questionId) {
        Question findQuestion = repository.findById(questionId).orElseThrow();
        findQuestion.setAnswered(true);
    }

    @Override
    public void updateToUnanswered(Long questionId) {
        Question findQuestion = repository.findById(questionId).orElseThrow();
        findQuestion.setAnswered(false);
    }

    @Override
    public void updateInCollection(Long questionId) {
        Question findQuestion = repository.findById(questionId).orElseThrow();
        findQuestion.setInCollection(!findQuestion.isInCollection());
    }

    @Override
    public void emptyTrashcan(Long userId) {
        List<Question> findQuestions =repository.findAllByUserIdLikeAndInTrashLike(userId, true);
        // findQuestions의 id를 기준으로 answer 찾아서 삭제
        for (Question findQuestion : findQuestions) {
            Long questionId = findQuestion.getId();
            answerRepository.deleteByQuestionIdLike(questionId);
        }
        // 질문 삭제
        repository.deleteByUserIdLikeAndInTrashLike(userId, true);
    }

    @Override
    public void clearStore() {
        repository.deleteAll();
    }
}