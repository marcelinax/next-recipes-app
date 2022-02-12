import React from 'react';
import Header from '../src/components/Composition/Header';

const Layout = ({children}) => {
    return (
        <div >
            <Header />
            <div className='container mx-auto flex flex-col mt-10'>
                {children}
            </div>
        </div>
    );
};

export default Layout;