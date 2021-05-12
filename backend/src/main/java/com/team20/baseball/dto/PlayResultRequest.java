package com.team20.baseball.dto;

public class PlayResultRequest {
    private Long inningId;
    private Character result;
    private int score;
    private Long baseOne;
    private Long baseTwo;
    private Long baseThree;

    public PlayResultRequest(Long inningId, Character result, int score, Long baseOne, Long baseTwo, Long baseThree) {
        this.inningId = inningId;
        this.result = result;
        this.score = score;
        this.baseOne = baseOne;
        this.baseTwo = baseTwo;
        this.baseThree = baseThree;
    }

    public Long getInningId() {
        return inningId;
    }

    public Character getResult() {
        return result;
    }

    public int getScore() {
        return score;
    }

    public Long getBaseOne() {
        return baseOne;
    }

    public Long getBaseTwo() {
        return baseTwo;
    }

    public Long getBaseThree() {
        return baseThree;
    }
}
