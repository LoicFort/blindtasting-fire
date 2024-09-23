package com.project.blindTasting.model;

import jakarta.persistence.*;



@Entity
@Table(name = "B_T_USER")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column
    private String username;

    @Column(name = "session_id")
    private Long sessionId;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "wine_id", referencedColumnName = "id")
    private Wine wine;


    public Role getRole() {
        return role;
    }

    public String getUsername() {
        return username;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public Wine getWine() {
        return wine;
    }


    public void setRole(Role role) {
        this.role = role;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public void setWine(Wine wine) {
        this.wine = wine;
    }
}
