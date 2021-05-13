package com.team20.baseball.controller;

import com.team20.baseball.application.PlayService;
import com.team20.baseball.domain.play.InningRepository;
import com.team20.baseball.dto.PitchRequest;
import com.team20.baseball.dto.PlayResultRequest;
import com.team20.baseball.dto.StartRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping(("/play"))
public class PlayApiController {

    private final PlayService playService;

    public PlayApiController(PlayService playService) {
        this.playService = playService;
    }

    @PostMapping("/start")
    public ApiResponse start(@RequestBody StartRequest startRequest) {
        return ApiResponse.OK(Collections.singletonMap("inningId", playService.start(startRequest)));
    }

    @PutMapping("/result")
    public ApiResponse result(@RequestBody PlayResultRequest playResultRequest) {
        return ApiResponse.OK(playResultRequest);
    }

    @PostMapping("/pitch")
    public ApiResponse pitch(@RequestBody PitchRequest pitchRequest) {
        return ApiResponse.OK(pitchRequest);
    }
}
