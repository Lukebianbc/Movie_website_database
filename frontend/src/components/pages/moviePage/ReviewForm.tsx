// @ts-nocheck
import React, { useState, useContext } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Button from '../../shared/button';
import SettingsFormWrapper from '../../shared/form/SettingsFormWrapper';
import FormField from '../../shared/form/FormField';
import FormIconWrapper from '../../shared/form/FormIconWpapper';
import { Title } from '../../shared/TextElements';
import {
  FormTextWrapper,
  FormControl,
  FormAnchor,
  FormText,
  ErrorMsg,
} from '../../shared/form/FormElements';
import { isValidEmail } from '../../../util/inputValidation';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMoviesContext, Movie } from '../../../frontEndTypes';

const ReviewForm = (): React.ReactElement => {
  const {
    singleMovie,
    user,
    addToReviewed,
    removeFromReviewed,
    reviewedMovies,
    findMovieinArray,
    getSingleMovieData,
  } = useContext(MoviesContext) as IMoviesContext;
  const [state, setState] = useState({
    review: '',
  });
  const [error, setError] = useState({});
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addToReviewed(user.user_id, singleMovie.id, state.review);
    state.review = '';
    // eslint-disable-next-line no-restricted-syntax
    for (const mov of reviewedMovies) {
      if (mov.id === singleMovie.id) {
        singleMovie.user_review = mov.user_review;
        console.log(singleMovie.user_review);
      }
    }
    getSingleMovieData(user.user_id, singleMovie);
    // window.location.reload();
  };
  const handleClearReview = (event) => {
    event.preventDefault();
    removeFromReviewed(user.user_id, singleMovie.id);
    singleMovie.user_review = '';
    getSingleMovieData(user.user_id, singleMovie);
  };
  const isLogin = (user_id: string) => {
    if (user_id === undefined || user_id.length === 0) return false;
    return user_id.length > 0;
  };
  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const isEmpty = (name) => {
    return name.length > 0;
  };

  const isReviewed = () => {
    console.log(singleMovie.user_review);
    // eslint-disable-next-line no-restricted-syntax
    for (const mov of reviewedMovies) {
      if (mov.id === singleMovie.id) return true;
    }
    return false;
  };
  return (
    <>
      <Title>Review Movie</Title>
      <SettingsFormWrapper>
        <FormField>
          <FormControl
            as="input"
            type="text"
            name="name-input"
            id="review"
            placeholder="Write something about this movie"
            value={state.review}
            required
            autofokus
            onChange={handleChange}
            autoComplete="off"
          />
        </FormField>
        <Button
          margin="1rem 0 0 0"
          bg="var(--color-primary)"
          fontSize="16px"
          width="100%"
          height="50px"
          disabled={!isEmpty(state.review) || !isLogin(user.user_id)}
          clicked={handleSubmit}
        >
          {' '}
          Submit{' '}
        </Button>
      </SettingsFormWrapper>
      <Title>Delete Review</Title>
      <Title>Previous Review {singleMovie.user_review}</Title>
      <SettingsFormWrapper>
        <Button
          margin="1rem 0 0 0"
          bg="var(--color-primary)"
          fontSize="16px"
          width="100%"
          height="50px"
          disabled={!isReviewed() || !isLogin(user.user_id)}
          clicked={handleClearReview}
        >
          {' '}
          Delete Review{' '}
        </Button>
      </SettingsFormWrapper>
    </>
  );
};

export default ReviewForm;
