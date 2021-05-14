package com.team20.baseball.dto;

public class PlayResultRequest {

    private Long gameId;
    private Long inningId;
    private Long batter;
    private String result;
    private int score;
    private Long baseOne;
    private Long baseTwo;
    private Long baseThree;

    public PlayResultRequest(Long gameId, Long inningId, Long batter, String result, int score, Long baseOne, Long baseTwo, Long baseThree) {
        this.gameId = gameId;
        this.inningId = inningId;
        this.batter = batter;
        this.result = result;
        this.score = score;
        this.baseOne = baseOne;
        this.baseTwo = baseTwo;
        this.baseThree = baseThree;
    }

    public Long getGameId() {
        return gameId;
    }

    public Long getInningId() {
        return inningId;
    }

    public Long getBatter() {
        return batter;
    }

    public String getResult() {
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
