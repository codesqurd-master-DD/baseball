package com.team20.baseball.dto;

import com.team20.baseball.domain.team.Player;
import com.team20.baseball.domain.team.Team;

import java.util.Set;

public class TeamDetail {
    private Long teamId;
    private String teamName;
    private Player pitcher;
    private Set<Player> batters;

    private TeamDetail(Long teamId, String teamName, Player pitcher, Set<Player> batters) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.pitcher = pitcher;
        this.batters = batters;
    }

    public Long getTeamId() {
        return teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public Player getPitcher() {
        return pitcher;
    }

    public Set<Player> getBatters() {
        return batters;
    }

    public static TeamDetail of(Team team){
        return new TeamDetail(team.getId(), team.getName(), team.getPitcher(), team.getBatters());
    }
}
