package com.team20.baseball.controller;

import com.team20.baseball.application.GameService;
import com.team20.baseball.dto.GameResponse;
import com.team20.baseball.dto.PagingRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping
    public ApiResponse list() {
        return ApiResponse.OK(gameService.gameList());
    }

    @GetMapping("/{offset}")
    public ApiResponse list(@PathVariable int offset) {
        return ApiResponse.OK(
                gameService.gameList(PagingRequest.of(offset)));
    }
}
