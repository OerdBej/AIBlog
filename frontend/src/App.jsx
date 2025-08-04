import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import NewsLetter from "./components/NewsLetter";
import LayoutAdmin from "./pages/admin/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";

import AddBlog from "./pages/admin/AddBlog";
import BlogList from "./components/BlogList";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          {/* with child routes: //click admin -> open LayoutAdmin -> add the Dashboard - if the user is log in display it if not layout*/}
          <Route path='/admin' element={true ? <LayoutAdmin /> : <Login />}>
            <Route index element={<Dashboard />} />
            <Route path='addBlog' element={AddBlog} />
            <Route path='listBlog' element={BlogList} />
            <Route path='comments' element={<Comments />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
