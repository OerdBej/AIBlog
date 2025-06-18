import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import StoryListPage from "./pages/StoryListPage";
import StoryPage from "./pages/StoryPage";
import { storyLoader } from "./loaders/storyLoader";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/stories",
        element: <StoryListPage />,
      },
      {
        path: "/stories/:name",
        element: <StoryPage />,

        loader: storyLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
