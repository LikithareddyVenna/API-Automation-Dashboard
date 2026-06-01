package org.manu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

//    @GetMapping
//    public Mono<Map<String, Object>> dashboard() {
//
//        return Mono.just(
//                Map.of(
//                        "revenue", 0,
//                        "payments", 0,
//                        "notifications", 0
//                )
//        );
//    }

    @GetMapping
    public Mono<String> dashboard() {
        return Mono.just("Dashboard Access Granted");
    }
}