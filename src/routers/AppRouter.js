import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Contact from '../components/Contact';
import PortfolioHome from '../components/PortfolioHome';
import Portfolio from '../components/Portfolio';
import Home from '../components/Home';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={PortfolioHome} exact={true}/>
        <Route path="/portfolio/:id" component={Portfolio} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
