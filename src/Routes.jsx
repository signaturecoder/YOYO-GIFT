import React, { useState } from 'react';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import Header from './containers/Header';
import GiftCardList from './containers/GiftCardList';
import SubHeader from './containers/SubHeader';
import AddBalance from './containers/AddBalance';
import LoginForm from './containers/LoginForm';
import SocialLogin from './containers/SocialLogin';

const Routes = props => {
  const [search, setSearch] = useState('');
  const setSearchAsState = input => {
    setSearch(input);
  };

  return (
    <Router>
      <Header setInput={setSearchAsState} />
      <SubHeader />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <HomePage {...props} searchValue={search} />}
        />
        <Route path="/login" component={LoginForm} />
        <Route path="/socialLogin" component={SocialLogin} />
        <PrivateRoute path="/addBalance" component={AddBalance} />
        <Route path="/giftCard/:id" component={GiftCardList} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

// Hoc For Protecting the route... it takes a component and returns a component
//It renders a <Route /> and passes all the props through to it.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      sessionStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);
