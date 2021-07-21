import React from 'react';

import Banner from '../components/banner.component';
import Newsletter from '../components/newsletter.component';

import withLayout from '../hoc/layout.hoc';

const Homepage = () => (
    <div>
        <Banner />
        <h1>Home</h1>
        <Newsletter />
    </div>
);

export default withLayout(Homepage);
