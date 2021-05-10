package com.team20.baseball.application;

import com.team20.baseball.domain.game.Game;
import com.team20.baseball.domain.game.GameRepository;
import com.team20.baseball.domain.team.Team;
import com.team20.baseball.domain.team.TeamRepository;
import com.team20.baseball.dto.GameResponse;
import com.team20.baseball.dto.PagingRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameService {

    private final GameRepository gameRepository;
    private final TeamRepository teamRepository;

    public GameService(GameRepository gameRepository, TeamRepository teamRepository) {
        this.gameRepository = gameRepository;
        this.teamRepository = teamRepository;
    }

    public List<GameResponse> gameList() {
        return gameRepository.findAll()
                .stream()
                .map(game -> gameResponse(game))
                .collect(Collectors.toList());
    }

    public List<GameResponse> gameList(PagingRequest pagingRequest){
        return gameRepository.findAll(pagingRequest.toPageRequest())
                .stream()
                .map(game -> gameResponse(game))
                .collect(Collectors.toList());
    }

    private GameResponse gameResponse(Game game) {
        Team home = teamRepository.findById(game.getHomeId()).orElseThrow(IllegalArgumentException::new);
        Team away = teamRepository.findById(game.getAwayId()).orElseThrow(IllegalArgumentException::new);
        return GameResponse.of(game, home, away);
    }
}
