// @ts-nocheck
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MoviesContext } from '../../../contexts/MoviesContext';

import {
  SearchedMovieCardContainer,
  SearchedCardBoardContainer,
  SearchedBlurBlack,
  SearchedH4,
  SearchedHeader,
  SearchedImage,
  SearchedInfoSection,
  SearchedMovieDesc,
  SearchedMovieText,
  SearchedMovieHeader,
  SearchedAddButton,
} from './SearchedItemsElements';
import imgPlaceholder from '../../../assets/default.jpg';
import { Title } from '../../shared/TextElements';
import NoResults from '../../shared/noResults';
import cover from '../../../assets/backgroundImages/shrek.jpg';
import { IMoviesContext, Movie } from '../../../frontEndTypes';

const SearchedMovieCard = ({ data }: any) => {
  const { addToFavorites, favoriteMovies } = useContext(MoviesContext) as IMoviesContext;
  const { user, getSingleMovieData } = useContext(MoviesContext) as IMoviesContext;
  const history = useHistory();
  const redirectToMoviePage = () => {
    getSingleMovieData(user.user_id, data);
    history.push('/movie');
  };
  const isAdded = (movieId: number) => {
    return favoriteMovies.find((item: Movie) => item.id === movieId);
  };
  return (
    <SearchedMovieCardContainer>
      <SearchedInfoSection>
        <SearchedMovieHeader>
          <SearchedImage as="img" src={data.picture || imgPlaceholder} alt={data.title} />
          <SearchedHeader onClick={redirectToMoviePage}>{data.title}</SearchedHeader>
          <SearchedH4>
            {data.rating} | {new Date(data.date).getFullYear()}
          </SearchedH4>
        </SearchedMovieHeader>
        <SearchedMovieDesc>
          <SearchedMovieText>{data.resume}</SearchedMovieText>
        </SearchedMovieDesc>
      </SearchedInfoSection>
      <SearchedBlurBlack cover={data.picture} />
    </SearchedMovieCardContainer>
  );
};

const noSearchResults = (
  <NoResults cover={cover}>
    {/* <Title>🙁Sorry we do not have any results for you.</Title>
    <Title>Please try with another keyword.</Title> */}
  </NoResults>
);

const SearchedMovieCards = (): React.ReactElement => {
  const { searchedMovies } = useContext(MoviesContext) as IMoviesContext;

  return (
    <>
      {searchedMovies.length > 0 ? (
        <SearchedCardBoardContainer>
          {searchedMovies.map((data: Movie) => (
            <SearchedMovieCard data={data} key={data.id} />
          ))}
        </SearchedCardBoardContainer>
      ) : (
        noSearchResults
      )}
    </>
  );
};

export default SearchedMovieCards;
