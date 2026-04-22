import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import useApps from '../../hooks/useApps';

const Dashboard = () => {
    const {installedApps, setInstalledApps} = useContext(InstalledAppsContext)   
    const {apps} = useApps();

    const uninstalledApps = apps.length - installedApps.length

    const data = [
        {name:"Installed", value: installedApps.length, fill: "#0088FE"},
        {name:"Uninstalled", value: uninstalledApps, fill: "#FF8042"},
    ]
    return (
        <div className='my-10 container mx-auto shadow p-10 rounded-md border border-slate-300'>
            <h2 className='font-semibold text-3xl mb-16 text-center'>Installed and Uninstalled Apps</h2>
            <PieChart style={{ width: '100%', margin:'auto', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"
                    // Corner radius is the rounded edge of each pie slice
                    cornerRadius="50%"
                    fill="#8884d8"
                    // padding angle is the gap between each pie slice
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                />
                <Legend></Legend>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Dashboard;