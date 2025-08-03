package com.alex.vno.domain.model.common;

import java.time.Instant;

public interface ArchivedAudit {
    Instant getArchivedAt();

    void setArchivedAt(Instant archivedAt);

    String getArchivedBy();

    void setArchivedBy(String archivedBy);
}
