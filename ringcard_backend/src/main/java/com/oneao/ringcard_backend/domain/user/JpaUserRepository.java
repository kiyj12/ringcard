package com.oneao.ringcard_backend.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
@RequiredArgsConstructor
public class JpaUserRepository implements UserRepository {

    private final SpringDataJpaUserRepository repository;

    @Override
    public User save(User user) {
        return repository.save(user);
    }

    @Override
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return repository.findByUsername(username);
    }

    @Override
    public List<User> findAll() {
        return repository.findAll();
    }

    @Override
    public void updateUserInfo(Long userId, UserUpdateDto updateParam) {
        User findUser = repository.findById(userId).orElseThrow();
        findUser.setUsername(updateParam.getUsername());
        findUser.setPassword(updateParam.getPassword());
        findUser.setUserRingcardName(updateParam.getUserRingcardName());
        findUser.setUserEmail(updateParam.getUserEmail());
        findUser.setTwitterId(updateParam.getTwitterId());
        findUser.setUserPicture(updateParam.getUserPicture());
    }

    @Override
    public void updateUserPassword(Long userId, String newPassword) {
        User findUser = findById(userId).get();

        findUser.setPassword(newPassword);
    }

    @Override
    public void deleteAccount(Long userId) {
        repository.delete(repository.findById(userId).get());
    }

    @Override
    public void clearStore() {
        repository.deleteAll();
    }



}
