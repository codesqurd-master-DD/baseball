import styled, { css } from "styled-components";
const Game = ({ gameId, home, away }) => {
  return (
    <GameWrapper>
      <GameTitle>GAME {gameId}</GameTitle>
      <GameBody>
        <TeamName
          selected={away.selected}
          onClick={() => {
            if (away.selected) return;
            requestTeamDate(away.teamId);
          }}
        >
          {away.teamName}
        </TeamName>
        <div style={{ fontSize: "1.5rem" }}>VS</div>
        <TeamName
          selected={home.selected}
          onClick={() => {
            if (home.selected) return;
            requestTeamDate(home.teamId);
          }}
        >
          {home.teamName}
        </TeamName>
      </GameBody>
    </GameWrapper>
  );
};
const requestTeamDate = async (teamId) => {
  const { isSelected, homeTeamData, awayTeamData } = await dummyFetchIsSelected(
    teamId
  );
  if (isSelected) {
    console.log("이미 선택된 팀");
  } else {
    console.log("선택 안 됨");
    console.log(homeTeamData);
    console.log(awayTeamData);
  }
};
const dummyFetchIsSelected = (teamId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomBoolean = Math.random() < 0.5;
      if (randomBoolean) {
        resolve({
          isSelected: true,
        });
      } else {
        resolve({
          isSelected: false,
          homeTeamData: {
            teamId: 1,
            teamName: "Rockets",
            pitcher: {
              playerId: "player-0",
              playerNumber: "number-0",
              playerName: "류현진",
            },
            batters: [
              {
                playerId: "player-1",
                playerNumber: "number-1",
                playerName: "DD",
              },
              {
                playerId: "player-2",
                playerNumber: "number-2",
                playerName: "Woody",
              },
              {
                playerId: "player-2",
                playerNumber: "number-2",
                playerName: "Luke",
              },
            ],
          },
          awayTeamData: {
            teamId: 2,
            teamName: "Captain",
            pitcher: {
              playerId: "player-0",
              playerNumber: "number-0",
              playerName: "박찬호",
            },
            batters: [
              {
                playerId: "player-1",
                playerNumber: "number-1",
                playerName: "Q",
              },
              {
                playerId: "player-2",
                playerNumber: "number-2",
                playerName: "Seong",
              },
              {
                playerId: "player-3",
                playerNumber: "number-4",
                playerName: "Json",
              },
            ],
          },
        });
      }
    }, 1500);
  });
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

export default Game;
