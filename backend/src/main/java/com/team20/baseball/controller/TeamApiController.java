package com.team20.baseball.controller;

import com.team20.baseball.application.TeamService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/team")
public class TeamApiController {

    private final TeamService teamService;

    public TeamApiController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/{teamId}")
    public ApiResponse team(@PathVariable Long teamId) {
        return ApiResponse.OK(teamService.team(teamId));
    }
}
