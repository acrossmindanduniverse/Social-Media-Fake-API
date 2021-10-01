import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import UserList from './pages/UserList';
import AnotherUser from './pages/AnotherUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Explore} />
        <Route path="/profile" component={Profile} />
        <Route path="/users" component={UserList} />
        <Route path="/another-user" component={AnotherUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
