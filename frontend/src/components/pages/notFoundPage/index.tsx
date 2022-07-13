import React from 'react';
import { useHistory } from 'react-router-dom';
import { Background } from '../../shared/Background';
import cover from '../../../assets/backgroundImages/blade_runner.jpg';
import { CenterElements } from '../../shared/CenterElements';
import { Header, Text, Wrapper } from './notFoundElements';
import Button from '../../shared/button';

const NotFound = (): React.ReactElement => {
  const history = useHistory();
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <Background background={cover}>
      <CenterElements>
        <Wrapper>
          <Header>404</Header>
          <Text>Ooops, this page does not exist</Text>
          <Button
            margin="1rem 3rem"
            bg="var(--color-primary)"
            fontSize="15px"
            width="150px"
            height="2rem"
            clicked={redirectToHome}
          >
            Back to homepage
          </Button>
        </Wrapper>
      </CenterElements>
    </Background>
  );
};

export default NotFound;
