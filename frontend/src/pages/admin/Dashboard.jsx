import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  // components get load

  const fetchDashoard = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashoard();
  }, []);

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      {/* 3 cards row */}
      <div className='flex flex-wrap gap-4'>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt='the icon' />
          <div>
            {/* state for the dashboard to hold */}
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.blogs}
            </p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2} alt='the icon' />
          <div>
            {/* state for the dashboard to hold */}
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.comments}
            </p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt='the icon' />
          <div>
            {/* state for the dashboard to hold */}
            <p className='text-xl font-semibold text-gray-600'>
              {dashboardData.drafts}
            </p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>
      </div>
      {/* icons */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={assets.dashboard_icon_4} alt='' />
          <p>Latest blog</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
