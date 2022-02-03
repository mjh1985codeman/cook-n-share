import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SavedCreations from "./components/SavedCreations";
import Browse from "./components/Browse";
import UserCreations from "./components/UserCreations";
import NewCreation from "./components/NewCreation";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/Saved" component={SavedCreations} />
            <Route exact path="/Creations" component={UserCreations} />
            <Route exact path="/Browse" component={Browse} />
            <Route
              exact
              path="/Creations/NewCreation"
              component={NewCreation}
            />
            <Route
              render={() => (
                <h1 className="display-2">
                  Oh My. . .You're lost. Try not to make up url routes because
                  you have no idea where you'll end up! Play it safe and click
                  on a link in the NavBar to get back on track.
                </h1>
              )}
            />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
