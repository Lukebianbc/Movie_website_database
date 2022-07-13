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
import { Title } from '../../shared/TextElements';
import { IMoviesContext } from '../../../frontEndTypes';
import { MoviesContext } from '../../../contexts/MoviesContext';

const ChangePassword = (): React.ReactElement => {
  const [state, setState] = useState({
    password: '',
  });
  const { user, getUserData, baseUrl } = useContext(MoviesContext) as IMoviesContext;
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const GetJsonData = (userId: string, newPass: string) => {
    const json = {
      // eslint-disable-next-line prettier/prettier
      "userId": userId,
      // eslint-disable-next-line prettier/prettier
      "password": newPass
    };
    const res = JSON.stringify(json);
    return res;
  };
  const isEmpty = (newPass) => {
    return newPass.length > 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(GetJsonData(user.user_id, state.password));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${baseUrl}/users/changePassword`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(GetJsonData(user.user_id, state.password));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        alert(xhr.response);
      }
      getUserData(setUserInfo(user.user_id, user.user_email, user.user_name, state.password));
    };
  };
  return (
    <>
      <Title>Change Password</Title>
      <SettingsFormWrapper>
        <FormField>
          <FormIconWrapper>
            <AiOutlineLock />
          </FormIconWrapper>
          <FormControl
            as="input"
            type="password"
            name="newPass-input"
            id="password"
            placeholder="New Password"
            value={state.newPassword}
            required
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
          disabled={!isEmpty(state.password, state.newPassword)}
          clicked={handleSubmit}
        >
          {' '}
          SUBMIT{' '}
        </Button>
      </SettingsFormWrapper>
    </>
  );
};

export default ChangePassword;
