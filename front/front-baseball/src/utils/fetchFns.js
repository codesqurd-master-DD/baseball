export const dummyFetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DUMMY_DATA.games);
    }, 2000);
  });
};

export const dummyFetchSelectedGame = (teamId, flag) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomBoolean = Math.random() < 0.5;
      if (flag) {
        resolve({
          isSelected: true,
        });
      } else {
        resolve({
          isSelected: false,
          homeTeamData: DUMMY_DATA.homeTeamData,
          awayTeamData: DUMMY_DATA.awayTeamData,
        });
      }
    }, 1500);
  });
};

const DUMMY_DATA = {
  games: [
    {
      gameId: 1,
      home: {
        teamId: "team-1",
        teamName: "Captain",
        selected: false,
      },
      away: {
        teamId: "team-2",
        teamName: "Mavel",
        selected: false,
      },
    },
    {
      gameId: 2,
      home: {
        teamId: "team-3",
        teamName: "Twins",
        selected: false,
      },
      away: {
        teamId: "team-4",
        teamName: "Tigers",
        selected: true,
      },
    },
    {
      gameId: 3,
      home: {
        teamId: "team-5",
        teamName: "Rockets",
        selected: false,
      },
      away: {
        teamId: "team-6",
        teamName: "Dodgers",
        selected: false,
      },
    },
    {
      gameId: 4,
      home: {
        teamId: "team-7",
        teamName: "Rocketsdd",
        selected: false,
      },
      away: {
        teamId: "team-8",
        teamName: "Dodgersad",
        selected: false,
      },
    },
  ],
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
};
