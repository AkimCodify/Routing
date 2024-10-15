import React from 'react';
import Navigation from '../Routing/Navigation';

const AboutPage = () => {
    return (
        <div>
            <ul className='h-list'>
                <Navigation/>
            </ul>
            <br /><br />
            <h1>About</h1>
        </div>
    );
};

export default AboutPage;