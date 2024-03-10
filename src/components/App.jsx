import React, { useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CssBaseline } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import useStyles from './styles';
import { Actors, MovieInformation, Profile, NavBar, Movies } from '.';
import useAlan from './Alan';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
