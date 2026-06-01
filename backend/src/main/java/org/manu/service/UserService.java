package org.manu.service;

import org.manu.dto.UserResponse;
import reactor.core.publisher.Mono;

public interface UserService {

    Mono<UserResponse> getCurrentUser();
}