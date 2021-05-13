import styled from "styled-components";

const INNING_COUNT = Array.from({ length: 12 }, (_, i) => i + 1);
const DUMMY = {
  home: {
    teamname: "captain",
    scores: [1, 1, 2, 3],
    total: 7,
    playerPick: true,
  },
  away: {
    teamname: "marvel",
    scroes: [0, 0, 0],
    playerPick: false,
    total: 0,
  },
};

function CurrentScoreBox({scoreData}) {
  const renderRow = (teamname, scores, result, isPlayer = false) => {
    return (
      <Row>
        {renderTeamName(teamname, isPlayer)}
        <Scores>
          {scores.map((num) => (
            <div>{num}</div>
          ))}
        </Scores>
        <Result>
          <div>{result}</div>
        </Result>
      </Row>
    );
  };

  const renderTeamName = (teamname, isPlayer = false) => {
    return (
      <TeamName>
        <div>{teamname}</div>
        {isPlayer && <div>player</div>}
      </TeamName>
    );
  };
  const onAnimationEnd = () => {
    console.log("test");
    // i(!show) 현재 컴포넌트 삭제 setState 함수 받기
  };
  return (
    <ScoreBox onAnimationEnd={onAnimationEnd}>
      {renderRow("", INNING_COUNT, "R")}
      <hr />
      {renderRow("Captain", [1, 0, 0, 2], 3, true)}
      {renderRow("Marvel", [0, 0, 2], 2)}
    </ScoreBox>
  );
}

const ScoreBox = styled.div`
  border: 2px solid white;
  margin: 0 auto;
  padding: 2rem 7rem;
  color: white;
  font-size: 2rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const TeamName = styled.div`
  min-width: 10rem;
  & > div::nth-last-child() {
    font-size: 1.2rem;
    color: red;
    margin-top: 0.3rem;
  }
`;
const Scores = styled.div`
  flex: 1;
  display: flex;
  & div {
    width: 4rem;
    text-align: center;
  }
`;
const Result = styled.div`
  width: 4rem;
  text-align: center;
`;

export default CurrentScoreBox;
