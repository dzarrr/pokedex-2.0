import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Bookmark from "./pages/Bookmark";
import Compare from "./pages/Compare";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:pokemon">
          <Detail />
        </Route>
        <Route path="/bookmark">
          <Bookmark />
        </Route>
        <Route path="/compare">
          <Compare />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
