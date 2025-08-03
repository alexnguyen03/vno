package com.alex.vno.domain.enums;

public enum ModificationStatus {
    ACTIVE,
    MODIFIED,
    DELETED, // CAN NOT BE RESTORED
    DISABLED, // CAN ACTIVATE
    ARCHIVED// CAN BE RESTORED
}
