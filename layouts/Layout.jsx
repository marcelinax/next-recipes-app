import React from 'react';
import Header from '../src/components/Recipe/Composition/Header';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;