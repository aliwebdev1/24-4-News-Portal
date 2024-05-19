import { getAllNews } from '@/utils/getAllNews';
import Image from 'next/image';
import React from 'react';

const LatestNews = async () => {
    const { data } = await getAllNews()
    //console.log(data);
    return (
        <div className=''>

            <div className=" bg-base-100 shadow-xl">
                <figure><Image className='rounded-t-lg' src={data[0].thumbnail_url} width={900} height={500} alt="news" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge bg-red-500 text-white px-3 py-4">{data[0].category}</div>
                    </h2>
                    <p className='text-2xl'>{data[0].title}</p>
                    <p className=''>By {data[0].author.name} -- {data[0].author.published_date}</p>

                    <p className=''>{data[0].details.length > 250 ? data[0].details.slice(0, 250) + ' >>> ' : data[0].details}</p>
                </div>
            </div>

            {/* 4 times */}
            <div className='grid md:grid-cols-2 gap-4 my-5'>
                {
                    data.slice(1, 5).map((news) => <div key={news._id} className=" bg-base-100 shadow-xl">
                        <figure><Image className='rounded-t-lg' src={news.thumbnail_url} width={500} height={300} alt="news" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <div className="badge bg-red-500 text-white px-3 py-4">{news.category}</div>
                            </h2>
                            <p className='text'>{news.title}</p>
                            <p className='text-gray-400'>By {news.author.name} -- {news.author.published_date}</p>

                            <p className='text-gray-400 text-justify'>{news.details.length > 150 ? news.details.slice(0, 150) + ' >>> ' : news.details}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestNews;