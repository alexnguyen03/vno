package com.alex.vno.infrastructure.audit;
// infrastructure.persistence.BaseEntityEntity.java
import jakarta.persistence.*;
import java.util.UUID;

import com.alex.vno.domain.enums.ModificationStatus;

@MappedSuperclass
public abstract class BaseEntityEntity {

    @Id
    @GeneratedValue
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "code", unique = true, nullable = false)
    private String code;

    @Enumerated(EnumType.STRING)
    @Column(name = "modification_status")
    private ModificationStatus modificationStatus;

    // Getters and setters

    public UUID getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public ModificationStatus getModificationStatus() {
        return modificationStatus;
    }

    public void setModificationStatus(ModificationStatus modificationStatus) {
        this.modificationStatus = modificationStatus;
    }
}
