package org.manu.service;

import lombok.RequiredArgsConstructor;
import org.manu.dto.CreatePaymentRequest;
import org.manu.dto.PaymentResponse;
import org.manu.dto.UpdatePaymentRequest;
import org.manu.entity.Payment;
import org.manu.entity.User;
import org.manu.enums.PaymentStatus;
import org.manu.repository.PaymentRepository;
import org.manu.repository.UserRepository;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final UserRepository userRepository;

    @Override
    public Mono<PaymentResponse> createPayment(CreatePaymentRequest request) {
        return getCurrentUser()
                .flatMap(user -> {

                    Payment payment = Payment.builder()
                            .userId(user.getId())
                            .amount(request.getAmount())
                            .currency(request.getCurrency())
                            .description(request.getDescription())
                            .paymentMethod(request.getPaymentMethod())
                            .status(PaymentStatus.PENDING)
                            .transactionReference(UUID.randomUUID().toString())
                            .createdAt(LocalDateTime.now())
                            .updatedAt(LocalDateTime.now())
                            .build();

                    return paymentRepository.save(payment);
                })
                .map(this::mapToResponse);
    }

    @Override
    public Flux<PaymentResponse> getPayments() {
        return getCurrentUser()
                .flatMapMany(user ->
                        paymentRepository.findByUserId(user.getId()))
                .map(this::mapToResponse);
    }

    @Override
    public Mono<PaymentResponse> getPayment(Long id) {
        return getCurrentUser()
                .flatMap(user ->
                        paymentRepository.findById(id)
                                .filter(payment ->
                                        payment.getUserId().equals(user.getId())))
                .map(this::mapToResponse);
    }

    @Override
    public Mono<PaymentResponse> updatePayment(Long id, UpdatePaymentRequest request) {
        return getCurrentUser()
                .flatMap(user ->
                        paymentRepository.findById(id)
                                .filter(payment ->
                                        payment.getUserId().equals(user.getId()))
                                .flatMap(payment -> {

                                    payment.setAmount(request.getAmount());
                                    payment.setCurrency(request.getCurrency());
                                    payment.setDescription(request.getDescription());
                                    payment.setPaymentMethod(request.getPaymentMethod());
                                    payment.setUpdatedAt(LocalDateTime.now());

                                    return paymentRepository.save(payment);
                                }))
                .map(this::mapToResponse);
    }

    @Override
    public Mono<Void> deletePayment(Long id) {
        return getCurrentUser()
                .flatMap(user ->
                        paymentRepository.findById(id)
                                .filter(payment ->
                                        payment.getUserId().equals(user.getId()))
                                .flatMap(paymentRepository::delete));
    }

    @Override
    public Mono<PaymentResponse> updateStatus(Long id, PaymentStatus status) {
        return getCurrentUser()
                .flatMap(user ->
                        paymentRepository.findById(id)
                                .filter(payment ->
                                        payment.getUserId().equals(user.getId()))
                                .flatMap(payment -> {

                                    payment.setStatus(status);
                                    payment.setUpdatedAt(LocalDateTime.now());

                                    return paymentRepository.save(payment);
                                }))
                .map(this::mapToResponse);
    }

    private Mono<User> getCurrentUser() {

        return ReactiveSecurityContextHolder.getContext()
                .map(context -> context.getAuthentication().getName())
                .flatMap(userRepository::findByEmail);
    }

    private PaymentResponse mapToResponse(Payment payment) {

        return PaymentResponse.builder()
                .id(payment.getId())
                .userId(payment.getUserId())
                .amount(payment.getAmount())
                .currency(payment.getCurrency())
                .description(payment.getDescription())
                .status(payment.getStatus())
                .paymentMethod(payment.getPaymentMethod())
                .transactionReference(payment.getTransactionReference())
                .createdAt(payment.getCreatedAt())
                .build();
    }
}