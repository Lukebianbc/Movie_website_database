import React from 'react';
import RegisterForm from './RegisterForm';
import regBackground from '../../../assets/backgroundImages/alita.jpg';
import { Background } from '../../shared/Background';

const Register = (): React.ReactElement => {
  return (
    <Background background={regBackground}>
      <RegisterForm />
    </Background>
  );
};

export default Register;
