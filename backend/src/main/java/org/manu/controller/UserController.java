package org.manu.controller;

import lombok.RequiredArgsConstructor;
import org.manu.dto.UserResponse;
import org.manu.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public Mono<UserResponse> me() {
        return userService.getCurrentUser();
    }
}