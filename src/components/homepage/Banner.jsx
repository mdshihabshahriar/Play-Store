import React from 'react';
import bannerImg from '../../assets/images/hero.png'

const Banner = () => {
    return (
        <div className='min-h-[80vh] text-center space-y-8 pt-12.5'>
            <h2 className='text-6xl font-bold'>We Build <br /> <span className='text-purple-500'>Productive</span> Apps</h2>
            <p className='text-gray-500 max-w-[50%] mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-2'>
                <button className='btn'>Play Store</button>
                <button className='btn'>App Store</button>
            </div>
            <img src={bannerImg} alt="" className='mx-auto'/>
        </div>
    );
};

export default Banner;