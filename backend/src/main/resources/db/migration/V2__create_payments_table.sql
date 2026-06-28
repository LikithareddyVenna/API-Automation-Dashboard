CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,

    user_id BIGINT NOT NULL,

    amount DECIMAL(10,2) NOT NULL,

    currency VARCHAR(10) NOT NULL,

    description TEXT,

    status VARCHAR(20) NOT NULL,

    payment_method VARCHAR(30) NOT NULL,

    transaction_reference VARCHAR(100),

    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_payment_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);