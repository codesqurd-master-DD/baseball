package com.team20.baseball.application;

import com.team20.baseball.domain.game.Game;
import com.team20.baseball.domain.game.GameRepository;
import com.team20.baseball.domain.team.Team;
import com.team20.baseball.domain.team.TeamRepository;
import com.team20.baseball.dto.GameResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;
    private final TeamRepository teamRepository;

    public GameService(GameRepository gameRepository, TeamRepository teamRepository) {
        this.gameRepository = gameRepository;
        this.teamRepository = teamRepository;
    }

    public List<GameResponse> gameList() {
        List<GameResponse> games = new ArrayList<>();
        for (Game game : gameRepository.findAll()) {
            Team home = teamRepository.findById(game.getHomeId()).orElseThrow(IllegalArgumentException::new);
            Team away = teamRepository.findById(game.getAwayId()).orElseThrow(IllegalArgumentException::new);
            games.add(GameResponse.of(game, home, away));
        }
        return games;
    }
}
