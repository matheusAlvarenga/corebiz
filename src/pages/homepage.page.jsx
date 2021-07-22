import React from 'react';

import Banner from '../components/banner.component';
import Newsletter from '../components/newsletter.component';
import ProductList from '../components/productList.component';

import withLayout from '../hoc/layout.hoc';

const Homepage = () => (
    <div>
        <Banner />
        <ProductList />
        <Newsletter />
    </div>
);

export default withLayout(Homepage);
