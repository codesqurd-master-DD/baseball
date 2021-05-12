import styled, { css } from "styled-components";
const DUMMY = {
  home: {
    teamname: "Captain",
    isPlayer: true,
    players: [
      {
        playername: "김광진",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "DD",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Woody",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Luke",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
        current: true,
      },
      {
        playername: "Json",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Neis",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Adela",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Seong",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Junami",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
    ],
  },
  away: {
    teamname: "Marvel",
    isPlayer: false,
    players: [
      {
        playername: "김광진",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "DD",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Woody",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Luke",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Json",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
        current: true,
      },
      {
        playername: "Neis",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Adela",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Seong",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
      {
        playername: "Junami",
        number: 1,
        hit: 1,
        out: 1,
        fourBall: 1,
        average: "1.000",
      },
    ],
  },
};

function PlayerList() {
  const renderTeam = (team) => {
    const { teamname, players, isPlayer } = team;
    return (
      <TeamBox>
        <TeamName>
          <h3>{teamname}</h3>
          {isPlayer && <div>player</div>}
        </TeamName>
        <hr />
        {renderRow({
          playername: "타자",
          number: "타석",
          hit: "안타",
          out: "아웃",
          fourBall: "포볼",
          average: "평균",
          color: "#e4e4e4",
        })}
        <hr />

        {players.map((player) => {
          return renderRow({ ...player, hr: true });
        })}
        {renderRow({
          playername: "Total",
          number: 9,
          hit: 4,
          out: 5,
          fourBall: 4,
          bold: true,
        })}
      </TeamBox>
    );
  };
  const renderRow = ({
    playername,
    number,
    hit,
    out,
    fourBall,
    average,
    hr = false,
    color = "white",
    bold = false,
    current = false,
  }) => {
    return (
      <Row {...{ color, bold, current, hr }}>
        <Name>{playername}</Name>
        <Record>
          <div>{number}</div>
          <div>{hit}</div>
          <div>{out}</div>
          <div>{fourBall}</div>
        </Record>
        <Result>{average}</Result>
      </Row>
    );
  };
  return (
    <PlayerListBox>
      {renderTeam(DUMMY.home)}
      {renderTeam(DUMMY.away)}
    </PlayerListBox>
  );
}
const PlayerListBox = styled.div`
  display: flex;
  border: 2px solid white;
  color: white;
`;
const TeamBox = styled.div`
  & + & {
    border-left: 1px solid white;
  }
`;
const TeamName = styled.div`
  position: relative;
  & > h3 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  & > div {
    color: red;
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translateY(-50%);
  }
`;
const Row = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  ${({ color, bold, current, hr }) =>
    css`
      color: ${current ? "red" : color};
      font-weight: ${bold ? "600" : "nomal"};
      border-bottom: ${hr ? "1px solid white" : "none"};
    `}
`;
const Name = styled.div`
  min-width: 8rem;
`;
const Record = styled.div`
  display: flex;
  flex: 1;
  & > div {
    flex: 1;
    min-width: 5rem;
  }
`;
const Result = styled.div`
  min-width: 8rem;
`;
export default PlayerList;
