import styled from "styled-components";
import GamesBox from "./GamesBox";

const StartPage = ({ history }) => {
  return (
    <StartPageWrapper>
      <Title>BASEBALL GAME ONLINE</Title>
      <GamesBox history={history} />
    </StartPageWrapper>
  );
};

const Title = styled.h1`
  font-size: 4rem;
  margin: 2rem 0;
  color: white;
`;
const StartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StartPage;
