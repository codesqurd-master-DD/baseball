import React, {useState} from 'react';
import styled from 'styled-components';
import GroundBox from "./GroundBox";
import ScoreBox from "./ScoreBox";
import PlayerBox from "./PlayerBox";
import PlayerDetailBox from "./PlayerDetailBox"
const GameContainer = styled.div`
position: absolute;
width:100%;
height:100%;
border: 10px solid #7e7b7b;
background-color: black;
color: white;
`;
const MatchContainer = styled.div`
float: left;
width: 75%;
height: 100%;
border-right: 10px solid #7e7b7b;
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
        playerNumber: 51,
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
    const [basemanSate, setBasemanState] = useState([]);
    const [ourTeamState, setOurTeamState] = useState(0);
    const [opponentTeamState, setOpponentTeamState] = useState(0);
    const [batterState, setBatterState] = useState(0);
    const [hitsCnt, setHitsCnt] = useState(0);
    const [strikeCnt, setStrikeCnt] = useState([]);
    const [ballCnt, setBallCnt] = useState([]);
    const [outCnt, setOutCnt] = useState([]);
    const createPitchResult = () => {
        const pitchArr = ['Strike', 'Ball', 'Hits'];
        const CreateBallCount = () => {
            return pitchArr[Math.floor(Math.random()*pitchArr.length)];
        }
        switch(CreateBallCount()) {
            case 'Strike':
                console.log('s');
                return addStrike();
            case 'Ball':
                console.log('b');
                return addBall();
            case 'Hits':
                return addHits();
            default:
                throw new Error();
        }
        // pitchArr[]
    }
    const addHits = () => {
        if(hitsCnt === 0) setHitsCnt(hitsCnt + 1);
        // setOpponentTeamState(opponentTeamState + 1)
        setBasemanState(basemanSate.push(1));
    }
    const addStrike = () => {
        if(strikeCnt.length > 2) return;
        setStrikeCnt([...strikeCnt, {
            id: strikeCnt.length,
            value: 0
        }])
        console.log(strikeCnt);
        if(strikeCnt.length === 2) {
            setTimeout(() => {
                setBallCnt([]);
                setStrikeCnt([]);
                return addOut();
            }, 1000);
        }
    }
    const addOut = () => {
        setBasemanState(basemanSate.push())
        if(outCnt.length > 2) return;
        setOutCnt([...outCnt, {
            id: outCnt.length,
            value: 0
        }])
        setHitsCnt(0);
        if(outCnt.length === 2) {
            console.log('공수전환');
            setTimeout(() => {
                setOutCnt([]);
                return;
            }, 1000)
        }
    }
    const addBall = () => {
        if(ballCnt.length > 3) return;
        setBallCnt([...ballCnt, {
            id: ballCnt.length,
            value: 0
        }])
        if(ballCnt.length === 3) {
            console.log('4볼');
            setTimeout(() => {
                setStrikeCnt([]);
                setBallCnt([]);
                return;
            }, 1000)
        }
    }
    return (
        <GameContainer>
            <MatchContainer>
                <ScoreBox opponentTeamState={opponentTeamState}/>
                <GroundBox strikeCnt={strikeCnt} ballCnt={ballCnt} outCnt={outCnt} createPitchResult={createPitchResult} playerData={playerData}/>
            </MatchContainer>
            <PlayerContainer>
                <PlayerBox batterState={batterState} hitsCnt={hitsCnt} playerData={playerData}/>
                <PlayerDetailBox />
            </PlayerContainer>
        </GameContainer>
    );
}

export default GameMainBox;
