import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
const INNING_COUNT = Array.from({ length: 12 }, (_, i) => i + 1);
function CurrentScoreBox() {
  const [show, setShow] = useState(true);
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
        if (e.target === e.currentTarget) {
          setShow(false);
        }
      }}
      show={show}
    >
      <ScoreBox show={show}>
        {renderRow("", INNING_COUNT, "R")}
        <hr />
        {renderRow("Captain", [1, 0, 0, 2], 3, true)}
        {renderRow("Marvel", [0, 0, 2], 2)}
      </ScoreBox>
    </CurrentScoreBoxWrapper>
  );
}
const slideDown = keyframes`
    from{
        transform : translateY(-150%)
    }
    to{
        transform : translateY(0)
    }
`;
const slideUp = keyframes`
    from{
        transform : translateY(0)
    }
    to{
        transform : translateY(-150%)
    }
`;

const fadeIn = keyframes`
    from{
        background: rgba(0, 0, 0, 0);
    }
    to{
        background: rgba(0, 0, 0, .7);
    }
`;
const fadeOut = keyframes`
    from{
        background: rgba(0, 0, 0, .7);
    }
    to{
        background: rgba(0, 0, 0, 0);
    }
`;
const CurrentScoreBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 1.5s forwards cubic-bezier(0.33, 1, 0.68, 1);
  text-align: center;
`;

const ScoreBox = styled.div`
  display: inline-block;
  border: 2px solid white;
  margin: 0 auto;
  padding: 2rem 7rem;
  color: white;
  font-size: 2rem;
  animation: ${({ show }) => (show ? slideDown : slideUp)} 1.5s forwards cubic-bezier(0.33, 1, 0.68, 1);
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
