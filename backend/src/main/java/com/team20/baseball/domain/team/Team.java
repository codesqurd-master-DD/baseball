package com.team20.baseball.domain.team;

public class Team {
    private Long id;
    private String name;

    public Team(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
