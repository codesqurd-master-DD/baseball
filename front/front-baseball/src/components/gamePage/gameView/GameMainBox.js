import React, {useState, useEffect} from 'react';
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
    homeTeamData: {
        selected:true,
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
        {
            playerId: 7,
            playerNumber: 299,
            playerName: "Lano",
        },
        {
            playerId: 8,
            playerNumber: 298,
            playerName: "Lano",
        },
        {
            playerId: 9,
            playerNumber: 300,
            playerName: "Lano",
        },
        {
            playerId: 10,
            playerNumber: 2313,
            playerName: "Lano",
        },
        {
            playerId: 11,
            playerNumber: 232,
            playerName: "Lano",
        },
        {
            playerId: 12,
            playerNumber: 234,
            playerName: "Lanu",
        }

    ],
    },
    awayTeamData: {
        selected:false,
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
        {
            playerId: 17,
            playerNumber: 431,
            playerName: "Crong",
        },
        {
            playerId: 18,
            playerNumber: 431,
            playerName: "honux",
        },
    ],
    }
    }

const GameMainBox = () => {
    // 루수에대한 배열 상태 -> 4개의 배열상태를 만들어 최신화 하면서 마지막 배열이 1일때 카운터 증가
    const [basemanSate, setBasemanState] = useState([]);
    // 내가 선택한 팀의 스코어 증가 -> 막배열 1이면 1증가
    const [ourTeamState, setOurTeamState] = useState(0);
    // 상대팀 스코어 증가 -> -> 막 배열 1이면 증가
    const [opponentTeamState, setOpponentTeamState] = useState(0);
    // 타자의 인덱스 상태 -> 
    const [ourBatterIndex, setOurBatterIndex] = useState(0);
    const [homeBattersIndex, setHomeBattersIndex] = useState(0);
    const [awayBattersIndex, setAwayBattersIndex] = useState(0);
    const addPlayerIndex = () => {
        if(awayBattersIndex >= 10) setAwayBattersIndex(0);
        if(homeBattersIndex >= 10) setHomeBattersIndex(0);
        if(isTop) setAwayBattersIndex(awayBattersIndex+1);
        if(!isTop) setHomeBattersIndex(homeBattersIndex+1);
    }
    const setTeamIndex = () => {
        return isTop ? awayBattersIndex : homeBattersIndex;
    }
    // 안타 카운터 상태
    const [hitsCnt, setHitsCnt] = useState(0);
    // 라운드 카운트
    const [roundCount, setRoundCount] = useState(1);
    // 초 말 상태
    const [isTop, setIsTop] = useState(true);
    const [strikeCnt, setStrikeCnt] = useState([]);
    const [ballCnt, setBallCnt] = useState([]);
    const [outCnt, setOutCnt] = useState([]);

    const [pitchState, setPitchState] = useState(true);
    const ConvertPosition = () => {
        setPitchState(!pitchState);
    }
    // 첫 순서 결정
    const decidePlaySequence = () => {
        if(playerData.awayTeamData.selected) {
            setPitchState(false);
            setIsDefense(false);
            return playOffense();
        }
    }
    const playOffense = () => {
        // setInterval(() => createPitchResult(), 3000);
    }
    const [isDefense, setIsDefense] = useState(true);
    // 초기 셋팅 값 다음의 회차 업데이트 작성 

    
    // 초말 바뀌면서 타자, 투수 데이터 전환
    const setBattersTeam = () => {
		return isTop ? 'awayTeamData': 'homeTeamData';
}
    const setPitcherTeam = () => {
		return !isTop ? 'awayTeamData': 'homeTeamData';
}
    const createPitchResult = () => {
        const pitchArr = ['Strike', 'Ball', 'Strike','Strike','Strike','Strike', 'Hits'];
        const CreateBallCount = () => {
            return pitchArr[Math.floor(Math.random()*pitchArr.length)];
        }
        switch(CreateBallCount()) {
            case 'Strike':
                return addStrike();
            case 'Ball':
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
        addPlayerIndex();
    }
    const addStrike = () => {
        if(strikeCnt.length > 2) return;
        setStrikeCnt([...strikeCnt, {
            id: strikeCnt.length,
            value: 0
        }])
        if(strikeCnt.length === 2) {
            setTimeout(() => {
                setBallCnt([]);
                setStrikeCnt([]);
                return addOut();
            }, 500);
        }
    }
    const addOut = () => {
        if(outCnt.length > 2) return;
        setOutCnt([...outCnt, {
            id: outCnt.length,
            value: 0
        }])
        setHitsCnt(0);
        if(outCnt.length < 2) {
            return addPlayerIndex();
        }
        if(outCnt.length === 2) {
            setTimeout(() => {
                setTurn();
                setOutCnt([]);
                return;
            }, 500)
        }
    }
    const setTurn = () => {
        setIsDefense(!isDefense);
        if(isDefense) {
            setPitchState(false);
            // playOffense();
        }
        if(!isDefense) {
            setPitchState(true);
        }
        setIsTop(!isTop);
        if(!isTop) setRoundCount(roundCount + 1);
    }
    const addBall = () => {
        if(ballCnt.length > 3) return;
        setBallCnt([...ballCnt, {
            id: ballCnt.length,
            value: 0
        }])
        if(ballCnt.length === 3) {
            addPlayerIndex();
            setTimeout(() => {
                setStrikeCnt([]);
                setBallCnt([]);
                return;
            }, 500)
        }
    }
    useEffect(() => {
        if(pitchState) return;
        let Timer;
        if(!isDefense){
            Timer = setTimeout(() => {createPitchResult()}, 500);
        }
        return () => {
            clearTimeout(Timer);
        };
      });
    return (
        <GameContainer>
            <MatchContainer>
                <ScoreBox opponentTeamState={opponentTeamState}/>
                <GroundBox isDefense={isDefense} decidePlaySequence={decidePlaySequence} ConvertPosition={ConvertPosition} pitchState={pitchState} isTop={isTop} roundCount={roundCount} strikeCnt={strikeCnt} ballCnt={ballCnt} outCnt={outCnt} createPitchResult={createPitchResult} playerData={playerData}/>
            </MatchContainer>
            <PlayerContainer>
                <PlayerBox setTeamIndex={setTeamIndex}setPitcherTeam={setPitcherTeam} setBattersTeam={setBattersTeam} ourBatterIndex={ourBatterIndex} hitsCnt={hitsCnt} playerData={playerData}/>
                <PlayerDetailBox />
            </PlayerContainer>
        </GameContainer>
    );
}

export default GameMainBox;