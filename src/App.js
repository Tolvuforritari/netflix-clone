import React from "react";
import "./css/Main.css";
import Main from "./pages/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
