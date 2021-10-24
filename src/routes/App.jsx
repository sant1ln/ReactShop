import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Checkout from "../pages/Checkout";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import RecoveryPassword from "../pages/RecoveryPassword";
import SendEmail from "../pages/SendEmail";

const App = () => {
  const initalState = useInitialState()
  return (
    <AppContext.Provider value={initalState} >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/password-recovery"
              component={RecoveryPassword}
            />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/signup" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
