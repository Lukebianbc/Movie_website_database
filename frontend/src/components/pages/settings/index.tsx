import React, { useContext } from 'react';
import ChangeEmail from './changeEmail';
import ChangePassword from './changePassword';
import ChangeName from './changeName';
import NoResults from '../../shared/noResults';
import { Title } from '../../shared/TextElements';
import { MoviesContext } from '../../../contexts/MoviesContext';
import { IMoviesContext } from '../../../frontEndTypes';

const Setting = (): React.ReactElement => {
  const noLogin = (
    <NoResults cover="">
      <Title>Please login first.</Title>
    </NoResults>
  );
  const { user, showFavs } = useContext(MoviesContext) as IMoviesContext;
  if (user.user_id === undefined || user.user_id.length === 0) {
    return noLogin;
  }
  return (
    <>
      <ChangeName />
      <ChangeEmail />
      <ChangePassword />
    </>
  );
};
export default Setting;
