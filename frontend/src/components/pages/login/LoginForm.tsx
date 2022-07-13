// @ts-nocheck
import React, { useState, useContext } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { stat } from 'fs';
import Button from '../../shared/button';
import FormWrapper from '../../shared/form/FormWrapper';
import FormField from '../../shared/form/FormField';
import FormIconWrapper from '../../shared/form/FormIconWpapper';
import {
  FormTextWrapper,
  FormControl,
  FormAnchor,
  FormText,
  ErrorMsg,
} from '../../shared/form/FormElements';
import { isValidEmail } from '../../../util/inputValidation';
import { setUserInfo } from '../../../util/contextFunctions';
import { IMoviesContext } from '../../../frontEndTypes';
import { MoviesContext } from '../../../contexts/MoviesContext';

const LoginForm = (): React.ReactElement => {
  const [state, setState] = useState({
    email: '',
    password: '',
    id: '',
  });
  const { user, getUserData, baseUrl } = useContext(MoviesContext) as IMoviesContext;
  console.log(user.user_id);
  const [error, setError] = useState({});
  const [invalidEmail, setInvalidEmail] = useState(false);
  const GetJsonData = (email: string, pass: string) => {
    const json = {
      // eslint-disable-next-line prettier/prettier
      "email":email,
      // eslint-disable-next-line prettier/prettier
      "password":pass
    };
    const res = JSON.stringify(json);
    return res;
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValidEmail(state.email)) {
      error.invalidEmail = 'Please enter valid email address.';
      setError(error);
      setInvalidEmail(true);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this;
      const xhr = new XMLHttpRequest();
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      xhr.open('POST', `${baseUrl}/users/login`, true);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.responseType = 'json';
      xhr.send(GetJsonData(state.email, state.password));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          getUserData(
            setUserInfo(
              xhr.response.data.userId,
              xhr.response.data.email,
              xhr.response.data.name,
              xhr.response.data.password
            )
          );
        }
      };
      console.log(GetJsonData(state.email, state.password));

      setInvalidEmail(false);
    }
  };
  const logout = (event: React.FormEvent) => {
    event.preventDefault();
    getUserData(setUserInfo('', '', '', ''));
  };
  const history = useHistory();
  const redirectToRegister = () => {
    history.push('/register');
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(state.email);
  };
  const isEmpty = (email: string, pass: string) => {
    if (email === undefined || pass === undefined) {
      return false;
    }
    return email.length > 0 && pass.length > 0;
  };
  const isLogin = (user_id: string) => {
    if (user_id === undefined || user_id.length === 0) return false;
    return user_id.length > 0;
  };
  return (
    <FormWrapper>
      <FormField>
        <FormIconWrapper>
          <AiOutlineUser />
        </FormIconWrapper>
        <FormControl
          as="input"
          type="email"
          name="name-input"
          id="email"
          placeholder="Email"
          value={state.email}
          required
          aria-describedby="emailHelp"
          onChange={handleChange}
          autoComplete="off"
          autofokus
          error={invalidEmail}
        />
        <ErrorMsg error={invalidEmail}> {error.invalidEmail}</ErrorMsg>
      </FormField>
      <FormField>
        <FormIconWrapper>
          <AiOutlineLock />
        </FormIconWrapper>
        <FormControl
          as="input"
          type="password"
          name="password-input"
          id="password"
          placeholder="Password"
          value={state.password}
          required
          onChange={handleChange}
          autoComplete="off"
        />
        <ErrorMsg error={invalidEmail}> The user name and password do not match</ErrorMsg>
      </FormField>
      <Button
        margin="1rem 0 0 0"
        bg="var(--color-primary)"
        fontSize="16px"
        width="100%"
        height="50px"
        disabled={!isEmpty(state.email, state.password) || isLogin(user.user_id)}
        clicked={handleSubmit}
      >
        {' '}
        LOG IN{' '}
      </Button>
      <FormTextWrapper>
        <FormText>Dont have an account?</FormText>
        <FormAnchor onClick={() => redirectToRegister()}>Sign up</FormAnchor>
      </FormTextWrapper>
      <Button
        margin="1rem 0 0 0"
        bg="var(--color-primary)"
        fontSize="16px"
        width="100%"
        height="50px"
        disabled={!isLogin(user.user_id)}
        clicked={logout}
      >
        {' '}
        LOG OUT{' '}
      </Button>
    </FormWrapper>
  );
};

export default LoginForm;
