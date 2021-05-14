package com.team20.baseball.domain.play;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional(readOnly = true)
public interface PlayerScoreRepository extends CrudRepository<PlayerScore, Long> {

    Optional<PlayerScore> findByGameIdAndPlayerId(Long gameId, Long playerId);

    @Modifying
    @Transactional
    @Query("INSERT INTO player_score (game_id, player_id) VALUES (:gameId, :playerId);")
    void init(Long gameId, Long playerId);

}
