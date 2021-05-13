package com.team20.baseball.domain.play;

public class PlayHistory {

    private Long id;
    private Long batter;
    private Long inningId;
    private Character result;

    public PlayHistory(Long id, Long batter, Long inningId, Character result) {
        this.id = id;
        this.batter = batter;
        this.inningId = inningId;
        this.result = result;
    }

    public PlayHistory(Long batter, Long inningId, Character result) {
        this(null, batter, inningId, result);
    }

    public Long getId() {
        return id;
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
}
