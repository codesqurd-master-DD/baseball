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
const ScoreBox = ({opponentTeamState, outTeamSate}) => {
    const MatchInfoStr = () => {
        return `Captain ${opponentTeamState} vs 5 Marvel`;
    }
    return (
        <ScoreCotainer>
            <GameInfo>BASEBALL GAME ONLINE</GameInfo>
            <MatchInfo>{MatchInfoStr()}</MatchInfo>
        </ScoreCotainer>
    );
}

export default ScoreBox;
