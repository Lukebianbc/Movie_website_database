import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import Navbar from './components/Navbar';
import Routes from './components/pages';
import Footer from './components/footer';
import Layout from './components/layout/Layout';
import MoviesContextProvider from './contexts/MoviesContext';

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = (): React.ReactElement => {
  return (
    <MoviesContextProvider>
      <GlobalStyle />
      <PageContainer>
        <Layout>
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </Layout>
        <Footer />
      </PageContainer>
    </MoviesContextProvider>
  );
};

export default App;
