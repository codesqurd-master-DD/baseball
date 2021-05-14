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

    const playerData = location.state;
    const {homeTeamData, awayTeamData, selectedTeamId} = playerData;

    let initScoreData = {
        home: {
          teamname: `${homeTeamData.teamName}`,
          playerPick: `${selectedTeamId === homeTeamData.teamId}`,
        },
        away: {
          teamname: `${awayTeamData.teamName}`,
          playerPick: `${selectedTeamId === awayTeamData.teamId}`,
        },
      };
 const [scoreData, setScoreData]= useState(initScoreData)

    const [awayBasemanState, setAwayBasemanState] = useState([]);
    const [homeScoreArr, setHomeScoreArr] = useState([]);
    const [awayScoreArr, setAwayScoreArr] = useState([]);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [homeBattersIndex, setHomeBattersIndex] = useState(0);
    const [awayBattersIndex, setAwayBattersIndex] = useState(0);
    const [batterHistory, setBatterHistory] = useState([]);
    const [turnState, setTurnState] = useState(0);
    const [changeState, setChangeState] = useState(0);
    const [startState, setStartState] = useState(true);
    const [hitsCnt, setHitsCnt] = useState(0);
    const [hitsAcc, setHistAcc] = useState([]);
    const [roundCount, setRoundCount] = useState(1);
    const [isTop, setIsTop] = useState(true);
    const [strikeCnt, setStrikeCnt] = useState([]);
    const [ballCnt, setBallCnt] = useState([]);
    const [outCnt, setOutCnt] = useState([]);
    const [ballCount, setBallCount] = useState(0);
    const [ballHistory, setBallHistory] = useState([]);
    const [SBHistory, setSBHistory] = useState([]);
    const [pitchState, setPitchState] = useState(true);
    const [popup, setPopup] = useState("none");
    const [isHome, setIsHome] = useState(true);
    const [isDefense, setIsDefense] = useState(true);
    const [inningCount, setInningCount] = useState(0);
    const [allHistory, setAllHistory] = useState([]);

    const addPlayerIndex = () => {
        if(isTop) setAwayBattersIndex(awayBattersIndex+1);
        if(!isTop) setHomeBattersIndex(homeBattersIndex+1);
    }
    const setTeamIndex = () => {
        return isTop ? awayBattersIndex : homeBattersIndex;
    }
    const ConvertPosition = () => {
        setPitchState(!pitchState);
    }
    const decidePlaySequence = () => {
        if(playerData.awayTeamData.teamId === selectedTeamId) {
            setPitchState(false);
            setIsDefense(false);
        }
    }
    const setBattersTeam = () => {
		return isTop ? 'awayTeamData': 'homeTeamData';
}
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
                return setBallCount(ballCount+1)
            default:
                throw new Error();
        }
    }
    const addHits = () => {
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
    const createPitcherArr = () => {
        let pitchers = playerData[setPitcherTeam()].pitcher;
        let pitNum = `#${pitchers.playerNumber}`
        const pitcherArr = [pitchers.playerName, pitNum];
        return pitcherArr;
    }

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
        let homeScoreTotal = homeScoreArr.reduce((acc, cur) => acc + cur, 0);
        let awayScoreTotal = awayScoreArr.reduce((acc, cur) => acc + cur, 0);
        setScoreData({
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
        })
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
        if(awayBattersIndex >= 6) {
            setAwayBattersIndex(0);
        }
        if(homeBattersIndex >= 6) {
            setHomeBattersIndex(0);
        } 
        setAllHistory([...allHistory, [
        ballHistory
        ]])
        setBatterHistory([...batterHistory, {
            id: batterHistory.length,
            cnt: turnState,
            number: playerData[setBattersTeam()].batters[setTeamIndex()].playerNumber,
            value: playerData[setBattersTeam()].batters[setTeamIndex()].playerName,
            hits: setHistAcc([...hitsAcc, hitsCnt])
        }])
        if(awayBasemanState.length >= 4) {
            if(isTop) setAwayScore(awayScore + 1);
            if(!isTop) setHomeScore(homeScore + 1);
        }
        if(awayBasemanState.length >= 5) {
            let getScore = [...awayBasemanState];
            getScore.splice(0,1);
            setAwayBasemanState(getScore);
        }
    }, [changeState]);

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
          <CurrentScoreBox scoreData={scoreData} />
        </Fade>
      ) : popup === "bottom" ? (
        <Fade popupPosition={"bottom"} setPopup={setPopup}>
          <PlayerList />
        </Fade>
      ) : (
        ""
      )}
            <MatchContainer>
                <ScoreBox isHome={isHome} awayScore={awayScore} homeScore={homeScore} homeName={scoreData.home.teamname} awayName={scoreData.away.teamname}/>
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