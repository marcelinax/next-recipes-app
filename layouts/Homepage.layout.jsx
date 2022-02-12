
import Search from '@components/Global/Search';
import CustomSelect from '@components/Inputs/CustomSelect';
import difficulty from '@constants/difficulty';
import Layout from '@layouts/Layout';
import locales from '@locales';
import React from 'react';

const HomepageLayout = ({children}) => {
    return (
        <Layout>
            <div className='w-full shadow-inner bg-white py-10' >
                <div className='container mx-auto px-6'>
                    <div className='w-full flex'>
                        <Search/>
                        <CustomSelect options={difficulty} label={locales.DIFFICULTY}/>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex flex-col mt-10'>
                {children}
            </div>
        </Layout>
    );
};

export default HomepageLayout;