// @ts-nocheck
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { stat } from 'fs';
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
import { setUserInfo } from '../../../util/contextFunctions';

const ChangeName = (): React.ReactElement => {
  const [state, setState] = useState({
    name: '',
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
  const GetJsonData = (userId: string, newName: string) => {
    const json = {
      // eslint-disable-next-line prettier/prettier
      "userId": userId,
      // eslint-disable-next-line prettier/prettier
      "newName": newName
    };
    const res = JSON.stringify(json);
    return res;
  };
  const isEmpty = (newName) => {
    return newName.length > 0;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(GetJsonData(user.user_id, state.name));
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${baseUrl}/users/changeName`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.responseType = 'json';
    xhr.send(GetJsonData(user.user_id, state.name));
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        alert(xhr.response);
      }
      getUserData(setUserInfo(user.user_id, user.user_email, state.name, user.user_pass));
    };
  };
  return (
    <>
      <Title>Change Name</Title>
      <SettingsFormWrapper>
        <FormField>
          <FormIconWrapper>
            <AiOutlineUser />
          </FormIconWrapper>
          <FormControl
            as="input"
            type="text"
            name="newName-input"
            id="name"
            placeholder="New Name"
            value={state.name}
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
          disabled={!isEmpty(state.name)}
          clicked={handleSubmit}
        >
          {' '}
          SUBMIT{' '}
        </Button>
      </SettingsFormWrapper>
    </>
  );
};

export default ChangeName;
