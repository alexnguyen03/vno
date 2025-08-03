package com.alex.vno.domain.model.common;

import java.util.UUID;

public abstract class BaseEntity {

    private UUID code;

    public UUID getCode() {
        return code;
    }

    public void setCode(UUID code) {
        this.code = code;
    }

}
