package com.alex.vno.domain.model.Note;

import java.time.Instant;

import com.alex.vno.domain.model.common.BaseEntity;
import com.alex.vno.domain.model.common.CreationAudit;
import com.alex.vno.domain.model.common.ModificationBase;

public class Note extends BaseEntity implements CreationAudit, ModificationBase {
    // Audit fields and business fields here (without JPA annotations)

    private String name;

    // Implement audit interface getters/setters

    private Instant createdAt;
    private String createdBy;
    private Instant lastModifiedAt;
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
