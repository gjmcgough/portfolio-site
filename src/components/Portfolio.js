import React from 'react';
import PortfolioHome from './PortfolioHome';

const Portfolio = (props) => (
  <div>
  portfolio {props.match.params.id}
  </div>
);

export default Portfolio;
