package org.manu.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.ReactiveAuthenticationManager;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationManager
        implements ReactiveAuthenticationManager {

    private final JwtService jwtService;

    @Override
    public Mono<Authentication> authenticate(
            Authentication authentication) {

        String token = authentication.getCredentials().toString();

        if (!jwtService.validateToken(token)) {
            return Mono.empty();
        }

        String email = jwtService.extractUsername(token);

        return Mono.just(
                new UsernamePasswordAuthenticationToken(
                        email,
                        token,
                        null
                )
        );
    }
}