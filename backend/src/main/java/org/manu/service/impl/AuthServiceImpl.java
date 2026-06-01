package org.manu.service.impl;

import lombok.RequiredArgsConstructor;
import org.manu.dto.AuthResponse;
import org.manu.dto.LoginRequest;
import org.manu.dto.RegisterRequest;
import org.manu.entity.User;
import org.manu.exception.InvalidCredentialsException;
import org.manu.exception.UserAlreadyExistsException;
import org.manu.repository.UserRepository;
import org.manu.security.JwtService;
import org.manu.service.AuthService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public Mono<AuthResponse> register(RegisterRequest request) {

        return userRepository.existsByEmail(request.email())
                .flatMap(exists -> {

                    if (exists) {
                        return Mono.error(
                                new UserAlreadyExistsException(
                                        "Email already exists"));
                    }

                    User user = User.builder()
                            .name(request.name())
                            .email(request.email())
                            .password(passwordEncoder.encode(request.password()))
                            .role("USER")
                            .build();

                    return userRepository.save(user)
                            .map(saved -> new AuthResponse(
                                    jwtService.generateToken(saved.getEmail())
                            ));
                });
    }

    @Override
    public Mono<AuthResponse> login(LoginRequest request) {

        return userRepository.findByEmail(request.email())
                .switchIfEmpty(
                        Mono.error(
                                new InvalidCredentialsException(
                                        "Invalid credentials")))
                .flatMap(user -> {

                    if (!passwordEncoder.matches(
                            request.password(),
                            user.getPassword())) {

                        return Mono.error(
                                new InvalidCredentialsException(
                                        "Invalid credentials"));
                    }

                    return Mono.just(
                            new AuthResponse(
                                    jwtService.generateToken(
                                            user.getEmail()
                                    )
                            )
                    );
                });
    }
}
