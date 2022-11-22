package com.oneao.ringcard_backend.domain.user;


import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserRepository {

    User save(User user);

    Optional<User> findById(Long id);

    Optional<User> findByUsername(String username);

    List<User> findAll();

    void updateUserInfo(Long userId, UserUpdateDto updateParam);

    void updateUserPassword(Long userId, String newPassword);

    @Transactionalㅅ
    void deleteAccount(Long userId);

    void clearStore();

}
