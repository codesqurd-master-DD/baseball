package com.team20.baseball.application;

import com.team20.baseball.domain.play.Inning;
import com.team20.baseball.domain.play.InningRepository;
import com.team20.baseball.domain.play.PlayHistory;
import com.team20.baseball.domain.play.PlayHistoryRepository;
import com.team20.baseball.dto.PitchRequest;
import com.team20.baseball.dto.StartRequest;
import org.springframework.stereotype.Service;

@Service
public class PlayService {

    private final InningRepository inningRepository;
    private final PlayHistoryRepository playHistoryRepository;

    public PlayService(InningRepository inningRepository, PlayHistoryRepository playHistoryRepository) {
        this.inningRepository = inningRepository;
        this.playHistoryRepository = playHistoryRepository;
    }

    public Long start(StartRequest startRequest) {
        Inning inning = startRequest.toInning();
        inningRepository.save(inning);
        return inning.getId();
    }

    public PlayHistory pitch(PitchRequest pitchRequest) {
        PlayHistory playHistory = pitchRequest.toEntity();
        playHistoryRepository.save(playHistory);
        return playHistory;
    }
}
