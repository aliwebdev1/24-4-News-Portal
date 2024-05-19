import { getCategoriesNews } from '@/utils/getCategoriesNews';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage = async ({ searchParams }) => {
    const { data } = await getCategoriesNews(searchParams.category)
    //console.log(searchParams.category);
    //console.log(data);
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    data.map((news) => <Link href={`/news/${news._id}`} key={news._id}>
                        <div className=" bg-base-100 shadow-xl">
                            <figure><Image className='rounded-t-lg' src={news.thumbnail_url} width={500} height={300} alt="news" /></figure>
                            <div className="card-body">
                                <h2 className="card-title -mt-2">
                                    <div className="badge bg-red-500 text-white px-3 py-4">{news.category}</div>
                                </h2>
                                <p className='text'>{news.title}</p>
                                <p className='text-gray-400'>By {news.author.name} -- {news.author.published_date}</p>

                                <p className='text-gray-400 text-justify'>{news.details.length > 150 ? news.details.slice(0, 150) + ' >>> ' : news.details}</p>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default DynamicNewsPage;