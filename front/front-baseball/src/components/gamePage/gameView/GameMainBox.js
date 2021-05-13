import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import GroundBox from "./GroundBox";
import ScoreBox from "./ScoreBox";
import PlayerBox from "./PlayerBox";
import PlayerDetailBox from "./PlayerDetailBox"
import Fade from "../Fade";
import CurrentScoreBox from "../scoreInfoPop/CurrentScoreBox";
import PlayerList from "../playerDtailInfoPop/PlayerList";


const GameMainBox = ({location}) => {
    console.log('로케',location)
    const playerData = location.state;
    const {homeTeamData, awayTeamData, selectedTeamId} = playerData

    // 루수에대한 배열 상태 -> 4개의 배열상태를 만들어 최신화 하면서 마지막 배열이 1일때 카운터 증가
    const [awayBasemanState, setAwayBasemanState] = useState([]);
    const [homeBasemanState, setHomeBasemanState] = useState([]);
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


    const addPlayerIndex = () => {
        // setHitsCnt(0)
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
    const ConvertPosition = () => {
        setPitchState(!pitchState);
    }
    // 첫 순서 결정
    const decidePlaySequence = () => {
        // consol
        // if(playerData.awayTeamData.teamId === selectedTeamId) {
        //     setPitchState(false);
        //     setIsDefense(false);
        // }
    }
    const [isDefense, setIsDefense] = useState(true);
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
        if(awayBasemanState.length >= 5) {
            if(isTop) setAwayScore(awayScore + 1);
            if(!isTop) setHomeScore(homeScore + 1);
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
          <CurrentScoreBox />
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
                <ScoreBox awayScore={awayScore} homeScore={homeScore}/>
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