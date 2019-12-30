import React from 'react';
import { Link } from 'react-outer-dom';

export default () => {
    return (
        <div>
            Im some other page!
            <Link to="/">Go back home</Link>
        </div>
    );
};
