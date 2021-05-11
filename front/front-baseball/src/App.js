import "./App.css";
import GameMainBox from "./components/gamePage/gameView/GameMainBox";
import StartPage from "./components/startPage/StartPage";
import { Route, Switch } from "react-router-dom";
import CurrentScoreBox from "./components/gamePage/scoreInfoPop/CurrentScoreBox";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={CurrentScoreBox} exact />
        {/* <Route path="/" component={StartPage} exact /> */}
        <Route path="/game" component={GameMainBox} />
      </Switch>
    </>
  );
}
export default App;
