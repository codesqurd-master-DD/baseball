package com.team20.baseball.dto;

import com.team20.baseball.domain.team.Team;

public class TeamResponse {
    private Long teamId;
    private String teamName;
    private boolean selected;

    private TeamResponse(Long teamId, String teamName, boolean selected) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.selected = selected;
    }

    public static TeamResponse of(Team team) {
        return new TeamResponse(team.getId(), team.getName(), false);
    }

    public Long getTeamId() {
        return teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public boolean isSelected() {
        return selected;
    }
}
