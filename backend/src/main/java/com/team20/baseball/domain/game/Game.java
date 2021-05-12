package com.team20.baseball.domain.game;

import org.springframework.data.annotation.Id;

public class Game {
    @Id
    private Long id;
    private Long homeId;
    private Long awayId;

    public Game(Long id, Long homeId, Long awayId) {
        this.id = id;
        this.homeId = homeId;
        this.awayId = awayId;
    }

    public Long getId() {
        return id;
    }

    public Long getHomeId() {
        return homeId;
    }

    public Long getAwayId() {
        return awayId;
    }
}
