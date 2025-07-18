import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
