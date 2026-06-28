package org.manu.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.manu.enums.PaymentMethod;
import org.manu.enums.PaymentStatus;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table("payments")
public class Payment {

    @Id
    private Long id;

    private Long userId;

    private BigDecimal amount;

    private String currency;

    private String description;

    private PaymentStatus status;

    private PaymentMethod paymentMethod;

    private String transactionReference;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}