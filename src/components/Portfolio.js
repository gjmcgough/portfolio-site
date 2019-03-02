import React from 'react';
import PortfolioHome from './PortfolioHome';

const Portfolio = (props) => (
  <div>
    <h1>portfolio {props.match.params.id}</h1>
  </div>
);

export default Portfolio;
