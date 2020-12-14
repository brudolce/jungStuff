import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
