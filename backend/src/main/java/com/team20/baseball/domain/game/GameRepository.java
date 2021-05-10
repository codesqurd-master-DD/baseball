package com.team20.baseball.domain.game;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface GameRepository extends CrudRepository<Game, Long>, PagingAndSortingRepository<Game, Long> {

    @Override
    List<Game> findAll();
}
