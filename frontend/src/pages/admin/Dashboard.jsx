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
        <div>
          <img src={assets.dashboard_icon_1} alt='the icon' />
          <div>
            {/* state for the dashboard to hold */}
            <p>{dashboardData.blogs}</p>
            <p>Blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
