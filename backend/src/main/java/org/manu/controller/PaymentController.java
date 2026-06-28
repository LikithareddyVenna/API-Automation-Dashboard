package org.manu.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.manu.dto.CreatePaymentRequest;
import org.manu.dto.PaymentResponse;
import org.manu.dto.UpdatePaymentRequest;
import org.manu.dto.UpdatePaymentStatusRequest;
import org.manu.service.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public Mono<ResponseEntity<PaymentResponse>> createPayment(
            @Valid @RequestBody CreatePaymentRequest request) {

        return paymentService.createPayment(request)
                .map(response -> ResponseEntity.status(HttpStatus.CREATED).body(response));
    }

    @GetMapping
    public Flux<PaymentResponse> getPayments() {

        return paymentService.getPayments();
    }

    @GetMapping("/{id}")
    public Mono<ResponseEntity<PaymentResponse>> getPayment(
            @PathVariable Long id) {

        return paymentService.getPayment(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public Mono<ResponseEntity<PaymentResponse>> updatePayment(
            @PathVariable Long id,
            @Valid @RequestBody UpdatePaymentRequest request) {

        return paymentService.updatePayment(id, request)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Void>> deletePayment(
            @PathVariable Long id) {

        return paymentService.deletePayment(id)
                .thenReturn(ResponseEntity.noContent().build());
    }

    @PatchMapping("/{id}/status")
    public Mono<ResponseEntity<PaymentResponse>> updateStatus(
            @PathVariable Long id,
            @RequestBody UpdatePaymentStatusRequest request) {

        return paymentService.updateStatus(id, request.getStatus())
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}