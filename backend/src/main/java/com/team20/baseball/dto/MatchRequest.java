package com.team20.baseball.dto;

public class MatchRequest {
    private Long teamId;
    private Long gameId;

    public MatchRequest(Long teamId, Long gameId) {
        this.teamId = teamId;
        this.gameId = gameId;
    }

    public Long getTeamId() {
        return teamId;
    }

    public Long getGameId() {
        return gameId;
    }
}
