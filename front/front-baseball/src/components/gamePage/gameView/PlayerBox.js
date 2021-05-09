import React, {useState} from 'react';
import styled from 'styled-components';
const PlayerContainer = styled.div`
width: 100%;
height: 25%;
border-bottom: 10px solid black;
`;
const PitcherContainer = styled.div``;

const PlayerBox = ({playerData}) => {
    console.log(playerData.homeTeamData.pitchers);
    const [playerState, setPlayerState] = useState(0);
    const addPlayerIndex = () => {
        setPlayerState(playerState + 1);
    }
    const setPlayer = () => {
        return playerData.homeTeamData.batters[playerState].playerName;
        
    }
    const setPitcher = () => {
        return playerData.homeTeamData.pitcher.playerName;
    }
    return (
        <>
        <PitcherContainer>
            {setPitcher()}
        </PitcherContainer>
        <PlayerContainer>
            {setPlayer()}
        </PlayerContainer>
        </>
    );
}

export default PlayerBox;
