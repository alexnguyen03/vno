package com.alex.vno.infrastructure.persistence.entities.base;

import java.time.Instant;

import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

public class FullTracking extends CreationTracking {
    @LastModifiedDate
    private Instant lastModifiedDate;

    @LastModifiedBy
    private String lastModifiedBy;

}
