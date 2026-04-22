import React from 'react';
import { Link } from 'react-router';
import AppCard from '../ui/AppCard';
import { HashLoader } from 'react-spinners';
import useApps from '../../hooks/useApps';

// const appsPromise = fetch("/data.json").then((res)=>res.json());
// console.log(appsPromise)

const TrendingApps = () => {
    // const apps = use(appsPromise);
    // console.log(apps);

    // const data = useLoaderData();
    // console.log(data,"data from homepage")

    const {apps, loading} = useApps()

    // const [apps, setApps] = useState([]);
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         const res = await fetch("/data.json")
    //         const data = await res.json()
    //         console.log(data)
    //         setApps(data)
    //         setLoading(false)
    //     }
    //     fetchData()
    // },[])

    console.log(apps)

    return (
        <div className='container mx-auto my-15'>
            <div className='mb-8 text-center'>
                <h2 className='font-bold text-4xl'>Trending Apps</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tenetur quae quisquam vel corrupti officia obcaecati. Molestias asperiores necessitatibus ex!</p>
            </div>
            {/* Total Apps: {apps.length} */}
            {loading ? (<div className='flex justify-center items-center'>
                <HashLoader color='#ad46ff' />
                </div>): (<div className='grid grid-cols-3 gap-5'>
                {
                apps.slice(0,9).map((app,ind)=>{
                    return (
                    <AppCard app={app} key={ind}></AppCard>
                ) })
            }
            </div>
            )}
            <div className='text-center mt-4'>
                <Link to={"/apps"}>
                    <button className='btn bg-purple-500 text-white'>View All</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;