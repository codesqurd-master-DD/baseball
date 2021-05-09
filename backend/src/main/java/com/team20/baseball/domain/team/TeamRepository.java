package com.team20.baseball.domain.team;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface TeamRepository extends CrudRepository<Team, Long> {

    @Override
    @Query("select * from team where id=:id")
    Optional<Team> findById(Long id);
}
