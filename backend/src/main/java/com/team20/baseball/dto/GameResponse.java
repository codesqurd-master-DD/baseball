package com.team20.baseball.dto;

import com.team20.baseball.domain.game.Game;
import com.team20.baseball.domain.team.Team;

public class GameResponse {
    private Long gameId;
    private Team home;
    private Team away;

    private GameResponse(Long gameId, Team home, Team away) {
        this.gameId = gameId;
        this.home = home;
        this.away = away;
    }

    public Long getGameId() {
        return gameId;
    }

    public Team getHome() {
        return home;
    }

    public Team getAway() {
        return away;
    }

    public static GameResponse of(Game game, Team home, Team away){
        return new GameResponse(game.getId(), home, away);
    }
}
