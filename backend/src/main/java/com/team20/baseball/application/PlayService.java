package com.team20.baseball.application;

import com.team20.baseball.domain.play.*;
import com.team20.baseball.dto.PitchRequest;
import com.team20.baseball.dto.PlayResultRequest;
import com.team20.baseball.dto.StartRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class PlayService {

    private static final Logger logger = LoggerFactory.getLogger(PlayService.class);

    private final InningRepository inningRepository;
    private final PlayHistoryRepository playHistoryRepository;
    private final PlayerScoreRepository playerScoreRepository;

    public PlayService(InningRepository inningRepository, PlayHistoryRepository playHistoryRepository, PlayerScoreRepository playerScoreRepository) {
        this.inningRepository = inningRepository;
        this.playHistoryRepository = playHistoryRepository;
        this.playerScoreRepository = playerScoreRepository;
    }

    public Long start(StartRequest startRequest) {
        Inning inning = startRequest.toInning();
        inningRepository.save(inning);
        return inning.getId();
    }

    public void result(PlayResultRequest playResultRequest) {
        updateInning(playResultRequest);
        updatePlayScore(playResultRequest);
    }

    public PlayHistory pitch(PitchRequest pitchRequest) {
        PlayHistory playHistory = pitchRequest.toEntity();
        playHistoryRepository.save(playHistory);
        return playHistory;
    }

    private void updatePlayScore(PlayResultRequest playResultRequest){
        PlayerScore playerScore = playerScoreRepository
                .findByGameIdAndPlayerId(playResultRequest.getGameId(), playResultRequest.getBatter())
                .orElseThrow(IllegalArgumentException::new);
        playerScore.update(playResultRequest);
        logger.debug("Updated PlayerScore : {}", playerScore);
        playerScoreRepository.save(playerScore);
    }

    private void updateInning(PlayResultRequest playResultRequest){
        inningRepository.update(
                playResultRequest.getInningId(),
                playResultRequest.getScore(),
                playResultRequest.getBaseOne(),
                playResultRequest.getBaseTwo(),
                playResultRequest.getBaseThree()
        );
        logger.debug("Updated Inning : {}", playResultRequest.getInningId());
    }

}
