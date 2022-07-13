import React from 'react';
import LoginForm from './LoginForm';
import loginBackground from '../../../assets/backgroundImages/doctor_strange.jpg';
import { Background } from '../../shared/Background';

const Login = (): React.ReactElement => {
  return (
    <Background background={loginBackground}>
      <LoginForm />
    </Background>
  );
};

export default Login;
