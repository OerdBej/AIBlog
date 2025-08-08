import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import LayoutAdmin from "./pages/admin/LayoutAdmin";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";
import ListBlog from "./pages/admin/ListBlog";
// 🔴
import "quill/dist/quill.snow.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        {/* with child routes: //click admin -> open LayoutAdmin -> add the Dashboard - if the user is log in display it if not layout*/}
        <Route path='/admin' element={true ? <LayoutAdmin /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path='addBlog' element={<AddBlog />} />
          <Route path='listBlog' element={<ListBlog />} />
          <Route path='comments' element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
