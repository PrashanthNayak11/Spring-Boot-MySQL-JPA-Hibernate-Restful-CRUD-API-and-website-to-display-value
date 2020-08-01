package com.example.easy_note.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.easy_note.model.Note;

@Repository
public interface NoteRepository extends JpaRepository<Note, Long> {

}
