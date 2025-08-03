package com.alex.vno.infrastructure.persistence.entities.base;

import java.time.Instant;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;

public abstract class CreationTracking extends BaseTracking {
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Instant createdDate;

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private String createdBy;
}
