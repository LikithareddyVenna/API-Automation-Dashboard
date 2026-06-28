package org.manu.dto;

import lombok.Builder;
import lombok.Data;
import org.manu.enums.PaymentMethod;
import org.manu.enums.PaymentStatus;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class PaymentResponse {

    private Long id;

    private Long userId;

    private BigDecimal amount;

    private String currency;

    private String description;

    private PaymentStatus status;

    private PaymentMethod paymentMethod;

    private String transactionReference;

    private LocalDateTime createdAt;
}