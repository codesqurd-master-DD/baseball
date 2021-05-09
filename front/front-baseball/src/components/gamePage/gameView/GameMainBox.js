import React from 'react';
import styled from 'styled-components';
import GroundBox from "./GroundBox";
import ScoreBox from "./ScoreBox";
import PlayerBox from "./PlayerBox";
import PlayerDetailBox from "./PlayerDetailBox"
// import axios from "axios";
const GameContainer = styled.div`

position: absolute;
width:100%;
height:100%;
border: 10px solid black;
`;
const MatchContainer = styled.div`
float: left;
width: 75%;
height: 100%;
border-right: 10px solid black;
`;
const PlayerContainer = styled.div`
float: right;
width: 25%;
height: 100%;
`;
const playerData = {
    isSelected: false,
    homeTeamData: {
        teamId: 8,
        teamName: "Rockets",
        pitcher: {
        playerId: "player-0",
        playerNumber: "number-0",
        playerName: "류현진",
        },
    batters: [
        {
            playerId: 1,
            playerNumber: 8,
            playerName: "DD",
        },
        {
            playerId: 2,
            playerNumber: 22,
            playerName: "Woody",
        },
        {
            playerId: 3,
            playerNumber: 23,
            playerName: "Luke",
        },
        {
            playerId: 4,
            playerNumber: 38,
            playerName: "json",
        },
        {
            playerId: 5,
            playerNumber: 25,
            playerName: "kyle",
        },
        {
            playerId: 6,
            playerNumber: 29,
            playerName: "Lano",
        },

    ],
    },
    awayTeamData: {
        teamName: "Captain",
        pitcher: {
        playerId: 99,
        playerNumber: 3,
        playerName: "박찬호",
        },
    batters: [
        {
            playerId: 7,
            playerNumber: 31,
            playerName: "Seong",
        },
        {
            playerId: 8,
            playerNumber: 7,
            playerName: "Goody",
        },
        {
            playerId: 9,
            playerNumber: 11,
            playerName: "Adela",
        },
        {
            playerId: 10,
            playerNumber: 27,
            playerName: "Daisy",
        },
        {
            playerId: 11,
            playerNumber: 5,
            playerName: "Junami",
        },
        {
            playerId: 12,
            playerNumber: 2,
            playerName: "eve",
        },
        {
            playerId: 13,
            playerNumber: 66,
            playerName: "Dico",
        },
        {
            playerId: 14,
            playerNumber: 33,
            playerName: "Neis",
        },
        {
            playerId: 15,
            playerNumber: 44,
            playerName: "eamon",
        },
        {
            playerId: 16,
            playerNumber: 41,
            playerName: "Junny",
        },
    ],
    }
    }

const GameMainBox = () => {
    return (
        <GameContainer>
            <MatchContainer>
                <ScoreBox />
                <GroundBox playerData={playerData}/>
            </MatchContainer>
            <PlayerContainer>
                <PlayerBox playerData={playerData}/>
                <PlayerDetailBox />
            </PlayerContainer>
        </GameContainer>
    );
}

export default GameMainBox;
