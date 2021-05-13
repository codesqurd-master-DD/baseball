package com.team20.baseball.domain.play;

import org.springframework.data.annotation.Id;

public class Inning {
    @Id
    private Long id;
    private Long inningNumber;
    private int score;
    private boolean isTop;
    private Long baseOne;
    private Long baseTwo;
    private Long baseThree;
    private Long gameId;
    private Long pitcher;

    public Inning(Long id, Long inningNumber, int score, boolean isTop, Long baseOne, Long baseTwo, Long baseThree, Long gameId, Long pitcher) {
        this.id = id;
        this.inningNumber = inningNumber;
        this.score = score;
        this.isTop = isTop;
        this.baseOne = baseOne;
        this.baseTwo = baseTwo;
        this.baseThree = baseThree;
        this.gameId = gameId;
        this.pitcher = pitcher;
    }

    public Inning(Long gameId, Long inningNumber, Long pitcher, boolean isTop) {
        this.gameId = gameId;
        this.inningNumber = inningNumber;
        this.pitcher = pitcher;
        this.isTop = isTop;
    }

    public Long getId() {
        return id;
    }

    public Long getInningNumber() {
        return inningNumber;
    }

    public int getScore() {
        return score;
    }

    public boolean isTop() {
        return isTop;
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

    public Long getGameId() {
        return gameId;
    }

    public Long getPitcher() {
        return pitcher;
    }
}
