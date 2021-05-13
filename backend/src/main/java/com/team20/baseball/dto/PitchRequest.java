package com.team20.baseball.dto;

import com.team20.baseball.domain.play.PlayHistory;

public class PitchRequest {
    private final Long batter;
    private final Long inningId;
    private final Character result;

    public PitchRequest(Long batter, Long inningId, Character result) {
        this.batter = batter;
        this.inningId = inningId;
        this.result = result;
    }

    public Long getBatter() {
        return batter;
    }

    public Long getInningId() {
        return inningId;
    }

    public Character getResult() {
        return result;
    }

    public PlayHistory toEntity(){
        return new PlayHistory(batter, inningId, result);
    }
}
