import React from 'react';
import { Link } from 'react-router-dom';

const Arts = () => (
    <div className="container">
        <h1>Arts</h1>
        <ul>
            <li><Link to="/arts/music">Music</Link></li>
            <li><Link to="/arts/dance">Dance</Link></li>
        </ul>
    </div>
);

export default Arts;
