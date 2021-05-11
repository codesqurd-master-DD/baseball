package com.team20.baseball.domain.team;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

public class Player {
    @Id
    @JsonProperty("playerId")
    private Long id;
    private String playerName;
    private Integer playerNumber;
    @JsonIgnore
    private int isPitcher;

    public Player(Long id, String playerName, Integer playerNumber, int isPitcher) {
        this.id = id;
        this.playerName = playerName;
        this.playerNumber = playerNumber;
        this.isPitcher = isPitcher;
    }

    public Long getId() {
        return id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public Integer getPlayerNumber() {
        return playerNumber;
    }

    public boolean getIsPitcher() {
        return isPitcher == 0;
    }
}
