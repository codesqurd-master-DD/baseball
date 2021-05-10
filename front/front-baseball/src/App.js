import "./App.css";
import GameMainBox from "./components/gamePage/gameView/GameMainBox";
import StartPage from "./components/startPage/StartPage";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={StartPage} exact />
        <Route path="/game" component={GameMainBox} />
      </Switch>
    </>
  );
}
export default App;
