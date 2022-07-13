// @ts-nocheck
import React, { useState, useContext } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Button from '../../shared/button';
import FormWrapper from '../../shared/form/FormWrapper';
import FormField from '../../shared/form/FormField';
import FormIconWrapper from '../../shared/form/FormIconWpapper';
import { MoviesContext } from '../../../contexts/MoviesContext';
import {
  FormTextWrapper,
  FormControl,
  FormAnchor,
  FormText,
  ErrorMsg,
} from '../../shared/form/FormElements';
import { isValidEmail } from '../../../util/inputValidation';

const RegisterForm = (): React.ReactElement => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({});
  const [invalidEmail, setInvalidEmail] = useState(false);
  const { baseUrl } = useContext(MoviesContext) as IMoviesContext;
  const GetJsonData = (username: string, useremail: string, userpass: string) => {
    const json = {
      // eslint-disable-next-line prettier/prettier
      name: username,
      // eslint-disable-next-line prettier/prettier
      email: useremail,
      // eslint-disable-next-line prettier/prettier
      password :userpass
    };
    // eslint-disable-next-line no-eval
    const res = JSON.stringify(json);
    return res;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(state.email)) {
      error.invalidEmail = 'Please enter valid email address.';
      setError(error);
      setInvalidEmail(true);
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${baseUrl}/users/register`, true);
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(GetJsonData(state.name, state.email, state.password));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          alert(xhr.responseText);
        }
      };
      console.log(GetJsonData(state.name, state.email, state.password));
      setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setInvalidEmail(false);
    }
  };

  const history = useHistory();
  const redirectToLogin = () => {
    history.push('/login');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const isEmpty = (name, email, pass, confirmPass) => {
    return email.length > 0 && pass.length > 0 && confirmPass.length > 0;
  };

  return (
    <FormWrapper>
      <FormField>
        <FormIconWrapper>
          <AiOutlineUser />
        </FormIconWrapper>
        <FormControl
          as="input"
          type="text"
          name="name-input"
          id="name"
          placeholder="name"
          value={state.name}
          required
          autofokus
          onChange={handleChange}
          autoComplete="off"
        />
      </FormField>
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
          autofokus
          aria-describedby="emailHelp"
          onChange={handleChange}
          autoComplete="off"
        />
        <ErrorMsg error={invalidEmail}>{error.invalidEmail}</ErrorMsg>
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
      </FormField>
      <FormField>
        <FormIconWrapper>
          <AiOutlineLock />
        </FormIconWrapper>
        <FormControl
          as="input"
          type="password"
          name="password-input"
          id="confirmPassword"
          placeholder="Password"
          value={state.confirmPassword}
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
        disabled={!isEmpty(state.name, state.email, state.password, state.confirmPassword)}
        clicked={handleSubmit}
      >
        {' '}
        REGISTER{' '}
      </Button>
      <FormTextWrapper>
        <FormText>Already have an account?</FormText>
        <FormAnchor onClick={() => redirectToLogin()}>Sign in</FormAnchor>
      </FormTextWrapper>
    </FormWrapper>
  );
};

export default RegisterForm;
