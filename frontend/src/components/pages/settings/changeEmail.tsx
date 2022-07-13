// @ts-nocheck
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import Button from '../../shared/button';
import SettingsFormWrapper from '../../shared/form/SettingsFormWrapper';
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
import { Title } from '../../shared/TextElements';
import { setUserInfo } from '../../../util/contextFunctions';
import { IMoviesContext } from '../../../frontEndTypes';
import { MoviesContext } from '../../../contexts/MoviesContext';

const ChangeEmail = (): React.ReactElement => {
  const [state, setState] = useState({
    email: '',
  });
  const { user, getUserData, baseUrl } = useContext(MoviesContext) as IMoviesContext;
  const [error, setError] = useState({});
  const [invalidEmail, setInvalidEmail] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const GetJsonData = (userId: string, newEmail: string) => {
    const json = {
      // eslint-disable-next-line prettier/prettier
      "userId": userId,
      // eslint-disable-next-line prettier/prettier
      "newEmail": newEmail
    };
    const res = JSON.stringify(json);
    return res;
  };
  const isEmpty = (newEmail) => {
    return newEmail.length > 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(GetJsonData(user.user_id, state.email));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${baseUrl}/users/changeEmail`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(GetJsonData(user.user_id, state.email));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        alert(xhr.response);
      }
      getUserData(setUserInfo(user.user_id, state.email, user.user_name, user.user_pass));
    };
  };
  return (
    <>
      <Title>Change Email</Title>
      <SettingsFormWrapper>
        <FormField>
          <FormIconWrapper>
            <AiOutlineUser />
          </FormIconWrapper>
          <FormControl
            as="input"
            type="email"
            name="newEmail-input"
            id="email"
            placeholder="New Email"
            value={state.email}
            required
            autofokus
            aria-describedby="emailHelp"
            onChange={handleChange}
            autoComplete="off"
          />
          <ErrorMsg error={invalidEmail}>{error.invalidEmail}</ErrorMsg>
        </FormField>
        <Button
          margin="1rem 0 0 0"
          bg="var(--color-primary)"
          fontSize="16px"
          width="100%"
          height="50px"
          disabled={!isEmpty(state.email)}
          clicked={handleSubmit}
        >
          {' '}
          SUBMIT{' '}
        </Button>
      </SettingsFormWrapper>
    </>
  );
};

export default ChangeEmail;
