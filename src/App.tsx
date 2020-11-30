import React from 'react';
import logo from './logo.svg';
import Main from './pages/main'
import Routes from './components/Routes'
import { ThemeProvider } from 'styled-components';
import { Color } from './styles/global';
const App: React.FC = () => (
  <ThemeProvider theme={Color}>
    <Routes />
  </ThemeProvider>
)

export default App;
