package org.manu.controller;

import lombok.RequiredArgsConstructor;
import org.manu.dto.AuthResponse;
import org.manu.dto.LoginRequest;
import org.manu.dto.RegisterRequest;
import org.manu.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public Mono<AuthResponse> register(
            @RequestBody RegisterRequest request) {

        return authService.register(request);
    }

    @PostMapping("/login")
    public Mono<AuthResponse> login(
            @RequestBody LoginRequest request) {

        return authService.login(request);
    }
}