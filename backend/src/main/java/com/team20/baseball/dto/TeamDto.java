package com.team20.baseball.dto;

public class TeamDto {
    private Long teamId;
    private String teamName;
    private boolean selected;

    public TeamDto(Long teamId, String teamName, boolean selected) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.selected = selected;
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
