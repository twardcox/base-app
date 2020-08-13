import React, { useContext } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes/DashboardRoutes';
import ThemeContext from './context/ThemeContext';

function App() {
  const theme = useContext(ThemeContext)[0];

  return (
    <div >
      <CssBaseline />
      <ThemeContext.Provider value={theme}>
        <Router>
          <Switch>
            <Routes
            // childProps={childProps}
            />

          </Switch>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
