package com.example.easy_note;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
@EnableJpaAuditing
@SpringBootApplication
public class EasyNoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(EasyNoteApplication.class, args);
	}

}
