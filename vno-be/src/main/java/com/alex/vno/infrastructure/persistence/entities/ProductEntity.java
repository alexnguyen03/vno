package com.alex.vno.infrastructure.persistence.entities;
import java.time.Instant;

import com.alex.vno.domain.model.common.CreationBase;
import com.alex.vno.domain.model.common.ModificationBase;
import com.alex.vno.infrastructure.audit.BaseEntityEntity;

// infrastructure.persistence.ProductEntity.java
import jakarta.persistence.*;

@Entity
@Table(name = "notes")
@EntityListeners(AuditEntityListener.class)
public class ProductEntity extends BaseEntityEntity implements CreationBase, ModificationBase {

    @Column(name = "name")
    private String name;

    // Audit fields with JPA annotations
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @Column(name = "created_by", updatable = false)
    private String createdBy;

    @Column(name = "last_modified_at")
    private Instant lastModifiedAt;

    @Column(name = "last_modified_by")
    private String lastModifiedBy;

    @Override
    public Instant getLastModifiedAt() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getLastModifiedAt'");
    }

    @Override
    public String getLastModifiedBy() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getLastModifiedBy'");
    }

    @Override
    public void setLastModifiedAt(Instant lastModifiedAt) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setLastModifiedAt'");
    }

    @Override
    public void setLastModifiedBy(String lastModifiedBy) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setLastModifiedBy'");
    }

    @Override
    public Instant getCreatedAt() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCreatedAt'");
    }

    @Override
    public String getCreatedBy() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getCreatedBy'");
    }

    @Override
    public void setCreatedAt(Instant createdAt) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setCreatedAt'");
    }

    @Override
    public void setCreatedBy(String createdBy) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setCreatedBy'");
    }

    // Getters and setters for all fields
}
