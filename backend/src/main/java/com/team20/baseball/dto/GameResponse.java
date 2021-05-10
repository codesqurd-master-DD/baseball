package com.team20.baseball.dto;

import com.team20.baseball.domain.game.Game;
import com.team20.baseball.domain.team.Team;

public class GameResponse {
    private Long gameId;
    private TeamResponse home;
    private TeamResponse away;

    private GameResponse(Long gameId, Team home, Team away) {
        this.gameId = gameId;
        this.home = TeamResponse.of(home);
        this.away = TeamResponse.of(away);
    }

    public Long getGameId() {
        return gameId;
    }

    public TeamResponse getHome() {
        return home;
    }

    public TeamResponse getAway() {
        return away;
    }

    public static GameResponse of(Game game, Team home, Team away){
        return new GameResponse(game.getId(), home, away);
    }
}
