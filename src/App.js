import React, { Component } from 'react';
import logo from './images/logo.svg';
import styled, { keyframes } from 'styled-components';

const AppBody = styled.div`
  text-align: center;
`;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${ AppLogoSpin } infinite 20s linear;
  height: 80px;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;

const AppIntro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <AppBody>
        <AppHeader>
          <AppLogo src={ logo } alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppBody>
    );
  }
}

export default App;
