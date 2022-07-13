import React, { useContext } from 'react';

import { Title } from '../../shared/TextElements';
import FavoritesCardBoard from './ReviewCardBoard';
import { FavoritesBackground } from './ReviewElements';
import { Background } from '../../shared/Background';
import { MoviesContext } from '../../../contexts/MoviesContext';
import NoResults from '../../shared/noResults';
import cover from '../../../assets/backgroundImages/doctor_strange.jpg';
import { IMoviesContext } from '../../../frontEndTypes';

const ReviewHistory = (): React.ReactElement => {
  const { reviewedMovies } = useContext(MoviesContext) as IMoviesContext;
  const noLogin = (
    <NoResults cover={cover}>
      <Title>Please login first.</Title>
    </NoResults>
  );
  const noReviews = (
    <NoResults cover={cover}>
      <Title>You do not have any reviews.</Title>
      <Title>Add some🙂</Title>
    </NoResults>
  );
  const { user } = useContext(MoviesContext) as IMoviesContext;
  const showFavorites = (
    <FavoritesBackground>
      <FavoritesCardBoard />
    </FavoritesBackground>
  );
  if (user.user_id === undefined || user.user_id.length === 0) {
    return noLogin;
  }
  return <>{reviewedMovies.length === 0 ? noReviews : showFavorites}</>;
};

export default ReviewHistory;
