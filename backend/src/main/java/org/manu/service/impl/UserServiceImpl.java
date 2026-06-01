package org.manu.service.impl;

import lombok.RequiredArgsConstructor;
import org.manu.dto.UserResponse;
import org.manu.repository.UserRepository;
import org.manu.service.UserService;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Mono<UserResponse> getCurrentUser() {

        return ReactiveSecurityContextHolder.getContext()
                .map(context -> context.getAuthentication().getName())
                .flatMap(userRepository::findByEmail)
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getRole()
                ));
    }
}