import React, { use } from 'react';

const appsPromise = fetch("/data.json").then((res)=>res.json());

const TrendingApps = () => {
    const apps = use(appsPromise);
    console.log(apps);
    
    return (
        <div>
            <div className='mb-8 text-center'>
                <h2 className='font-bold text-4xl'>Trending Apps</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur quae quisquam vel corrupti officia obcaecati. Molestias asperiores necessitatibus ex!</p>
            </div>
        </div>
    );
};

export default TrendingApps;