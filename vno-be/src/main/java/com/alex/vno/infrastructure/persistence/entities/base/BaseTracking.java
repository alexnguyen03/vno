package com.alex.vno.infrastructure.persistence.entities.base;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseTracking {
    @Column(nullable = false, unique = true)
    private UUID code;

    // Getter và Setter
    public UUID getCode() {
        return code;
    }

    public void setCode(UUID code) {
        this.code = code;
    }
}