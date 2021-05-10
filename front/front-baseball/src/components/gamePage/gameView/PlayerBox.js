import React, {useState} from 'react';
import styled from 'styled-components';
const PlayerContainer = styled.div`
width: 100%;
height: 25%;
border-bottom: 10px solid #7e7b7b;
`;
const PitcherContainer = styled.div`
    padding: 1em;
    border: 1px solid white;
    `;
const BatterContainer = styled.div`
padding: 1em;
border: 1px solid white;
`;
const PlayerTitle = styled.div`
font-size: 2em;
font-weight:500;
border: 1px solid blue;
`;
const PlayerInfo = styled.ul`
font-size: 1.5em;
display:flex;
list-style:none;
border: 1px solid red;
/* margin: 0; */
`;
const PlayerList = styled.li`
margin-right: 20px;
color: ${(props) => (props.active === 0 ? "#c4e4ea;" : "#70aac0")};
`;

const PlayerBox = ({playerData, hitsCnt, batterState}) => {
    console.log(playerData.homeTeamData.pitchers);
    const [playerState, setPlayerState] = useState(0);
    const addPlayerIndex = () => {
        setPlayerState(playerState + 1);
    }
    const setPlayer = () => {
        let siteCnt = 1;
        let batterInfo = `${siteCnt}타석 ${hitsCnt}안타`;
        let batter = playerData.homeTeamData.batters[playerState].playerName;
        let batterArr = [batter, batterInfo];
        const batterList = batterArr.map((e, idx) => <PlayerList key={idx} active={idx}>{e}</PlayerList>)
        return batterList;
        
    }
    const setPitcher = () => {
        let pitchers = playerData.homeTeamData.pitcher;
        let pitNum = `#${pitchers.playerNumber}`
        const pitcherArr = [pitchers.playerName, pitNum];
        const pitcherList = pitcherArr.map((e, idx) => <PlayerList key={idx} active={idx}>{e}</PlayerList>)
        // console.log(playerData.homeTeamData.pitcher.playerNumber);
        return pitcherList;
    }
    return (
        <PlayerContainer>
        <PitcherContainer>
            <PlayerTitle>투수</PlayerTitle>
            <PlayerInfo>{setPitcher()}</PlayerInfo>
        </PitcherContainer>
        <BatterContainer>
        <PlayerTitle>타자</PlayerTitle>
            <PlayerInfo>{setPlayer()}</PlayerInfo>
        </BatterContainer>
        </PlayerContainer>
    );
}

export default PlayerBox;
