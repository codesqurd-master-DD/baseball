package com.team20.baseball.domain.play;

import com.team20.baseball.dto.PlayResultRequest;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;

public class PlayerScore {
    @Id
    private Long id;
    private int atBats;
    private int hits;
    private int outs;
    private int fourBalls;
    private Long gameId;
    private Long playerId;

    @PersistenceConstructor
    public PlayerScore(Long id, int atBats, int hits, int outs, int fourBalls, Long gameId, Long playerId) {
        this.id = id;
        this.atBats = atBats;
        this.hits = hits;
        this.outs = outs;
        this.fourBalls = fourBalls;
        this.gameId = gameId;
        this.playerId = playerId;
    }

    public PlayerScore(Long gameId, Long playerId) {
        this(null, 0, 0, 0, 0, gameId, playerId);
    }

    public Long getId() {
        return id;
    }

    public int getAtBats() {
        return atBats;
    }

    public int getHits() {
        return hits;
    }

    public int getOuts() {
        return outs;
    }

    public int getFourBalls() {
        return fourBalls;
    }

    public Long getGameId() {
        return gameId;
    }

    public Long getPlayerId() {
        return playerId;
    }

    public void update(PlayResultRequest playResultRequest) {
        updateAtBats();
        updateResult(playResultRequest.getResult());
    }

    private void updateAtBats() {
        atBats++;
    }

    private void updateResult(String result) {
        if (result.equals("H")) {
            hits++;
        } else if (result.equals("O")) {
            outs++;
        } else if (result.equals("F")) {
            fourBalls++;
        }
    }

}
