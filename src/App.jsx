import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from './components/TopBar';

const App = () => (
  <MuiThemeProvider>
    <TopBar />
  </MuiThemeProvider>
);

export default App;