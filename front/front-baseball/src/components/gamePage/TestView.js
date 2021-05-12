import { useState } from "react";
import styled from "styled-components";
import Fade from "./Fade";
import PlayerList from "./playerDtailInfoPop/PlayerList";
import CurrentScoreBox from "./scoreInfoPop/CurrentScoreBox";

function TestView() {
  const [test] = useState(false);
  return (
    <TestWrapper>
      {test ? (
        <Fade popupPosition={"top"}>
          <CurrentScoreBox />
        </Fade>
      ) : (
        <Fade popupPosition={"bottom"}>
          <PlayerList />
        </Fade>
      )}
    </TestWrapper>
  );
}

const TestWrapper = styled.div``;

export default TestView;
