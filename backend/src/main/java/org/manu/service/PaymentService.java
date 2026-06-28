package org.manu.service;

import org.manu.dto.CreatePaymentRequest;
import org.manu.dto.PaymentResponse;
import org.manu.dto.UpdatePaymentRequest;
import org.manu.enums.PaymentStatus;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PaymentService {

    Mono<PaymentResponse> createPayment(CreatePaymentRequest request);

    Flux<PaymentResponse> getPayments();

    Mono<PaymentResponse> getPayment(Long id);

    Mono<PaymentResponse> updatePayment(Long id, UpdatePaymentRequest request);

    Mono<Void> deletePayment(Long id);

    Mono<PaymentResponse> updateStatus(Long id, PaymentStatus status);
}