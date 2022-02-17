import React from 'react';
import Header from '../src/components/Composition/Header';


const Layout = ({ children, includesHomepageLayout = false }) => {

    return (
        <>
            <Header />
            {includesHomepageLayout && children[0]}
            <div className='container mx-auto flex flex-col mt-10'>
                {includesHomepageLayout ? children[1] : children}
            </div>
        </>
    );
};

export default Layout;