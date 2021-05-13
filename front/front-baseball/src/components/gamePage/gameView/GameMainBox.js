import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import GroundBox from "./GroundBox";
import ScoreBox from "./ScoreBox";
import PlayerBox from "./PlayerBox";
import PlayerDetailBox from "./PlayerDetailBox"
import Fade from "../Fade";
import CurrentScoreBox from "../scoreInfoPop/CurrentScoreBox";
import PlayerList from "../playerDtailInfoPop/PlayerList";

const playerData = {
    selectedTeamId: 8,
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
        teamId: 7,
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
    const DUMMY = {
        home: {
          teamname: "captain",
          scores: [],
          total: 0,
          playerPick: true,
        },
        away: {
          teamname: "marvel",
          scroes: [],
          playerPick: false,
          total: 0,
        },
      };


const GameMainBox = () => {

    // console.log('로케',location)
    // const playerData = location.state;
    const {homeTeamData, awayTeamData, selectedTeamId} = playerData;
    // const {teamId} = 
    let scoreData = {
        home: {
          teamname: `${homeTeamData.teamName}`,
          playerPick: `${selectedTeamId === homeTeamData.teamId}`,
        },
        away: {
          teamname: `${awayTeamData.teamName}`,
          playerPick: `${selectedTeamId === awayTeamData.teamId}`,
        },
      };


    // 루수에대한 배열 상태 -> 4개의 배열상태를 만들어 최신화 하면서 마지막 배열이 1일때 카운터 증가
    const [awayBasemanState, setAwayBasemanState] = useState([]);
    const [homeBasemanState, setHomeBasemanState] = useState([]);

    const [homeScoreArr, setHomeScoreArr] = useState([]);
    const [awayScoreArr, setAwayScoreArr] = useState([]);
    // 내가 선택한 팀의 스코어 증가 -> 막배열 1이면 1증가
    const [homeScore, setHomeScore] = useState(0);
    // 상대팀 스코어 증가 -> -> 막 배열 1이면 증가
    const [awayScore, setAwayScore] = useState(0);
    // 타자의 인덱스 상태 -> 
    const [homeBattersIndex, setHomeBattersIndex] = useState(0);
    const [awayBattersIndex, setAwayBattersIndex] = useState(0);

    const [batterHistory, setBatterHistory] = useState([]);

    const [turnState, setTurnState] = useState(0);
    const [changeState, setChangeState] = useState(0);

    const [startState, setStartState] = useState(true);


    const addPlayerIndex = () => {
        // setHitsCnt(0)
        // if(awayBattersIndex >= 9) {
        //     setAwayBattersIndex(0);
        // }
        // if(homeBattersIndex >= 9) {
        //     setHomeBattersIndex(0);
        // } 
        if(isTop) setAwayBattersIndex(awayBattersIndex+1);
        if(!isTop) setHomeBattersIndex(homeBattersIndex+1);
    }
    const setTeamIndex = () => {
        return isTop ? awayBattersIndex : homeBattersIndex;
    }
    // 안타 카운터 상태
    const [hitsCnt, setHitsCnt] = useState(0);
    const [hitsAcc, setHistAcc] = useState([]);
    // 라운드 카운트
    const [roundCount, setRoundCount] = useState(1);
    // 초 말 상태
    const [isTop, setIsTop] = useState(true);
    const [strikeCnt, setStrikeCnt] = useState([]);
    const [ballCnt, setBallCnt] = useState([]);
    const [outCnt, setOutCnt] = useState([]);

    const [ballCount, setBallCount] = useState(0);
    const [ballHistory, setBallHistory] = useState([]);

    const [getScore, setGetScore] = useState(0);


    const [SBHistory, setSBHistory] = useState([]);

    const [pitchState, setPitchState] = useState(true);
    const [popup, setPopup] = useState("none");
    const [isHome, setIsHome] = useState(true);
    const ConvertPosition = () => {
        setPitchState(!pitchState);
    }
    // 첫 순서 결정
    const decidePlaySequence = () => {
        // consol
        if(playerData.awayTeamData.teamId === selectedTeamId) {
            setPitchState(false);
            setIsDefense(false);
        }
    }
    const [isDefense, setIsDefense] = useState(true);
    const [inningCount, setInningCount] = useState(0);
    // 초기 셋팅 값 다음의 회차 업데이트 작성 

    
    // 초말 바뀌면서 타자, 투수 데이터 전환
    const setBattersTeam = () => {
		return isTop ? 'awayTeamData': 'homeTeamData';
}
//     const setBasemanTeam = () => {
// 		return isTop ? awayBasemanState: homeBasemanState;
// }
    const setPitcherTeam = () => {
		return !isTop ? 'awayTeamData': 'homeTeamData';
}
    const createPitchResult = () => {
        const pitchArr = ['Strike', 'Ball', 'Strike','Strike','Strike','Strike', 'Hits', "Hits"];
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
                // console.log('안타');
                return setBallCount(ballCount+1)
            default:
                throw new Error();
        }
    }
    const addHits = () => {
        console.log('안타')
        setHitsCnt(hitsCnt + 1);
        addPlayerIndex();
        setTurnState(turnState + 1);
        if(awayBasemanState.length >= 3) {
            setInningCount(inningCount+1);
        }
        setAwayBasemanState([...awayBasemanState, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber])
        setChangeState(changeState +1);
    }
    const addStrike = () => {
        if(strikeCnt.length > 2) return;
        setStrikeCnt([...strikeCnt, {
            id: strikeCnt.length,
            value: 0
        }])
        setSBHistory([...SBHistory, '스트라이크']);
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
        setTurnState(turnState + 1);
        if(awayBasemanState.length >= 3) {
            setInningCount(inningCount+1);
        }
        setAwayBasemanState([...awayBasemanState, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber])
        setChangeState(changeState + 1)
        // setHitsCnt(0);
    }
    const setTurn = () => {
        setTurnState(-1);
        setIsDefense(!isDefense);
        if(isDefense) {
            setPitchState(false);
        }
        if(!isDefense) {
            setPitchState(true);
        }
        if(!isTop) setHomeScoreArr([...homeScoreArr, inningCount]);
        if(isTop) setAwayScoreArr([...awayScoreArr, inningCount]);
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
        if(ballCnt.length === 3) {
            addPlayerIndex();
            setTurnState(turnState + 1);
            if(awayBasemanState.length >= 3) {
                setInningCount(inningCount+1);
            }
            setAwayBasemanState([...awayBasemanState, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber])
            setChangeState(changeState+1);
            setTimeout(() => {
                setStrikeCnt([]);
                setBallCnt([]);
                return;
            }, 500)
        }
    }
    const [allHistory, setAllHistory] = useState([]);

        const createPitcherArr = () => {
            let pitchers = playerData[setPitcherTeam()].pitcher;
            let pitNum = `#${pitchers.playerNumber}`
            const pitcherArr = [pitchers.playerName, pitNum];
            return pitcherArr;
        }
        // const checkScoreCount = () => {
        //     if(awayBasemanState.length >= 5) {
        //         let getScore = [...awayBasemanState];
        //         getScore.splice(0,1);
        //         setAwayBasemanState(getScore);
        //     }
        //     return awayBasemanState.map((e, idx)=> (<BaseMainBox key={idx} active={idx}>{e}</BaseMainBox>));
        // }


    useEffect(() => {
        if(startState && playerData.awayTeamData.teamId === selectedTeamId){
            // if(playerData.awayTeamData.teamId === selectedTeamId) {
                setIsHome(false);
                setPitchState(false);
                setIsDefense(false);
                setStartState(false);
            // }
        }
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
        setBallHistory([...ballHistory, {
            id: ballHistory.length,
            strike: strikeCnt.length,
            ball: ballCnt.length,
            value: SBHistory[SBHistory.length-1]
        }])
    }, [ballCount]);

    useEffect(() => {
        console.log("어래이정보",homeScoreArr, awayScoreArr)
        let homeScoreTotal = homeScoreArr.reduce((acc, cur) => acc + cur, 0);
        let awayScoreTotal = awayScoreArr.reduce((acc, cur) => acc + cur, 0);
        scoreData = {
            home: {
              teamname: `${homeTeamData.teamName}`,
              scores: homeScoreArr,
              total: homeScoreTotal,
              playerPick: `${selectedTeamId === homeTeamData.teamId}`,
            },
            away: {
              teamname: `${awayTeamData.teamName}`,
              scores: awayScoreArr,
              total: awayScoreTotal,
              playerPick: `${selectedTeamId === awayTeamData.teamId}`,
            },
          };
        //   console.log(scoreData);
        // if(!isTop) setHomeScoreArr([...homeScoreArr, inningCount]);
        // if(isTop) setAwayScoreArr([...awayScoreArr, inningCount]);
        setInningCount(0);
        setAwayBasemanState([])
    }, [isTop]);


    useEffect(() => {
        if(outCnt.length === 3) {
            setAwayBasemanState([]);
            setTimeout(() => {
                setTurn();
                setOutCnt([]);
                // return;
            }, 500)
        }
        let site = 1;
        // console.log('안타 카운터 확인', hitsCnt);
        console.log('초말확인',isTop);
        if(awayBattersIndex >= 9) {
            setAwayBattersIndex(0);
        }
        if(homeBattersIndex >= 9) {
            setHomeBattersIndex(0);
        } 
        // setAwayBasemanState([...awayBasemanState, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber])
        setAllHistory([...allHistory, [
        ballHistory
        ]])
        setBallHistory([]);
        setBatterHistory([...batterHistory, {
            id: batterHistory.length,
            cnt: turnState,
            number: playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber,
            value: playerData[setBattersTeam()].batters[setTeamIndex()].playerName,
            hits: setHistAcc([...hitsAcc, hitsCnt])
        }])
        // setHitsCnt(0);
        if(awayBasemanState.length >= 4) {
            if(isTop) setAwayScore(awayScore + 1);
            if(!isTop) setHomeScore(homeScore + 1);
        }
        if(awayBasemanState.length >= 5) {
            let getScore = [...awayBasemanState];
            getScore.splice(0,1);
            setAwayBasemanState(getScore);
        }
        // if(!isTop) setAwayBasemanState([])
        // setAwayBasemanState([...awayBasemanState, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber])
    }, [changeState]);




    // useEffect(() => {
    //     if(awayBasemanState.length === 5)return;
    //     setAwayBasemanState([...awayBasemanState, playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber])
    // }, [isTop]);
    return (
        <GameContainer>
            <Top
        onMouseEnter={() => {
          setPopup("top");
        }}
      />
      <Bottom
        onMouseEnter={(e) => {
          setPopup("bottom");
        }}
      />
      {popup === "top" ? (
        <Fade popupPosition={"top"} setPopup={setPopup}>
            {/* 스코어 */}
          <CurrentScoreBox scoreData={scoreData} />
        </Fade>
      ) : popup === "bottom" ? (
        <Fade popupPosition={"bottom"} setPopup={setPopup}>
            {/* 안타 아웃 정보  */}
          <PlayerList />
        </Fade>
      ) : (
        ""
      )}
            <MatchContainer>
                <ScoreBox isHome={isHome}awayScore={awayScore} homeScore={homeScore}/>
                <GroundBox awayBasemanState={awayBasemanState} isDefense={isDefense} decidePlaySequence={decidePlaySequence} ConvertPosition={ConvertPosition} pitchState={pitchState} isTop={isTop} roundCount={roundCount} strikeCnt={strikeCnt} ballCnt={ballCnt} outCnt={outCnt} createPitchResult={createPitchResult} playerData={playerData}/>
            </MatchContainer>
            <PlayerContainer>
                <PlayerBox hitsAcc={hitsAcc} batterHistory={batterHistory} createPitcherArr={createPitcherArr} hitsCnt={hitsCnt}/>
                <PlayerDetailBox allHistory={allHistory} ballHistory={ballHistory} batterHistory={batterHistory}/>
            </PlayerContainer>
        </GameContainer>
    );
}
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
const Top = styled.div`
  position: absolute;
  top: 0;
  z-index: 8888;
  width: 100%;
  height: 50px;
`;
const Bottom = styled.div`
  position: absolute;
  z-index: 8888;
  bottom: 0;
  width: 100%;
  height: 50px;
`;
export default GameMainBox;