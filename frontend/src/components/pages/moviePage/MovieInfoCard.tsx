// @ts-nocheck
import React, { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { useHistory } from 'react-router-dom';
import { CenterElements } from '../../shared/CenterElements';
import Card from '../../shared/card';
import MovieInfoContent from '../../shared/movieInfoContent';
import { SearchedAddButton } from '../searchedItems/SearchedItemsElements';
import Button from '../../shared/button';
import { MovieContentWrapper, MovieDataColumn } from './MoviepageElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMoviesContext, Movie } from '../../../frontEndTypes';

const MovieInfoCard = (): React.ReactElement => {
  const {
    singleMovie,
    ratedMovies,
    favoriteMovies,
    removeFromRated,
    removeFromFavorites,
    user,
    addToFavorites,
    addToRated,
  } = useContext(MoviesContext) as IMoviesContext;
  let single;
  const isAddedRated = (id: number) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mov of ratedMovies) {
      if (mov.id === singleMovie.id) return true;
    }
    return false;
  };
  const history = useHistory();
  const redirectToHome = () => {
    history.goBack();
  };
  const isAdded = (id: number) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const mov of favoriteMovies) {
      if (mov.id === singleMovie.id) return true;
    }
    return false;
  };
  const clearRating = (userId: string, movie_id: number) => {
    removeFromRated(userId, movie_id);
  };
  const clearFavorite = (id: number) => {
    removeFromFavorites(user.user_id, id);
  };
  const handleRating = (rate: number) => {
    addToRated(user.user_id, singleMovie.id, rate / 10);
  };
  const isLogin = (user_id: string) => {
    if (user_id === undefined || user_id.length === 0) return false;
    return user_id.length > 0;
  };
  const handleFavMovie = (movieId: number) => {
    addToFavorites(user.user_id, movieId);
  };
  return (
    <CenterElements>
      <Card width="100%" height="auto" margin="1rem">
        <MovieContentWrapper>
          <MovieInfoContent data={singleMovie} />
          <MovieDataColumn>
            <SearchedAddButton
              onClick={() => handleFavMovie(singleMovie.id)}
              disabled={isAdded(singleMovie.id) || !isLogin(user.user_id)}
            >
              {!isAdded(singleMovie.id) ? 'Add to favorites' : 'Added to favorites'}
            </SearchedAddButton>
            <SearchedAddButton
              onClick={() => clearFavorite(singleMovie.id)}
              disabled={!isAdded(singleMovie.id) || !isLogin(user.user_id)}
            >
              Remove from favorites
            </SearchedAddButton>
            <SearchedAddButton
              onClick={() => clearRating(user.user_id, singleMovie.id)}
              disabled={!isAddedRated(singleMovie.id) || !isLogin(user.user_id)}
            >
              Clear User Rating
            </SearchedAddButton>
            <div className="App">
              <Rating
                onClick={handleRating}
                iconsCount={10}
                initialValue={isAddedRated(singleMovie.id) ? singleMovie.user_rating * 10 : 0}
                ratingValue={singleMovie.user_rating * 10}
                allowHalfIcon /* Available Props */
                readonly={isAddedRated(singleMovie.id) || !isLogin(user.user_id)}
              />
            </div>
            <Button
              margin="1rem 3rem"
              bg="var(--color-danger)"
              fontSize="15px"
              width="150px"
              height="2rem"
              clicked={redirectToHome}
            >
              Close
            </Button>
          </MovieDataColumn>
        </MovieContentWrapper>
      </Card>
    </CenterElements>
  );
};

export default MovieInfoCard;
