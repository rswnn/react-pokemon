import React from 'react';
import {
  Switch,
  Route,
  Router as BrowserRouter
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Navbar, ScrollToTop } from 'components';
import {
  Dashboard, DetailPokemon, MyPokemon, NotFound
} from 'views';

type RoutesType = {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean
}

const history = createBrowserHistory();

const routes: RoutesType[] = [
  {
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    path: '/detail/:name',
    component: DetailPokemon,
    exact: true
  },
  {
    path: '/my-pokemon',
    component: MyPokemon,
    exact: true
  },
  {
    path: '/404',
    component: NotFound,
    exact: true
  }
];

const Router = () => {
  return (
    <BrowserRouter history={ history }>
      <Navbar/>
      <Switch>
        {
          routes.map(route => <Route exact={ route.exact } key={ route.path } path={ route.path } component={ route.component }/>)
        }
        <Route render={ () => <NotFound history={ history }/> } />
      </Switch>
      <ScrollToTop history={ history }/>
    </BrowserRouter>
  );
};

export default Router;
