import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Create from "./components/create/create";
import Details from "./components/details/details";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/details/:id" component={Details}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
