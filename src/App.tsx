import React from 'react';
import Routes from './components/Routes'
import { ThemeProvider } from 'styled-components';
import { Color } from './styles/global';
const App: React.FC = () => (
  <ThemeProvider theme={Color}>
    <Routes />
  </ThemeProvider>
)

export default App;
