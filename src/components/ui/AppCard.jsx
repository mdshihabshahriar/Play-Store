import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
            <figure>
                <img src={app.image} alt={app.title} className='md:h-50 h-20 w-auto'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className='md:flex flex-col justify-between items-center gap-4'>
                    <span className='bg-green-100 text-green-500 flex py-1 px-2 font-semibold rounded-md items-center gap-1'><FaDownload></FaDownload>{app.downloads}</span>
                    <span className='bg-orange-100 text-orange-500 flex py-1 px-2 font-semibold rounded-md items-center gap-1'><FaStar></FaStar>{app.ratingAvg}</span>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;