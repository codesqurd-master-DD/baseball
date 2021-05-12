package com.team20.baseball.controller;

import com.team20.baseball.application.GameService;
import com.team20.baseball.dto.PagingRequest;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/selected")
    public ApiResponse isSelected(@RequestParam Long gameId, @RequestParam Long teamId) {
        return ApiResponse.OK(gameService.matchDetail(gameId, teamId));
    }
}
