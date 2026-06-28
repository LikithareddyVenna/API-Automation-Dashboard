package org.manu.dto;

import lombok.Data;
import org.manu.enums.PaymentStatus;

@Data
public class UpdatePaymentStatusRequest {

    private PaymentStatus status;
}