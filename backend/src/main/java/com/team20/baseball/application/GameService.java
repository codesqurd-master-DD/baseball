package com.team20.baseball.application;

import com.team20.baseball.domain.game.Game;
import com.team20.baseball.domain.game.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> gameList() {
        return gameRepository.findAll();
    }
}
