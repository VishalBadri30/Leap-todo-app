package com.codebrains.todosapi.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.Data;

@AllArgsConstructor
@Getter
@Setter
@Data
@Entity
@Table(name = "todo")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "completed")
    private Boolean completed;

    public Todo() {

    }
}
