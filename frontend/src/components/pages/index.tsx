import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import Login from './login';
import Favorites from './favorites';
import Rated from './rated';
import SearchedItems from './searchedItems';
import MoviePage from './moviePage';
import Register from './register';
import NotFound from './notFoundPage';
import SearchQuery from './searchQuery';
import Setting from './settings';
import ViewHistory from './viewHistory';
import LikeActor from './LikeActor';
import ReviewHistory from './reviewHistory';
import CastPage from './castPage';

const Routes = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/rated" component={Rated} />
      <Route path="/movie" component={MoviePage} />
      <Route path="/cast" component={CastPage} />
      <Route path="/searched-items" component={SearchedItems} />
      <Route path="/searchQuery" component={SearchQuery} />
      <Route path="/settings" component={Setting} />
      <Route path="/likeActor" component={LikeActor} />
      <Route path="/viewHistory" component={ViewHistory} />
      <Route path="/reviewHistory" component={ReviewHistory} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
