import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FadeWrapper, SlideBox } from "../animation";
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
  const onTransitionEnd = () => {
    if (!show) {
      // 이 컴포넌트를 unmount하는 함수(부모에게 받기)
    }
  };
  return (
    <FadeWrapper
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShow(false);
        }
      }}
      show={show}
    >
      <SlideBox show={show} from={-150} to={0}>
        <ScoreBox>
          {renderRow("", INNING_COUNT, "R")}
          <hr />
          {renderRow("Captain", [1, 0, 0, 2], 3, true)}
          {renderRow("Marvel", [0, 0, 2], 2)}
        </ScoreBox>
      </SlideBox>
    </FadeWrapper>
  );
}

const ScoreBox = styled.div`
  display: inline-block;
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
