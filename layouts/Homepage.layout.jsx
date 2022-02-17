
import Search from '@components/Global/Search';
import CustomSelect from '@components/Inputs/CustomSelect';
import difficulty from '@constants/difficulty';
import Layout from '@layouts/Layout';
import locales from '@locales';
import React from 'react';

const HomepageLayout = ({ children, search, setSearch, difficultySelect, setDifficultySelect }) => {
    return (
        <Layout includesHomepageLayout={true}>
            <div className='w-full shadow-inner bg-white py-10'>
                <div className='container mx-auto px-6'>
                    <div className='w-full flex'>
                        <Search value={search} setValue={setSearch}/>
                        <CustomSelect value={difficultySelect} setValue={setDifficultySelect} options={difficulty} label={locales.DIFFICULTY} width='w-40' margin='ml-3'/>
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