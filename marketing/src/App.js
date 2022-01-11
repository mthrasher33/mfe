import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  produtionPrefix: 'ma',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
