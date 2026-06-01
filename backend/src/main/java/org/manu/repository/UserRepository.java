package org.manu.repository;

import org.manu.entity.User;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import reactor.core.publisher.Mono;

public interface UserRepository
        extends ReactiveCrudRepository<User, Long> {

    Mono<User> findByEmail(String email);

    Mono<Boolean> existsByEmail(String email);
}