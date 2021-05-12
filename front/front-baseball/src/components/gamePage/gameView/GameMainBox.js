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
            playerName: "Lana",
        },
        {
            playerId: 8,
            playerNumber: 298,
            playerName: "Lanb",
        },
        {
            playerId: 9,
            playerNumber: 300,
            playerName: "Lanc",
        },
        {
            playerId: 10,
            playerNumber: 2313,
            playerName: "Land",
        },
        {
            playerId: 11,
            playerNumber: 232,
            playerName: "Lanx",
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
    const [homeScore, setHomeScore] = useState([]);
    // 상대팀 스코어 증가 -> -> 막 배열 1이면 증가
    const [awayScore, setAwayScore] = useState([]);
    // 타자의 인덱스 상태 -> 
    const [ourBatterIndex, setOurBatterIndex] = useState(0);
    const [homeBattersIndex, setHomeBattersIndex] = useState(0);
    const [awayBattersIndex, setAwayBattersIndex] = useState(0);

    const [batterHistory, setBatterHistory] = useState([]);

    const [turnState, setTurnState] = useState(0);
    const [changeState, setChangeState] = useState(0);


    const addPlayerIndex = () => {
        // console.log('home', homeBattersIndex);
        // console.log('away', awayBattersIndex);
        setHitsCnt(0)
        if(awayBattersIndex >= 9) {
            setAwayBattersIndex(0);
        }
        if(homeBattersIndex >= 9) {
            setHomeBattersIndex(0);
        } 
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

    const [ballCount, setBallCount] = useState(0);
    const [ballHistory, setBallHistory] = useState([]);


    const [SBHistory, setSBHistory] = useState([]);

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
                addStrike();
                return setBallCount(ballCount+1)
            case 'Ball':
                addBall();
                return setBallCount(ballCount+1)
            case 'Hits':
                addHits();
                return setBallCount(ballCount+1)
            default:
                throw new Error();
        }
        // pitchArr[]
    }
    const addHits = () => {
        // if(hitsCnt === 0) {
            setHitsCnt(hitsCnt + 1);
        // }
        addPlayerIndex();
        // setBallCount(ballCount+1);
        setTurnState(turnState + 1);
        setChangeState(changeState +1);
    }
    const addStrike = () => {
        if(strikeCnt.length > 2) return;
        setStrikeCnt([...strikeCnt, {
            id: strikeCnt.length,
            value: 0
        }])
        setSBHistory([...SBHistory, '스트라이크']);
        // setBallCount(ballCount+1);
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
        addPlayerIndex();
        // setBallCount(ballCount+1);
        setTurnState(turnState + 1);
        setChangeState(changeState + 1)
        setHitsCnt(0);
        // if(outCnt.length < 2) {
        //     return addPlayerIndex();
        // }
        if(outCnt.length === 2) {
            setTimeout(() => {
                setTurn();
                setOutCnt([]);
                return;
            }, 500)
        }
    }
    const setTurn = () => {
        setTurnState(-1);
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
        setSBHistory([...SBHistory, '볼'])
        // setBallCount(ballCount+1);
        if(ballCnt.length === 3) {
            addPlayerIndex();
            // setBallCount(ballCount+1);
            setTurnState(turnState + 1);
            setChangeState(changeState+1);
            setTimeout(() => {
                setStrikeCnt([]);
                setBallCnt([]);
                return;
            }, 500)
        }
    }
    const [homeHistory, setHomeHistory] = useState([]);
    const [awayHistory, setAwayHistory] = useState([]);
    const [allHistory, setAllHistory] = useState([]);
    const createBattersArr = () => {
            let siteCnt = 1;
            let batterInfo = `${siteCnt}타석 ${hitsCnt}안타`;
            let batter = playerData[setBattersTeam()].batters[setTeamIndex()].playerName;
            let batterArr = [batter, batterInfo];
            return batterArr;
        }
        const createPitcherArr = () => {
            let pitchers = playerData[setPitcherTeam()].pitcher;
            let pitNum = `#${pitchers.playerNumber}`
            const pitcherArr = [pitchers.playerName, pitNum];
            return pitcherArr;
        }
    useEffect(() => {
        // console.log("s",strikeCnt.length);
        // console.log("b", ballCnt.length);
        // console.log("o", outCnt.length);
        // console.log(setTeamIndex());
        // if()


        if(pitchState) return;
        let Timer;
        if(!isDefense){
            Timer = setTimeout(() => {createPitchResult()}, 500);
        }
        return () => {
            clearTimeout(Timer);
        };
    });

    useEffect(() => {
          console.log('SB', SBHistory)
          console.log("볼카운트히스토리",ballHistory)
        //   console.log(ballCount)
        setBallHistory([...ballHistory, {
            id: ballHistory.length,
            strike: strikeCnt.length,
            ball: ballCnt.length,
            value: SBHistory[SBHistory.length-1]
        }])
    }, [ballCount]);
    
    useEffect(() => {
        //   console.log('인덱스',setTeamIndex());
        console.log('루수',basemanSate)
        setBasemanState([...basemanSate, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber]

        )
        setAllHistory([...allHistory, [
        ballHistory
        ]])
        setBallHistory([]);
        setBatterHistory([...batterHistory, {
            id: batterHistory.length,
            cnt: turnState,
            value: playerData[setBattersTeam()].batters[setTeamIndex()].playerName
        }])
    }, [changeState]);
    return (
        <GameContainer>
            <MatchContainer>
                <ScoreBox />
                <GroundBox isDefense={isDefense} decidePlaySequence={decidePlaySequence} ConvertPosition={ConvertPosition} pitchState={pitchState} isTop={isTop} roundCount={roundCount} strikeCnt={strikeCnt} ballCnt={ballCnt} outCnt={outCnt} createPitchResult={createPitchResult} playerData={playerData}/>
            </MatchContainer>
            <PlayerContainer>
                <PlayerBox createBattersArr={createBattersArr} createPitcherArr={createPitcherArr} hitsCnt={hitsCnt} playerData={playerData}/>
                <PlayerDetailBox allHistory={allHistory} ballHistory={ballHistory} batterHistory={batterHistory}/>
            </PlayerContainer>
        </GameContainer>
    );
}

export default GameMainBox;