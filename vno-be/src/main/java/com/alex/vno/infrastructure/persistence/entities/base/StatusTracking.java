package com.alex.vno.infrastructure.persistence.entities.base;

import com.alex.vno.domain.enums.ModificationStatus;

public abstract class StatusTracking extends CreationTracking {
    ModificationStatus modificationStatus = ModificationStatus.ACTIVE;
}
