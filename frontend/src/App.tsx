import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
