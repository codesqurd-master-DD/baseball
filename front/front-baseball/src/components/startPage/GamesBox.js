import { useState, useRef, useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { MESSAGE } from "../../utils/constant.js";
import { useInfiniteScroll } from "../../utils/hooks.js";
import { dummyFetchGames } from "../../utils/fetchFns.js";
import Game from "./Game";

const GamesBox = ({ history }) => {
  const [gameList, setGameList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState([MESSAGE.INIT]);
  const rootRef = useRef();
  const targetRef = useRef();

  const requestNewGames = useCallback(async () => {
    try {
      setLoading(true);
      const newGames = await dummyFetchGames();
      return newGames;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const initialGameList = useCallback(async () => {
    const newGames = await requestNewGames();
    setGameList(newGames);
  }, [requestNewGames]);

  const loadMoreGames = useCallback(async () => {
    const newGames = await requestNewGames();
    setGameList((games) => [...games, ...newGames]);
  }, [requestNewGames]);

  useInfiniteScroll({
    root: rootRef.current,
    target: targetRef.current,
    onIntersect: ([{ isIntersecting }]) => {
      if (isIntersecting && !loading) {
        loadMoreGames();
      }
    },
  });

  useEffect(() => {
    if (gameList.length < 1) {
      initialGameList();
    }
  });

  return (
    <MenuWrapper>
      <MessageBox>{message}</MessageBox>
      <GamesContainer>
        <Games ref={rootRef}>
          {gameList.map((game) => (
            <Game {...game} history={history} setMessage={setMessage} />
          ))}
          <div ref={targetRef}>{error && <ErrorView />}</div>
        </Games>
        {loading && (
          <LoadingView>
            <LoadingCircle />
          </LoadingView>
        )}
      </GamesContainer>
    </MenuWrapper>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`;

const LoadingView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  font-size: 3rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 500px;
`;

const LoadingCircle = styled.div`
  background-color: transparent;
  border: 10px solid transparent;
  border-top: 10px solid rgba(189, 215, 60);
  width: 100px;
  height: 100px;
  border-radius: 100px;
  animation: ${rotate} 1s infinite linear;
`;
const ErrorView = styled.div``;
const MenuWrapper = styled.div`
  margin-top: 1rem;
  width: 30%;
`;
const MessageBox = styled.div`
  text-align: center;
  color: white;
  margin: 3rem 0;
  font-size: 2rem;
`;
const GamesContainer = styled.div`
  position: relative;
`;
const Games = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default GamesBox;
