// @ts-nocheck
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CenterElements } from '../../shared/CenterElements';
import Card from '../../shared/card';
import PeopleInfoContent from '../../shared/peopleInfoContent';
import { SearchedAddButton } from '../searchQuery/SearchedItemsElements';
import Button from '../../shared/button';
import { MovieContentWrapper, MovieDataColumn } from './MoviepageElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMoviesContext, Movie } from '../../../frontEndTypes';

const CastInfoCard = (): React.ReactElement => {
  const { singleCast, favoriteCasts, removeFromFavoriteCasts, user, addFavoriteCast } = useContext(
    MoviesContext
  ) as IMoviesContext;

  const history = useHistory();
  const redirectToHome = () => {
    history.goBack();
  };

  const isAdded = (id: number) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const cast of favoriteCasts) {
      if (cast.id === singleCast.id) return true;
    }
    return false;
  };

  const clearFavorite = (id: number) => {
    removeFromFavoriteCasts(user.user_id, id);
  };
  const isLogin = (user_id: string) => {
    if (user_id === undefined || user_id.length === 0) return false;
    return user_id.length > 0;
  };
  const handleFavActor = (movieId: number) => {
    addFavoriteCast(user.user_id, movieId);
  };
  return (
    <CenterElements>
      <Card width="100%" height="auto" margin="1rem">
        <MovieContentWrapper>
          <PeopleInfoContent data={singleCast} />
          <MovieDataColumn>
            <SearchedAddButton
              onClick={() => handleFavActor(singleCast.id)}
              disabled={isAdded(singleCast.id) || !isLogin(user.user_id)}
            >
              {!isAdded(singleCast.id) ? 'Add to favorites' : 'Added to favorites'}
            </SearchedAddButton>
            <SearchedAddButton
              onClick={() => clearFavorite(singleCast.id)}
              disabled={!isAdded(singleCast.id) || !isLogin(user.user_id)}
            >
              Remove from favorites
            </SearchedAddButton>
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

export default CastInfoCard;
