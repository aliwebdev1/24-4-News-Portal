import Image from 'next/image';
import React from 'react';
import dragon from '@/assets/The Dragon News.png'
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const getDate = getCurrentDate();
    return (
        <div className='my-6 text-center space-y-3'>
            <Image className='inline' src={dragon} width={500} height={300} alt='text logo' />
            <p>Journalist Without Fear or Favour</p>
            <p>{getDate}</p>

        </div>
    );
};

export default Header;