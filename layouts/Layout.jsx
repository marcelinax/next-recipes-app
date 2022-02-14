import React from 'react';
import Header from '../src/components/Composition/Header';


const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children[0]}
            <div className='container mx-auto flex flex-col mt-10'>
                {children[1]}
            </div>
        </>
    );
};

export default Layout;