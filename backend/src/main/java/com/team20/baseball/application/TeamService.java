package com.team20.baseball.application;

import com.team20.baseball.domain.team.TeamRepository;
import com.team20.baseball.dto.TeamDetail;
import com.team20.baseball.exception.TeamNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public TeamDetail team(Long teamId) {
        return teamRepository.findById(teamId)
                .map(team -> TeamDetail.of(team))
                .orElseThrow(() -> new TeamNotFoundException("Could not found team, id number" + teamId));
    }

}
