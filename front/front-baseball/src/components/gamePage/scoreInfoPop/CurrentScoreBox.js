import React from "react";
import styled, { keyframes } from "styled-components";
const INNING_COUNT = Array.from({ length: 12 }, (_, i) => i + 1);
function CurrentScoreBox() {
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
        {isPlayer && (
          <div
            style={{ fontSize: "1.2rem", color: "red", marginTop: "0.3rem" }}
          >
            player
          </div>
        )}
      </TeamName>
    );
  };
  return (
    <CurrentScoreBoxWrapper
      onClick={(e) => {
        console.log(e.target);
      }}
    >
      <ScoreBox>
        {renderRow("", INNING_COUNT, "R")}
        <hr />
        {renderRow("Captain", [1, 0, 0, 2], 3, true)}
        {renderRow("Marvel", [0, 0, 2], 2)}
      </ScoreBox>
    </CurrentScoreBoxWrapper>
  );
}
const show = keyframes`
    0%{
        transform : translateY(-100%)
    }
    100%{
        transfrom : translateY(0)
    }
`;
const fadeIn = keyframes`
    0%{
        background: rgba(0, 0, 0, 0);
    }
    100%{
        background: rgba(0, 0, 0, 0.7);
    }
`;
const CurrentScoreBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  animation: ${fadeIn} 2s forwards;
  text-align: center;
`;

const ScoreBox = styled.div`
  display: inline-block;
  border: 2px solid white;
  margin: 0 auto;
  padding: 2rem 7rem;
  color: white;
  font-size: 2rem;
  animation: ${show} 1s;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const TeamName = styled.div`
  min-width: 10rem;
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
