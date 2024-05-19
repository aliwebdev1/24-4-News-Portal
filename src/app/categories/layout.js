import CategoriesList from '@/components/ui/CategoriesList/CategoriesList';
import React from 'react';

const CategoriesLayout = ({ children }) => {
    return (

        <div className='md:flex my-7 gap-5 items-start'>

            <div className='w-12/12 md:w-3/12 bg-gray-200 p-5'>
                <CategoriesList />
            </div>

            <div className='w-12/12 md:w-9/12'>
                {children}
            </div>

        </div>

    );
};

export default CategoriesLayout;