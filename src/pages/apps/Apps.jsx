import React from 'react';
import { Link } from 'react-router';
import { HashLoader } from 'react-spinners';
import AppCard from '../../components/ui/AppCard';
import useApps from '../../hooks/useApps';

const Apps = () => {
    const {apps, loading} = useApps()
    
    return (
        <div className='container mx-auto my-10'>
            <div className='mb-12 text-center max-w-[50%] mx-auto'>
                <h2 className='font-bold text-4xl'>All Apps</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur quae quisquam vel corrupti officia obcaecati. Molestias asperiores necessitatibus ex!</p>
            </div>
            {/* Total Apps: {apps.length} */}
            {loading ? (<div className='flex justify-center items-center'>
                <HashLoader color='#ad46ff' />
                </div>): (<div className='grid grid-cols-3 gap-5'>
                {
                apps.map((app,ind)=>{
                    return (
                    <AppCard app={app} key={ind}></AppCard>
                ) })
            }
            </div>
            )}
            {/* <div className='text-center mt-4'>
                <Link to={"/apps"}>
                    <button className='btn bg-purple-500 text-white'>View All</button>
                </Link>
            </div> */}
        </div>
    );
};

export default Apps;