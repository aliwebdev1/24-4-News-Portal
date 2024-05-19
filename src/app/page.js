import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='md:flex my-7 gap-5'>

      <div className='md:w-8/12'>
        <LatestNews></LatestNews>
      </div>

      <div className='md:w-4/12'>
        <Sidebar></Sidebar>
      </div>

    </div>
  );
};

export default HomePage;