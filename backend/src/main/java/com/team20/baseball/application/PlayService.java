package com.team20.baseball.application;

import com.team20.baseball.domain.play.Inning;
import com.team20.baseball.domain.play.InningRepository;
import com.team20.baseball.dto.StartRequest;
import org.springframework.stereotype.Service;

@Service
public class PlayService {

    private final InningRepository inningRepository;

    public PlayService(InningRepository inningRepository) {
        this.inningRepository = inningRepository;
    }

    public Long start(StartRequest startRequest) {
        Inning inning = startRequest.toInning();
        inningRepository.save(inning);
        return inning.getId();
    }
}
