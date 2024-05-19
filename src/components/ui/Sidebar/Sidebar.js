import { getAllNews } from '@/utils/getAllNews';
import Image from 'next/image';
import React from 'react';

const Sidebar = async () => {
    const { data } = await getAllNews()
    //console.log(data);

    return (
        <div className=''>
            <div className=" bg-base-100 shadow-xl">
                <figure><Image className='rounded-t-lg' src={data[15].thumbnail_url} width={500} height={300} alt="news" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge bg-red-500 text-white px-3 py-4">{data[15].category}</div>
                    </h2>
                    <p className=''>{data[15].title}</p>
                    <p className='text-gray-600'>By {data[15].author.name} -- {data[15].author.published_date}</p>

                    <p className='text-gray-600'>{data[15].details.length > 150 ? data[15].details.slice(0, 150) + ' >>> ' : data[15].details}</p>
                </div>
            </div>

            {/* 8 times */}
            <div className='grid grid-cols-1 mt-5'>
                {
                    data.slice(5, 12).map((news) => <div key={news._id} className="flex items-center bg-base-100 shadow-xl border-b-2">
                        <div className=''>
                            <Image className='rounded-lg h-24 max-w-24' src={news.thumbnail_url} width={200} height={200} alt="news" />
                        </div>

                        <div className="card-body ">
                            <p className='text'>{news.title}</p>
                            <p className='text-gray-600'>{news.author.published_date}</p>
                        </div>
                    </div>)
                }
            </div>


            <div className=" bg-base-100 shadow-xl mt-5">
                <figure><Image className='rounded-t-lg h-80' src={data[10].thumbnail_url} width={900} height={10} alt="news" /></figure>
            </div>


        </div >
    );
};

export default Sidebar;