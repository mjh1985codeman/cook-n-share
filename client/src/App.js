import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SavedRecipes from "./components/SavedRecipes";
import Search from "./components/Search";
import YourCreations from "./components/YourCreations";

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
            <Route exact path="/Saved" component={SavedRecipes} />
            <Route exact path="/Creations" component={YourCreations} />
            <Route exact path="/Search" component={Search} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
