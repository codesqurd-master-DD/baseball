import styled, { css } from "styled-components";
import { getGameData } from "../../utils/fetchFns.js";
import { MESSAGE } from "../../utils/constant.js";
import React from "react";
const Game = ({ gameId, home, away, setMessage, history, setLoading }) => {
  const requestTeamDate = async (teamId) => {
    try {
      setLoading(true);
      const response = await getGameData(gameId, teamId);
      return response;
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  const onSelectTeam = async (teamId) => {
    const { isSelected, homeTeamData, awayTeamData } = await requestTeamDate(
      teamId
    );

    if (isSelected) {
      setMessage(MESSAGE.ALREADY_SELECTED);
    } else {
      history.push({
        pathname: "/game",
        state: {
          homeTeamData,
          awayTeamData,
          selectedTeamId: teamId
        },
      });
    }
  };
  return (
    <GameWrapper>
      <GameTitle>GAME {gameId}</GameTitle>
      <GameBody>
        <TeamName
          selected={away.selected}
          onClick={() => {
            if (away.selected) return;
            onSelectTeam(away.teamId);
          }}
        >
          {away.teamName}
        </TeamName>
        <div style={{ fontSize: "1.5rem" }}>VS</div>
        <TeamName
          selected={home.selected}
          onClick={() => {
            if (home.selected) return;
            onSelectTeam(home.teamId);
          }}
        >
          {home.teamName}
        </TeamName>
      </GameBody>
    </GameWrapper>
  );
};

const GameWrapper = styled.div`
  background-color: rgb(180, 180, 180);
  padding: 1rem 0;
  border-radius: 0.5rem;
  & + & {
    margin-top: 1rem;
  }
`;
const GameTitle = styled.h3`
  text-align: center;
  font-size: 1rem;
  color: red;
`;
const GameBody = styled.div`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
`;
const TeamName = styled.div`
  flex: 1;
  font-size: 2rem;
  text-align: center;

  ${({ selected }) =>
    selected
      ? css`
          color: red;
        `
      : css`
          &:hover {
            color: blue;
          }
        `}
`;

export default React.memo(Game);
