package org.manu.dto;

import lombok.Data;
import org.manu.enums.PaymentMethod;

import java.math.BigDecimal;

@Data
public class UpdatePaymentRequest {

    private BigDecimal amount;

    private String currency;

    private String description;

    private PaymentMethod paymentMethod;
}