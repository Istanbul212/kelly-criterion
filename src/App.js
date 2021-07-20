import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Game from "./pages/Game";

import Landing from "./pages/Landing"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/kelly-criterion/" exact>
          <Landing />
        </Route>
        <Route path="/kelly-criterion/:difficulty/:time">
          <Game />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
