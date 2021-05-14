package com.team20.baseball.domain.play;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface InningRepository extends CrudRepository<Inning, Long> {

    @Modifying
    @Query("UPDATE inning SET score = :score, base_one = :baseOne, base_two = :baseTwo, base_three = :baseThree WHERE id = :inningId")
    void update(Long inningId, int score, Long baseOne, Long baseTwo, Long baseThree);

}
