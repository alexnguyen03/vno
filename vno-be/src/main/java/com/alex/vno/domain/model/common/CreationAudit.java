package com.alex.vno.domain.model.common;

import java.time.Instant;

public interface CreationBase {
    Instant getCreatedAt();
    String getCreatedBy();
    
    void setCreatedAt(Instant createdAt);
    void setCreatedBy(String createdBy);
}
