package com.team20.baseball.controller;

import com.team20.baseball.application.GameService;
import com.team20.baseball.domain.game.Game;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/game")
public class GameApiController {

    private final GameService gameService;

    public GameApiController(GameService gameService) {
        this.gameService = gameService;
    }

    @GetMapping()
    public List<Game> gameList(){
        return gameService.gameList();
    }

}
