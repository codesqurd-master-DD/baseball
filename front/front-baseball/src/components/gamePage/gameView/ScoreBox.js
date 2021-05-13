import React from 'react';
import styled from 'styled-components';

const CenterContainer = styled.div`
display: flex;
align-items: center;
flex-direction:column;
`;

const ScoreCotainer = styled(CenterContainer)`
width:100%;
height: 25%;
border-bottom: 10px solid #7e7b7b;
`;
const GameInfo = styled.div`
margin-top: 60px;
font-size: 40px;
font-weight: 600;
`;
const MatchInfo = styled.div`
margin-top: 20px;
padding: 10px;
font-size: 5em;
font-weight:700;
`;
const AwayTeam = styled.div`
color:red;
font-size:2.5em;
font-weight:700;
position: absolute;
top:18%;
left: 22%;
`;
const HomeTeam = styled.div`
color:red;
font-size:2.5em;
font-weight:700;
position: absolute;
top:18%;
left: 48%;
`;
const ScoreBox = ({isHome, awayScore, homeScore, opponentTeamState, outTeamSate}) => {
    const MatchInfoStr = () => {
        return `Captain ${awayScore} vs ${homeScore} Marvel`;
    }
    return (
        <ScoreCotainer>
            <GameInfo>BASEBALL GAME ONLINE</GameInfo>
            <MatchInfo>{MatchInfoStr()}</MatchInfo>
            {!isHome && <AwayTeam>player</AwayTeam>}
            {isHome && <HomeTeam>player</HomeTeam>}
        </ScoreCotainer>
    );
}

export default ScoreBox;
