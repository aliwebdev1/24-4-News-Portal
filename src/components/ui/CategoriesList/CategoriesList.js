import { getAllCategories } from '@/utils/getAllCategories';
import Link from 'next/link';
import React from 'react';

const CategoriesList = async () => {
    const { data: categories } = await getAllCategories();
   // console.log(categories);
    return (
        <div>
            <h1 className='text-2xl border-b-2 border-gray-300'>Categories</h1>
            {
                categories.map(category => <Link href={`/categories/news?category=${category.title.toLowerCase()}`} key={category._id} ><button className="btn btn-outline block my-4 w-full">{category.title}</button></Link>)
            }
        </div>
    );
};

export default CategoriesList;