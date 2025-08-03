package com.alex.vno.infrastructure.persistence.entities;
// infrastructure.persistence.ProductEntity.java
import jakarta.persistence.*;
import java.time.Instant;

import com.alex.vno.domain.model.common.BaseEntity;
import com.alex.vno.domain.model.common.CreationBase;
import com.alex.vno.domain.model.common.ModificationBase;

@Entity
@Table(name = "notes")
@EntityListeners(AuditEntityListener.class)
public class NoteEntity extends BaseEntity  ModificationBase{


  
}
