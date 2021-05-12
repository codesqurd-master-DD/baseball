package com.team20.baseball.domain.game;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface GameRepository extends CrudRepository<Game, Long>, PagingAndSortingRepository<Game, Long> {

    @Override
    List<Game> findAll();

    @Query("SELECT IF(COUNT(*), 'true', 'false') AS 'isSelected' from `team` INNER JOIN `user_selected` ON `user_selected`.`team_id` = `team`.`id` WHERE `team`.`id`=:teamId")
    boolean isSelected(Long teamId);
}
