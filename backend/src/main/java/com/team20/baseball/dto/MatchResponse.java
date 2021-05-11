package com.team20.baseball.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.team20.baseball.domain.team.Team;

public class MatchResponse {

    private boolean isSelected = true;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private TeamDetail homeTeamData;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private TeamDetail awayTeamData;

    private MatchResponse() {
    }

    private MatchResponse(boolean isSelected, Team homeTeamData, Team awayTeamData) {
        this.isSelected = isSelected;
        this.homeTeamData = TeamDetail.of(homeTeamData);
        this.awayTeamData = TeamDetail.of(awayTeamData);
    }

    public boolean isIsSelected() {
        return isSelected;
    }

    public TeamDetail getHomeTeamData() {
        return homeTeamData;
    }

    public TeamDetail getAwayTeamData() {
        return awayTeamData;
    }

    public static MatchResponse of(Team homeTeamData, Team awayTeamData){
        return new MatchResponse(false, homeTeamData, awayTeamData);
    }

    public static MatchResponse of(){
        return new MatchResponse();
    }

}
