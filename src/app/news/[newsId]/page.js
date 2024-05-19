import { getNewsDetails } from '@/utils/getNewsDetails';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async ({ params }) => {
    //console.log(params);
    const { data } = await getNewsDetails(params.newsId)
    //console.log(data);
    return (
        <div className='md:flex my-5'>

            <div className='md:w-6/12'>
                <Image className='rounded-t-lg' src={data.thumbnail_url} width={1000} height={500} alt="news" />
                <div className='flex justify-between my-5'>
                    <Image className='rounded-t-lg max-w-40 md:max-w-72 h-52' src={data.image_url} width={400} height={300} alt="news" />
                    <Image className='rounded-t-lg  max-w-40 md:max-w-72 h-52' src={data.author.img} width={400} height={300} alt="news" />
                </div>
            </div>

            <div className='md:w-6/12'>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge bg-red-500 text-white px-3 py-4">{data.category}</div>
                    </h2>
                    <p className='text-2xl'>{data.title}</p>
                    <p className=''>By {data.author.name} -- {data.author.published_date}</p>

                    <p className=''>{data.details}</p>

                    <p className='text-2xl'>Developed by {data.author.name}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsPage;