package org.manu.service;

import org.manu.dto.AuthResponse;
import org.manu.dto.LoginRequest;
import org.manu.dto.RegisterRequest;
import reactor.core.publisher.Mono;

public interface AuthService {

    Mono<AuthResponse> register(RegisterRequest request);

    Mono<AuthResponse> login(LoginRequest request);

}