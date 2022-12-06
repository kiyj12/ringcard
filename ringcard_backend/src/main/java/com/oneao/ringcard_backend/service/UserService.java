package com.oneao.ringcard_backend.service;

import com.oneao.ringcard_backend.domain.user.User;
import com.oneao.ringcard_backend.domain.user.UserEmailUpdateDto;
import com.oneao.ringcard_backend.domain.user.UserRepository;
import com.oneao.ringcard_backend.domain.user.UserRingcardNameUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    public Optional<User> findByUserEmail(String userEmail) {
        return userRepository.findByUserEmail(userEmail);
    }



    public List<User> findAll() {
        return userRepository.findAll();
    }

//    public void updateUserInfo(Long userId, UserUpdateDto updateParam) {
//        userRepository.updateUserInfo(userId, updateParam);
//    }
    public void updateUserRingcardName(Long userId, UserRingcardNameUpdateDto updateParam) {
        userRepository.updateUserRingcardName(userId, updateParam);
    }
    public void updateUserEmail(Long userId, UserEmailUpdateDto updateParam) {
        userRepository.updateUserEmail(userId, updateParam);
    }

    public void updateUserPassword(Long userId, String newPassword) {
        userRepository.updateUserPassword(userId, newPassword);
    }

    public void deleteAccount(Long userId) {
        userRepository.deleteAccount(userId);
    }

    public void clearStore() {
        userRepository.clearStore();
    }
}
