package com.team20.baseball.domain.play;

import org.springframework.data.annotation.Id;

public class PlayHistory {

    @Id
    private Long id;
    private Long batter;
    private Long inningId;
    private String result;

    public PlayHistory(Long id, Long batter, Long inningId, String result) {
        this.id = id;
        this.batter = batter;
        this.inningId = inningId;
        this.result = result;
    }

    public PlayHistory(Long batter, Long inningId, String result) {
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

    public String getResult() {
        return result;
    }
}
