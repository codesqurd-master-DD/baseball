package com.team20.baseball.dto;

import com.team20.baseball.domain.play.Inning;

public class StartRequest {
    private Long gameId;
    private Long inningNumber;
    private Long pitcher;
    private boolean isTop;

    public StartRequest(Long gameId, Long inningNumber, Long pitcher, boolean isTop) {
        this.gameId = gameId;
        this.inningNumber = inningNumber;
        this.pitcher = pitcher;
        this.isTop = isTop;
    }

    public Long getGameId() {
        return gameId;
    }

    public Long getInningNumber() {
        return inningNumber;
    }

    public Long getPitcher() {
        return pitcher;
    }

    public boolean isTop() {
        return isTop;
    }

    public Inning toInning() {
        return new Inning(this.gameId, this.inningNumber, this.pitcher, this.isTop);
    }
}
