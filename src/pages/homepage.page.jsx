import React from 'react';
import Newsletter from '../components/newsletter.component';

import withLayout from '../hoc/layout.hoc';

const Homepage = () => (
    <div>
        <h1>Home</h1>
        <Newsletter />
        {localStorage.setItem('@corebiz/cart-items', 2)}
    </div>
);

export default withLayout(Homepage);
