import React from 'react';
import Navigation from '../Routing/Navigation';

const TicketsPage = () => {
    return (
      <div>
        <ul className="h-list">
          <Navigation />
        </ul>
        <br />
        <br />
        <h1>Tickets</h1>
      </div>
    );
};

export default TicketsPage;