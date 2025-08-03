package com.alex.vno.infrastructure.persistence.entities;
import java.time.Instant;

import com.alex.vno.domain.model.common.CreationBase;
import com.alex.vno.domain.model.common.ModificationBase;

import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;

public class AuditEntityListener {

    @PrePersist
    public void prePersist(Object entity) {
        if (entity instanceof CreationBase) {
            CreationBase created = (CreationBase) entity;
            created.setCreatedAt(Instant.now());
            created.setCreatedBy(getCurrentUsername());
        }
        if (entity instanceof ModificationBase) {
            ModificationBase modified = (ModificationBase) entity;
            modified.setLastModifiedAt(Instant.now());
            modified.setLastModifiedBy(getCurrentUsername());
        }
    }

    @PreUpdate
    public void preUpdate(Object entity) {
        if (entity instanceof ModificationBase) {
            ModificationBase modified = (ModificationBase) entity;
            modified.setLastModifiedAt(Instant.now());
            modified.setLastModifiedBy(getCurrentUsername());
        }
    }

    private String getCurrentUsername() {
        // Implement your logic to get current user, e.g., from security context
        return "system";
    }
}
