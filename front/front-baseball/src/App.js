import "./App.css";
import GameMainBox from "./components/gamePage/gameView/GameMainBox";
import StartPage from "./components/startPage/StartPage";
import { Route, Switch } from "react-router-dom";
import TestView from "./components/gamePage/TestView";
function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/" component={TestView} exact /> */}
        <Route path="/" component={StartPage} exact />
        <Route path="/game" component={GameMainBox} />
      </Switch>
       {/* <GameMainBox/> */}
    </>
  );
}
export default App;
