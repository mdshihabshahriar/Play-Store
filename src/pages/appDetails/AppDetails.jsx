import React, { useContext} from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { HashLoader } from 'react-spinners';
import { FaDownload, FaStar } from 'react-icons/fa';
import { BiSolidLike } from 'react-icons/bi';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams()
    console.log(id)
    const {apps, loading} = useApps()

    const expectedApp = apps.find((app) => String(app.id) === id);

    console.log(apps, loading)
    console.log(expectedApp)

    const {installedApps, setInstalledApps} = useContext(InstalledAppsContext)

    if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#ad46ff" />
      </div>
    );
  }

    const handleInstallApp = () => {
        setInstalledApps([...installedApps, expectedApp]);
        toast.success(`${expectedApp.title} is installed`)
    }

    return (
        <div className='container mx-auto shadow-sm mt-10'>
            <div className='inline md:flex items-center gap-5'>
                <div>
                    <img src={expectedApp.image} className='h-100 w-auto' alt="" />
                </div>
                <div className='space-y-6'>
                    <h3 className='text-3xl font-bold'>{expectedApp.title}</h3>
                    <p>Developed by <span className='text-purple-500 font-semibold'>{expectedApp.companyName}</span></p>
                    <div className='flex gap-40'>
                        <FaDownload className='text-green-500 text-2xl'></FaDownload>
                        <FaStar className='text-orange-500 text-2xl'></FaStar>
                        <BiSolidLike className='text-purple-500 text-2xl' />
                    </div>
                    <div className='flex gap-20'>
                        <span>Downloads</span>
                        <span>Average Ratings</span>
                        <span>Total Reviews</span>
                    </div>
                    <div className='flex gap-22 md:gap-25 text-2xl md:text-4xl font-bold'>
                        <span>{expectedApp.downloads}</span>
                        <span>{expectedApp.ratingAvg}</span>
                        <span>{expectedApp.reviews}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-2'>
                <button className='btn btn-accent text-white' onClick={handleInstallApp}>Install Now ({expectedApp.size} MB)</button>
            </div>
        </div>
    );
};

export default AppDetails;