/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Header from '../components/header.component';
import Footer from '../components/footer.component';

export default function withLayout(Component) {
    return props => (
        <>
            <Header />
            <Component {...props} />
            <Footer />
        </>
    );
}
