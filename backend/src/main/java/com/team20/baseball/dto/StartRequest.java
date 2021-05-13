package com.team20.baseball.dto;

import com.team20.baseball.domain.play.Inning;

public class StartRequest {
    private Long gameId;
    private Long inningNumber;
    private Long pitcherId;
    private boolean isTop;

    public StartRequest(Long gameId, Long inningNumber, Long pitcherId, boolean isTop) {
        this.gameId = gameId;
        this.inningNumber = inningNumber;
        this.pitcherId = pitcherId;
        this.isTop = isTop;
    }

    public Long getGameId() {
        return gameId;
    }

    public Long getInningNumber() {
        return inningNumber;
    }

    public Long getPitcherId() {
        return pitcherId;
    }

    public boolean isTop() {
        return isTop;
    }

    public Inning toInning() {
        return new Inning(this.gameId, this.inningNumber, this.pitcherId, this.isTop);
    }
}
