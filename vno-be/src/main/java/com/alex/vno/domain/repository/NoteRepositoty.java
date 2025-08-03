package com.alex.vno.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alex.vno.domain.model.Note.Note;

public interface NoteRepositoty extends JpaRepository<Note, String> {

}
