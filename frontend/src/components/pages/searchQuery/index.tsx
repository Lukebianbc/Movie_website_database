/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-expressions */
// @ts-nocheck
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBox, SearchButton, SearchForm, SearchInput, StyledButton } from './SearchElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import Icon from '../../shared/icon';
import { IMoviesContext, Movie } from '../../../frontEndTypes';
import { SearchedContainer } from './SearchedItemsElements';
import SearchedMovieCards from './SearchedMovieCards';
import { Dropdown, Option } from '../../shared/Dropdown';

const SearchQuery = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [accSearchValue, setAccSearchValue] = useState('');
  const [_movies, setMovies] = useState<Movie[] | void>([]);
  const { user, getSearchedMovies, getAccSearchedMovies, getFilteredMovies } = useContext(
    MoviesContext
  ) as IMoviesContext;

  const history = useHistory();
  const redirectToSearchedItems = () => {
    history.push('/searched-items');
  };

  const handleSearchInputChanges = (event: React.FormEvent) => {
    setSearchValue(event.target.value);
  };

  const handleAccSearchInputChanges = (event: React.FormEvent) => {
    setAccSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const resetAccInputField = () => {
    setAccSearchValue('');
  };

  const callAccSearchFunction = async (event: React.FormEvent) => {
    event.preventDefault();
    if (accSearchValue) {
      const movieResults = await getAccSearchedMovies(user.user_id, accSearchValue);
      setMovies(movieResults);
    }
    resetAccInputField();
    // redirectToSearchedItems();
  };

  const callSearchFunction = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchValue) {
      const movieResults = await getSearchedMovies(user.user_id, searchValue);
      setMovies(movieResults);
    }
    resetInputField();
    // redirectToSearchedItems();
  };

  const [genreValue, setGenreValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  const callFilteredFunction = async (event: React.FormEvent) => {
    event.preventDefault();
    if (genreValue || timeValue || sortValue) {
      const movieResults = await getFilteredMovies(user.user_id, genreValue, timeValue, sortValue);
      setMovies(movieResults);
    }
  };

  const handleGenre = (e) => {
    setGenreValue(e.target.value);
  };
  const handleTime = (e) => {
    setTimeValue(e.target.value);
  };
  const handleSort = (e) => {
    setSortValue(e.target.value);
  };
  return (
    <>
      <>
        <Dropdown
          formLabel="Choose a genre"
          // buttonText="Send form"
          onChange={handleGenre}
        >
          <Option selected value="Click to see options" />
          <Option value="Action" />
          <Option value="Adventure" />
          <Option value="Animation" />
          <Option value="Comedy" />
          <Option value="Crime" />
          <Option value="Documentary" />
          <Option value="Drama" />
          <Option value="Family" />
          <Option value="Foreign" />
          <Option value="History" />
          <Option value="Horror" />
          <Option value="Music" />
          <Option value="Romance" />
          <Option value="Science Fiction" />
          <Option value="Thriller" />
          <Option value="TV Movie" />
          <Option value="War" />
          <Option value="Western" />
        </Dropdown>
        <p style={{ color: 'white' }}>You selected {genreValue} </p>
      </>
      <>
        <Dropdown formLabel="Choose release time" buttonText="Send form" onChange={handleTime}>
          <Option selected value="Click to see options" />
          <Option value="1970-01-01 to 1979-12-31" />
          <Option value="1980-01-01 to 1989-12-31" />
          <Option value="1990-01-01 to 1999-12-31" />
          <Option value="2000-01-01 to 2009-12-31" />
          <Option value="2010-01-01 to 2019-12-31" />
        </Dropdown>
        <p style={{ color: 'white' }}>You selected {timeValue} </p>
      </>
      <>
        <Dropdown formLabel="Choose sorting options" buttonText="Send form" onChange={handleSort}>
          <Option selected value="Click to see options" />
          <Option value="popularity asc" />
          <Option value="popularity desc" />
          <Option value="vote_average asc" />
          <Option value="vote_average desc" />
          <Option value="runtime asc" />
          <Option value="runtime desc" />
        </Dropdown>
        <p style={{ color: 'white' }}>You selected {sortValue} </p>
        <StyledButton type="submit" value="Submit" onClick={callFilteredFunction} />
      </>
      <SearchBox>
        <SearchForm>
          <p style={{ color: 'white' }}> Fuzzy Search </p>
          <SearchInput type="text" value={searchValue} onChange={handleSearchInputChanges} />
          <SearchButton onClick={callSearchFunction}>
            <Icon color="black" size="18px">
              <AiOutlineSearch />
            </Icon>
          </SearchButton>
        </SearchForm>
      </SearchBox>
      <SearchBox>
        <SearchForm>
          <p style={{ color: 'white' }}> Accurate Search </p>
          <SearchInput type="text" value={accSearchValue} onChange={handleAccSearchInputChanges} />
          <SearchButton onClick={callAccSearchFunction}>
            <Icon color="black" size="18px">
              <AiOutlineSearch />
            </Icon>
          </SearchButton>
        </SearchForm>
      </SearchBox>
      <SearchedContainer>
        <SearchedMovieCards />
      </SearchedContainer>
    </>
  );
};

export default SearchQuery;
