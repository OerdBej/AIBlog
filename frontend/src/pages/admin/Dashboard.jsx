import { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";

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
        {/* table headings */}
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-600'>
            <thead className='text-xs text-gray-700 text-left uppercase '>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>
                  #
                </th>
                <th scope='col' className='px-2 py-4'>
                  Blog Title
                </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>
                  Date
                </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>
                  Status
                </th>
                <th scope='col' className='px-2 py-4'>
                  Actions
                </th>
              </tr>
            </thead>
            {/* table body of the data */}
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlog={fetchDashoard}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
