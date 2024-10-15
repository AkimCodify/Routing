import React from 'react';
import Navigation from '../Routing/Navigation';

const ErrorPage = () => {
    return (
      <div>
        <ul className="h-list">
          <Navigation />
        </ul>
        <br />
        <br />
        <h1>ERROR 404</h1>
      </div>
    );
};

export default ErrorPage